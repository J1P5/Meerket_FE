import { ImageUpload, Text } from 'components/atoms';
import { CameraIcon } from 'components/atoms/Icon';
import { useCallback } from 'react';
import { colors } from 'styles';
import { removeDuplicateFiles, validateFileCount } from 'utils';
import { ImageUploadWrapper, UploadedImageCounterContainer } from './styled';

interface IUploadedImageCounter {
  /** Counter 위쪽 텍스트 */
  text: string;
  /** 현재 업로드 된 이미지 파일 목록 */
  files: File[];
  /** file input onChange 이벤트 발생 시 실행 될 함수 */
  onChange: (files: File[]) => void;
  /** 현재 업로드 된 이미지 개수 */
  currentCount: number;
  /** 업로드 받을 수 있는 이미지 개수 */
  totalCount?: number;
  /** 다중 업로드 가능 여부 */
  multiple?: boolean;
  /** 이미지 개수 초과 시 호출될 함수 */
  onExceed?: (exceededCount: number) => void;
}

export const UploadedImageCounter = ({
  text,
  files,
  onChange,
  currentCount,
  totalCount = 10,
  onExceed,
}: IUploadedImageCounter) => {
  const handleFileChange = useCallback(
    (newFiles: File[]) => {
      const remainingCount = totalCount - currentCount;

      // 중복 파일 필터링
      const uniqueFiles = removeDuplicateFiles(newFiles, files);
      if (uniqueFiles.length === 0) {
        return;
      }

      // 파일 개수 검증
      const { files: validFiles, exceededCount } = validateFileCount(
        uniqueFiles,
        remainingCount,
      );

      if (exceededCount) {
        onExceed?.(exceededCount);
      }
      onChange(validFiles);
    },
    [currentCount, files, onExceed, onChange, totalCount],
  );
  return (
    <UploadedImageCounterContainer>
      <CameraIcon size="l" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Text variant="guide_bold" color={colors.gray500}>
          {text}
        </Text>
        <Text
          variant="guide_regular"
          color={colors.gray400}
        >{`${currentCount}/${totalCount}`}</Text>
      </div>
      <ImageUploadWrapper>
        <ImageUpload onFileChange={handleFileChange} multiple />
      </ImageUploadWrapper>
    </UploadedImageCounterContainer>
  );
};

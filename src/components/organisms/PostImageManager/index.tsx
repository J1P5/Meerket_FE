import { UploadedImageCounter } from 'components/molecules';
import { PostImageItem } from 'components/organisms';
import { Fragment, useCallback, useMemo } from 'react';

import { useHorizontalScroll } from 'hooks';
import { IImageInfo } from 'types';
import { convertToWebP } from 'utils';
import { PostImageListWrapper, PostImageManagerWrapper } from './styled';

interface IPostImageManagerProps {
  /** ImageInfo 배열 (url: S3에 업로드 된 이미지 url, base64Url: 아직 S3에 올라가지 않아서 미리보기만 제공되는 url, file: 아직 안올라간 이미지들을 나중에 S3에 올리기 위해 필요한 file)*/
  imageInfos: IImageInfo[];
  /** imageInfos를 설정하는 함수 */
  setImageInfos: React.Dispatch<React.SetStateAction<IImageInfo[]>>;
  /** disabled 여부 */
  disabled?: boolean;
}

export const PostImageManager = ({
  imageInfos,
  setImageInfos,
  disabled = false,
}: IPostImageManagerProps) => {
  const {
    wrapperRef,
    handleMouseDown,
    handleMouseMove,
    handleEnd,
    handleTouchStart,
    handleTouchMove,
  } = useHorizontalScroll();

  const onChange = useCallback(
    async (files: File[]) => {
      if (disabled) return;
      const newImagePromises = files.map(async (file) => {
        const resizedFile = await convertToWebP(file);
        return {
          base64Url: URL.createObjectURL(file),
          file: resizedFile,
        };
      });

      const newImages = await Promise.all(newImagePromises);
      setImageInfos((prev) => [...prev, ...newImages]);
    },
    [setImageInfos, disabled],
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      if (disabled) return;
      setImageInfos((prev) => prev.filter((_, i) => i !== index));
    },
    [setImageInfos, disabled],
  );

  const files = useMemo(
    () => imageInfos.map((info) => info.file).filter((file) => file) as File[],
    [imageInfos],
  );

  return (
    <PostImageManagerWrapper
      ref={wrapperRef}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <UploadedImageCounter
        text="사진 등록"
        files={files}
        currentCount={imageInfos.length}
        totalCount={10}
        onChange={onChange}
      />
      <PostImageListWrapper>
        {imageInfos.map((info, index) => (
          <Fragment key={index}>
            <PostImageItem
              imgUrl={info.url || (info.base64Url as string)}
              isThumbnail={index === 0}
              onClick={() => handleRemoveImage(index)}
            />
          </Fragment>
        ))}
      </PostImageListWrapper>
    </PostImageManagerWrapper>
  );
};

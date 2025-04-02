import { ImageUploadWrapper } from './styled';

interface ImageUploadProps {
  /** 파일 변경 시 호출되는 콜백 함수 */
  onFileChange: (files: File[]) => void;
  /** 다중 파일 선택 여부 */
  multiple?: boolean;
}

export const ImageUpload = ({
  onFileChange,
  multiple = false,
}: ImageUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList?.length) return;
    onFileChange(Array.from(fileList));
    e.target.value = '';
  };

  return (
    <ImageUploadWrapper>
      <input
        type="file"
        onChange={handleFileChange}
        multiple={multiple}
        accept="image/*"
        aria-label="imageUploader"
      />
    </ImageUploadWrapper>
  );
};

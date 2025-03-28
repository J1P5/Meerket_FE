import { ImageUploadWrapper } from './styled';

interface IImageUploadProps {
  /** 파일을 선택했을 때 동작하는 로직,이후 파라미터 같은 부분 별도 커스텀 필요 합니다. */
  onFileChange: (file: FileList) => void;
  /** 다중 파일 업로드 가능 여부 */
  multiple?: boolean;
}
export const ImageUpload = ({
  onFileChange,
  multiple = false,
}: IImageUploadProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file?.length) {
      onFileChange(file);
    }
  };

  return (
    <ImageUploadWrapper>
      <input
        type="file"
        multiple={multiple}
        onChange={handleFileChange}
        aria-label="imageUploader"
      />
    </ImageUploadWrapper>
  );
};

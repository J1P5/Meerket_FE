import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { ImageElementWrapper, ImageWrapper } from "./styled";

export interface IImage {
  /** Imgae 타입 */
  type?: "default" | "round" | "square";
  /** 이미지 url  */
  url?: string;
  /** 이미지 대체텍스트 */
  alt?: string;
  /** 이미지 우선순위 */
  fetchpriority?: "auto" | "high" | "low";
  /** 이미지 로딩 방식 */
  loading?: "eager" | "lazy";
}
export const Image = ({
  type = "default",
  url = DEFAULT_IMG_PATH,
  alt = "이미지",
  fetchpriority = "auto",
  loading = "eager",
}: IImage) => {
  return (
    <ImageWrapper type={type}>
      <ImageElementWrapper
        fetchPriority={fetchpriority}
        src={url}
        alt={alt}
        loading={loading}
      />
    </ImageWrapper>
  );
};

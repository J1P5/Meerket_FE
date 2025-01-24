import { Image } from "components/atoms";
import { ImageSliderWrapper } from "./styled";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

// Swiper 컴포넌트를 지연 로딩 - 지연로딩 후 버그 발생으로 주석처리
// eslint-disable-next-line @rushstack/typedef-var
// const Swiper = React.lazy(() =>
//   import("swiper/react").then((module) => ({ default: module.Swiper }))
// );
// // eslint-disable-next-line @rushstack/typedef-var
// const SwiperSlide = React.lazy(() =>
//   import("swiper/react").then((module) => ({ default: module.SwiperSlide }))
// );

// TODO: import 오류 해결하기
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

interface IImageSliderProps {
  /** 이미지 url 배열 */
  imgUrls: string[];
}

export const ImageSlider = ({ imgUrls }: IImageSliderProps) => {
  useEffect(() => {
    // CSS 파일을 지연 로딩하고 오류를 처리 (block되기 때문에 지연로딩으로 변경)
    import("swiper/swiper-bundle.css")
      .then(() => {
        console.log("CSS 파일이 성공적으로 로드되었습니다.");
      })
      .catch((error) => {
        console.error("CSS 파일 로드 중 오류 발생:", error);
      });
  }, []);

  return (
    <ImageSliderWrapper>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
        className="image-slider"
      >
        {imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderWrapper>
  );
};

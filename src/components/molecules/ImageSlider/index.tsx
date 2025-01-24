import { Image } from "components/atoms";
import { ImageSliderWrapper } from "./styled";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper 컴포넌트를 지연 로딩 - 지연로딩 후 버그 발생으로 주석처리
// eslint-disable-next-line @rushstack/typedef-var
// const Swiper = React.lazy(() =>
//   import("swiper/react").then((module) => ({ default: module.Swiper }))
// );
// // eslint-disable-next-line @rushstack/typedef-var
// const SwiperSlide = React.lazy(() =>
//   import("swiper/react").then((module) => ({ default: module.SwiperSlide }))
// );

import "swiper/swiper-bundle.css";

// TODO: import 오류 해결하기
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

interface IImageSliderProps {
  /** 이미지 url 배열 */
  imgUrls: string[];
}

export const ImageSlider = ({ imgUrls }: IImageSliderProps) => {
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

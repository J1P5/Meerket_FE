import React, { Suspense } from "react";
import { Image } from "components/atoms";
import { Loading } from "../Loading";
import { ImageSliderWrapper } from "./styled";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
// Swiper 컴포넌트를 지연 로딩
// eslint-disable-next-line @rushstack/typedef-var
const Swiper = React.lazy(() =>
  import("swiper/react").then((module) => ({ default: module.Swiper }))
);
// eslint-disable-next-line @rushstack/typedef-var
const SwiperSlide = React.lazy(() =>
  import("swiper/react").then((module) => ({ default: module.SwiperSlide }))
);

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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ImageSliderWrapper>
  );
};

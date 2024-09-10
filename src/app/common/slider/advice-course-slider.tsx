"use client";

import React from "react";
import AdviceCourseCard from "../advice-course-card/advicecoursecard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdviceCourseSlider = () => {
  return (
    <>
      <div className="advice-course-container px-[16px] md:px-[24px]">
        <h4 className="font-bold text-neutral-900">
          Advice on choosing a course
        </h4>
        swiper
      </div>
      <div className="swiper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AdviceCourseSlider;

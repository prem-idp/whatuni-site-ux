
"use client";

import React from 'react';
import AdviceCourseCard from '../advice-course-card/advicecoursecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const AdviceCourseSlider = () => {
  return (
    <>
      <div className='advice-course-container px-[0] md:px-[24px] xl2:px-[0]'>
        <h4 className='font-bold text-neutral-900 mb-[16px] px-[16px] md:px-[24px] xl2:px-[0]'>Advice on choosing a course</h4>
        <Swiper
        freeMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
          },
          993: {
            slidesPerView: 3,
          }
        }}
        modules={[Navigation, Keyboard]}
        className="adviceCourseSlider"
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
  )
}

export default AdviceCourseSlider
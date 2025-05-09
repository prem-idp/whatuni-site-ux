"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination} from 'swiper/modules';
import Scholarshipunicard from '../cards/scholarshipuniversities/scholarshipunicard';
import { div } from 'motion/react-client';
const Scholarshipunislidercomponents = ({ scholarshipURL }: {scholarshipURL: boolean}) => {
  return (
    <>
      {scholarshipURL ? (
        <div className="">
          <Scholarshipunicard scholarshipURL={ true } />
      </div>
      ): (
         <div className="slider-container">
         <Swiper
         pagination={true}
         navigation={true}
         breakpoints={{
           320: {
             slidesPerView: 1,
             spaceBetween: 8,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           1200: {
             slidesPerView: 3,
             spaceBetween: 20,            
           },
         }}
         modules={[FreeMode, Pagination, Navigation]} 
         className="MultiSwiper">
             <SwiperSlide>
               <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>
             <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>
             <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>
             <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>
             <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>
             <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={false} />
             </SwiperSlide>            
           </Swiper>
         </div>
      ) }
       
    </>
  );
};

export default Scholarshipunislidercomponents;

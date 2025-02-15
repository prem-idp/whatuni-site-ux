"use client";

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {FreeMode, Navigation, Pagination} from 'swiper/modules';

import Reviewscard from '../cards/reviews-card/reviewscard';
import Reviewscardskeleton from '../skeleton/reviewscardskeleton';

const Reviewslidercomponents = ({onOpenReviewModal}:any) => {
  return (
    <> 
    <div className='slider-container'>
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
                  <Reviewscard onOpenReviewModal={onOpenReviewModal}/>
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard onOpenReviewModal={onOpenReviewModal} />
              </SwiperSlide>
              <SwiperSlide>
                <Reviewscard onOpenReviewModal={onOpenReviewModal} />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard onOpenReviewModal={onOpenReviewModal} />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard onOpenReviewModal={onOpenReviewModal} />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard onOpenReviewModal={onOpenReviewModal} />
              </SwiperSlide>
            </Swiper>   
          </div>
    </>
  );
};

export default Reviewslidercomponents;

"use client";

import React from 'react';
import AdviceCourseCard from '../cards/advice-course/advicecoursecard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdviceCourseCardSkeleton from '../skeleton/advicecoursecardskeleton';

const AdviceCourseSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0, 
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false,
          centerPadding: "32px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false,
          centerMode: true,
          centerPadding: "16px",
        }
      },
    ]
  };
  return (
    <>
      <div className='advice-course-container px-[0] md:px-[24px] xl2:px-[0]  mt-[48px]'>
        <h4 className='font-bold text-neutral-900 mb-[16px] px-[16px] md:px-[24px] xl2:px-[0]'>Advice on choosing a course</h4>
        
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCardSkeleton />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
          </Slider>
          <div className='flex justify-center mt-[34px]'>
            <a href='#' className='flex items-center w-fit font-semibold para text-secondary-500 hover:underline gap-[8px]'>
            View more advice
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </a>
          </div> 
        </div>
      </div>
    </>
  );
};

export default AdviceCourseSlider;

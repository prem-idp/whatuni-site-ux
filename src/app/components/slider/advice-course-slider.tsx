import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AdviceCourseSlider = () => {
  return (
    <>
      <div className='advice-course-container'>
        <h4>Advice on choosing a course</h4>
      </div>
      <div className='swiper'>swiper</div>
    </>
  )
}

export default AdviceCourseSlider
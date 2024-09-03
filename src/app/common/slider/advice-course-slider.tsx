
import React from 'react';
import AdviceCourseCard from '../advice-course-card/advicecoursecard';
const AdviceCourseSlider = () => {
  return (
    <>
      <div className='advice-course-container'>
        <h4 className='font-bold text-neutral-900'>Advice on choosing a course</h4>
        swiper
      </div>
      <div className='swiper'>
        <AdviceCourseCard />
      </div>
    </>
  )
}

export default AdviceCourseSlider

import AdviceCourseSlider from '@/app/common/slider/advice-course-slider';
import Subjectareas from '@/app/pages/findacourse/components/subjectareas';
import React from 'react';

const Findcourse = () => {
  return (
    <>
      <main>
        <div className='max-w-container mx-auto'>
          <Subjectareas></Subjectareas>
          <AdviceCourseSlider/>
        </div>
      </main>  
    </>
  )
}

export default Findcourse
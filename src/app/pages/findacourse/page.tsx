
import Subjectareas from '@/app/components/findacourse/subjectareas';
import AdviceCourseSlider from '@/app/components/slider/advice-course-slider';
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
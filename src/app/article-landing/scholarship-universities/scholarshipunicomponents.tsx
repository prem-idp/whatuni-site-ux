import Scholarshipunislidercomponents from '@/app/components/slider/scholarshipunislidercomponents'
import React from 'react'

const Scholarshipunicomponents = () => {
  return (
    <div className='scholarship-container bg-white'> 
    <div className="max-w-container mx-auto">
        <div className='scholarship-card-container px-[0] py-[34px] md:py-[64px]'>
            <div className='scholarship-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]'>
                <div className="text-heading3 md:h2 font-bold">Heading</div>
                <p className='font-normal small'>Subheading</p>
            </div>
            <div className='scholarship-course-container '>
              <div className="scholarship-inner-wrap"> 
                <Scholarshipunislidercomponents />
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Scholarshipunicomponents
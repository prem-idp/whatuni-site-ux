import React from 'react'
import Articlelinkcard from '../cards/article-link/articlelinkcard'

const Articlelinkcomponents = () => {
  return (
    <div className='articlelink-container bg-grey-50'> 
    <div className="max-w-container mx-auto">
        <div className='articlelink-card-container flex flex-col gap-[32px] px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[64px]'>
            <div className='articlelink-header  flex flex-col gap-[4px]'>
                <div className="text-heading3 md:h2 font-bold">Heading</div>
                <p className='font-normal small'>Subheading</p>
            </div>
            <div className='articlelink-course-container '>
              <div className="articlelink-inner-wrap"> 
                <Articlelinkcard />
              </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Articlelinkcomponents
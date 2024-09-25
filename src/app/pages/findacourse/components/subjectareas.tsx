import React from 'react'
import AlphabetsCard from '@/app/components/alphabets/alphabetscomponents'
import Findsubjectareascard from '@/app/components/cards/find-subject-areas/findsubjectareascard'
import Findsubjectareascardskeleton from '@/app/components/skeleton/findsubjectareascardskeleton'

const Subjectareas = () => {
  return (
    <div className='subject-areas-container'>
        <h2 className='font-bold text-heading4 px-[16px] md:px-[24px] xl2:px-[0]'>Subject areas</h2>
        <AlphabetsCard/>
      <div className='subjectarea-inner-container px-[16px] md:px-[24px] xl2:px-[0]'>
        <div className='subjectarea-inner-wrap grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3'>
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascard />
          <Findsubjectareascardskeleton />
          <Findsubjectareascard />
      </div> 
      <div className='flex justify-center mt-[40px]'>
        <a href='#' className='flex items-center w-fit font-semibold para text-secondary-500 hover:underline gap-[8px]'>
          View all subjects
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </a>
      </div>                                                         
    </div>
  </div>
  )
}

export default Subjectareas
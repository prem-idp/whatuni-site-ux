import React from 'react'
import AlphabetsCard from '@/app/common/alphabets-card/alphabetscard'
import Findsubjectareascard from '@/app/common/find-subject-areas-card/findsubjectareascard'

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
          <Findsubjectareascard />
          <Findsubjectareascard />
      </div>                                                          
    </div>
  </div>
  )
}

export default Subjectareas
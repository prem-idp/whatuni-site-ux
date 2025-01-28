"use client";
import React from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from "motion/react"

const Subjectmodalcomponents = () => {
  return (
    <AnimatePresence>
        <div className='modal modal-container flex  justify-center items-start md:items-center backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white'>  
            <motion.div 
            initial = {{transform: "translateX(-100%)",opacity: 0}}
            animate = {{transform: "translateX(0px)",opacity: 1}}
            exit = {{transform: "translateX(-100%)",opacity: 0, transition: {duration: 0.3, ease: "easeInOut"}}}
            className='modal-box shadow-custom-6 w-full md:w-[375px] p-[16px] bg-white overflow-hidden absolute left-0 h-[100vh]'>
                <div className='modal_close absolute top-[16px] right-[16px] z-[1] cursor-pointer'>
                    <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12"  alt='modal close'/>
                </div>
                <div className='select-subject-card'>
                    <div className='card-header flex flex-col gap-[4px]'>
                        <div className='h5 text-grey300'>Subjects</div>
                        <p className='para-lg font-semibold text-grey300'>Select a subject</p>
                    </div>
                </div>
       </motion.div>
       </div>
    </AnimatePresence>    
  )
}

export default Subjectmodalcomponents
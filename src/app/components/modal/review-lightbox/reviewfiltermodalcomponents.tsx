"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { AnimatePresence, motion } from "motion/react"

const Reviewfiltermodalcomponents = ({ onClose }:any) => {
  return (
    <>
    <AnimatePresence>
        <div className='modal modal-container fixed top-0 right-0 bottom-0'>  
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className='backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white'>
            </motion.div>            
            <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ stiffness: 70, duration: 0.3 }}
            className='modal-box shadow-custom-6 w-full md:w-[833px] p-[32px_24px_24px_32px] bg-white relative z-0 right-0 h-[100vh]'>
                <div onClick={onClose} className='modal_close w-[44px] h-[44px] bg-primary-400 hover:bg-primary-500 flex items-center justify-center absolute top-0 left-[-44px] z-[1] cursor-pointer'>
                    <Image className='block' src="/assets/icons/modal_close_white.svg" width="12" height="12"  alt='modal close'/>
                </div>
                <div className='review-modal-container flex flex-col gap-[16px]'>                    
                    <div className='review-modal-card flex flex-col gap-[24px] pr-[8px] custom-scrollbar-2 overflow-y-auto h-[100vh]'>
                        <div className='card-header flex flex-col gap-[8px]'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-[4px]'>
                                <span className='h5 text-grey300'>Student reviews: business</span>
                                <Link href="" className='small text-primary-400 underline hover:text-primary-400 hidden md:block'>Write a review</Link>
                            </div>
                            <p className='para font-semibold text-grey300'>University of Portsmouth</p>
                            <Link href="" className='small text-primary-400 underline hover:text-primary-400 md:hidden'>Write a review</Link>
                            <p className='small font-semibold text-grey300 underline'>Real student experiences</p>
                        </div>
                        <div className='filter-card pb-[24px] border-b border-b-grey-300'>sdfds</div>
                        <div className='rating-card pb-[24px] border-b border-b-grey-300'> asAS</div>                                        
                    </div>
                </div>
       </motion.div>
       </div>
    </AnimatePresence>     
    </>
  )
}

export default Reviewfiltermodalcomponents;
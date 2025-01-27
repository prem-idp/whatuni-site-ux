"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import Moduleinnercomponents from "@/app/course-details/modules/moduleinnercomponents";


const Modulesaccordioncomponents = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faq_items = [
        {
          title: "Modules (year 1)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 2)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 3)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 4)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
      ];
  return (
    <>
    <div className="accordion flex flex-col rounded-[6px] bg-white border border-grey-200 px-[16px]">
      {faq_items.map((item,index) => (
          <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0" key={index}>
              <div className='accordion-header flex items-center justify-between gap-[48px] para-lg font-semibold text-primary-400 hover:underline cursor-pointer' onClick={() => toggleAccordion(index)}>
                  {item.title}
                  <div className="relative flex items-center justify-center w-[12px] h-[12px]">
                        <span className="absolute">
                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477H1" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        
                        <motion.span animate={{rotate: openIndex === index ? 180: 90}}
                        className="absolute rotate-90">
                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477H1" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </motion.span>
                  </div>
              </div>
              <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                initial = {{height: 0, opacity: 0}}
                animate = {{height: 'auto', opacity: 1}}
                exit = {{height: 0, opacity: 0, transition: {duration: 0.25, ease: "easeInOut"}}}
                
                className={`accordion-body `}>
                    <div className="mt-[16px]">
                        <Moduleinnercomponents />
                    </div>                              
                </motion.div>
              )}
              </AnimatePresence>                       
          </div>
      ))}
      </div>
    </>
  )
}

export default Modulesaccordioncomponents
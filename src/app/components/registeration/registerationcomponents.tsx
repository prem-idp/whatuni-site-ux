"use client"
import React, {useEffect, useState}  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Signincomponents from './signincomponents'
import Signupcomponents from './signupcomponents'
import Signedupcomponents from './signedupcomponents'
import Socialsignincomponent from './socialsignincomponent'
import { AnimatePresence, motion } from "motion/react"

const Registerationcomponents = () => {
    const [isOpen,setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState<string | boolean>(true);
    const showSignupComp = (compName: string) => {
        setIsVisible(isVisible === compName ? false : compName);
        // if(compName === 'SIGNUP'){
        //     setIsVisible(false);
        // }      
    };
    useEffect(() => {
        const body = document.body;
      body.classList.add("overflow-y-hidden");
    }, [])
  return (
    <div className='modal modal-container flex  justify-center items-start md:items-center backdrop-shadow-white fixed top-0 right-0 left-0 bottom-0 bg-white'>
      <AnimatePresence>
      <motion.div
        initial={{y: 30,opacity:0}}
        animate={{y:0,opacity:1}}
        exit = {{y: 30,opacity:0}} 
        transition= {{duration: 0.25, ease: "easeInOut"}} 
      className='modal-box shadow-custom-6 w-full md:w-[728px] bg-white md:rounded-[8px] overflow-hidden relative'>
          <div className='modal_close absolute top-[12px] right-[12px] z-[1] cursor-pointer'>
              <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12"  alt='modal close'/>
          </div>
          {/* <Signupcomponents /> */}
          {/* <Signedupcomponents /> */}
          {isVisible ? (
              <Socialsignincomponent $showSignupComp={showSignupComp} />
          ):(
              <Signupcomponents />
          )}
          {/* <Signincomponents /> */}
      </motion.div>
      </AnimatePresence>
    </div>  
  )
}
export default Registerationcomponents
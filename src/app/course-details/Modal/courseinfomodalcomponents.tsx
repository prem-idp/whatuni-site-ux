"use client";
import React from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from "motion/react"

const Courseinfomodalcomponents = ({ onClose }:any) => {
  return (
    <AnimatePresence>
        <div className='modal modal-container fixed top-0 right-0 left-0 bottom-0'>  
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className='backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white'>
            </motion.div>            
            <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ stiffness: 70, duration: 0.3 }}
            className='modal-box shadow-custom-6 w-full md:w-[375px] p-[16px_0_16px_16px] bg-white overflow-hidden relative z-0 left-0 h-[100vh]'>
                <div onClick={onClose} className='modal_close absolute top-[16px] right-[16px] z-[1] cursor-pointer'>
                    <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12"  alt='modal close'/>
                </div>
                <div className='select-subject-container flex flex-col gap-[16px]'>                    
                    <div className='select-subject-card pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh_-_82px)]'>
                    {/* -- */}
                        <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select2" />
                                            <label htmlFor="select2" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}
                    {/* -- */}
                    <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select3" />
                                            <label htmlFor="select3" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}
                    {/* -- */}
                    <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select4" />
                                            <label htmlFor="select4" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}
                    {/* -- */}
                    <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select5" />
                                            <label htmlFor="select5" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}
                    {/* -- */}
                    <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select6" />
                                            <label htmlFor="select6" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}
                    {/* -- */}
                    <div className='flex flex-col gap-[16px] border-b border-b-grey400 pb-[24px] mb-[24px]'>
                            <div className='card-header flex flex-col gap-[4px]'>
                                <div className='h5 text-grey300'>Course info</div>
                                <p className='para-lg font-semibold text-grey300'>Select a course option</p>
                            </div>
                            <div className='option-list flex flex-col gap-[16px]'>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Qualification</span>
                                    <span className='small text-grey300'>Bachelor of Arts (with Honours) - BA (Hons)
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Location</span>
                                    <span className='small text-grey300'>Norwich University of the Arts
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Study mode</span>
                                    <span className='small text-grey300'>Full time
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Start date</span>
                                    <span className='small text-grey300'>SEP-24
                                    </span>
                                </div>
                                <div className='flex justify-start items-start gap-[8px]'>
                                    <span className='small font-semibold text-grey300'>Duration</span>
                                    <span className='small text-grey300'>3 years
                                    </span>
                                </div>
        
                                <div className='modal-select'>
                                    <div className='form_check'>
                                        <div className="col flex relative">
                                            <input type="checkbox" name="yoe" className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="select7" />
                                            <label htmlFor="select7" className="check-label flex justify-center items-center w-full Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">      <span className='selected'>Selected</span><span className='select'>Select</span>               
                                            </label>             
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    {/* -- */}                                                            
                    </div>
                    <div className='apply-card flex p-[8px] absolute left-0 bottom-0 w-full gap-[8px] shadow-custom-10 z-4'>
                       <ul className='flex justify-between items-center w-full'>
                            <li className='w-[50%] text-center'><span className='para font-semibold text-primary-400 hover:text-primary-500 cursor-pointer hover:underline p-[12px_16px]'>Cancel</span></li>
                            <li className='w-[50%]'><button className="btn btn-primary text-[18px] flex items-center justify-center min-w-[180px] w-full gap-[8px] p-[13px_20px] group-hover:bg-primary-500">Apply</button></li>
                        </ul>
                    </div>
                </div>
       </motion.div>
       </div>
    </AnimatePresence>  
  )
}

export default Courseinfomodalcomponents
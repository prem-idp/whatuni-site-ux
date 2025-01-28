import Getprospectus from '@/app/components/cards/interaction-button/getprospectus'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Visitwebsite from '@/app/components/cards/interaction-button/visitwebsite'
import RequestInfo from '@/app/components/cards/interaction-button/requestinfo'
import BookEvent from '@/app/components/cards/interaction-button/bookevent'

const Courseheaderinfocomponents = () => {
  return (
    <>
      <div className='cd-uni-info-container'>
        <div className='max-w-container mx-auto'>
          <div className='cd-uniinfo-card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
                    {/* -- */}
                    <div className='uniresults-inner flex flex-col md:flex-row gap-[24px]'>
                        <div className='uniresults-left'>
                          <div className="univ__logo bg-white p-[4px] w-[120px] rounded-[4px] shadow-custom-4 overflow-hidden hidden md:block">
                            <Image className='w-full' src="/assets/images/myhc_252670.jpg" alt="uni logo" width={112} height={112}  />
                          </div>
                        </div>
                        <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                            <div className='uni-info-card flex flex-col gap-[8px]'>
                              <div className='flex justify-between items-start h5 text-grey300'>
                                <span>Animation BA (Hons)</span>
                                <span className="favorite group items-center justify-center flex min-w-[48px] w-[48px] h-[48px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                                    <svg
                                      className='group-hover:fill-primary-400'
                                      width="20"
                                      height="18"
                                      viewBox="0 0 20 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                      className='group-hover:stroke-white'
                                        d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z"
                                        stroke="#4664DC"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                              </div>
                            <a href="#" className='block w-fit para-lg font-semibold text-primary-400 hover:text-primary-500 hover:underline line-clamp-1'>Norwich University of the Arts</a>
                            <div className='flex'>
                              <div className='rating-pod flex items-center gap-[8px]'>
                                <div className='rating-card flex items-center gap-[8px]'>
                                <span className="reviewLink small text-grey300">Student rating</span>
                                  <div className='tooltip'>
                                    <div className='flex gap-[2px] pb-[2px] border-b border-dashed border-grey-300'>
                                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3604 1.06101C4.56172 0.441415 5.43828 0.441415 5.6396 1.06101L6.3589 3.27479C6.44893 3.55188 6.70715 3.73948 6.9985 3.73948H9.3262C9.97768 3.73948 10.2485 4.57314 9.72149 4.95607L7.83834 6.32426C7.60263 6.49551 7.504 6.79906 7.59404 7.07615L8.31334 9.28993C8.51465 9.90952 7.8055 10.4247 7.27844 10.0418L5.39529 8.67363C5.15959 8.50238 4.84041 8.50238 4.60471 8.67363L2.72156 10.0418C2.1945 10.4247 1.48535 9.90952 1.68666 9.28993L2.40596 7.07615C2.496 6.79906 2.39737 6.49551 2.16166 6.32426L0.278509 4.95607C-0.248549 4.57314 0.0223231 3.73948 0.673802 3.73948H3.0015C3.29286 3.73948 3.55107 3.55188 3.6411 3.27479L4.3604 1.06101Z" fill="#BC0000"/>
                                      </svg>
                                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3604 1.06101C4.56172 0.441415 5.43828 0.441415 5.6396 1.06101L6.3589 3.27479C6.44893 3.55188 6.70715 3.73948 6.9985 3.73948H9.3262C9.97768 3.73948 10.2485 4.57314 9.72149 4.95607L7.83834 6.32426C7.60263 6.49551 7.504 6.79906 7.59404 7.07615L8.31334 9.28993C8.51465 9.90952 7.8055 10.4247 7.27844 10.0418L5.39529 8.67363C5.15959 8.50238 4.84041 8.50238 4.60471 8.67363L2.72156 10.0418C2.1945 10.4247 1.48535 9.90952 1.68666 9.28993L2.40596 7.07615C2.496 6.79906 2.39737 6.49551 2.16166 6.32426L0.278509 4.95607C-0.248549 4.57314 0.0223231 3.73948 0.673802 3.73948H3.0015C3.29286 3.73948 3.55107 3.55188 3.6411 3.27479L4.3604 1.06101Z" fill="#BC0000"/>
                                      </svg>
                                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3604 1.06101C4.56172 0.441415 5.43828 0.441415 5.6396 1.06101L6.3589 3.27479C6.44893 3.55188 6.70715 3.73948 6.9985 3.73948H9.3262C9.97768 3.73948 10.2485 4.57314 9.72149 4.95607L7.83834 6.32426C7.60263 6.49551 7.504 6.79906 7.59404 7.07615L8.31334 9.28993C8.51465 9.90952 7.8055 10.4247 7.27844 10.0418L5.39529 8.67363C5.15959 8.50238 4.84041 8.50238 4.60471 8.67363L2.72156 10.0418C2.1945 10.4247 1.48535 9.90952 1.68666 9.28993L2.40596 7.07615C2.496 6.79906 2.39737 6.49551 2.16166 6.32426L0.278509 4.95607C-0.248549 4.57314 0.0223231 3.73948 0.673802 3.73948H3.0015C3.29286 3.73948 3.55107 3.55188 3.6411 3.27479L4.3604 1.06101Z" fill="#BC0000"/>
                                      </svg>
                                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3604 1.06101C4.56172 0.441415 5.43828 0.441415 5.6396 1.06101L6.3589 3.27479C6.44893 3.55188 6.70715 3.73948 6.9985 3.73948H9.3262C9.97768 3.73948 10.2485 4.57314 9.72149 4.95607L7.83834 6.32426C7.60263 6.49551 7.504 6.79906 7.59404 7.07615L8.31334 9.28993C8.51465 9.90952 7.8055 10.4247 7.27844 10.0418L5.39529 8.67363C5.15959 8.50238 4.84041 8.50238 4.60471 8.67363L2.72156 10.0418C2.1945 10.4247 1.48535 9.90952 1.68666 9.28993L2.40596 7.07615C2.496 6.79906 2.39737 6.49551 2.16166 6.32426L0.278509 4.95607C-0.248549 4.57314 0.0223231 3.73948 0.673802 3.73948H3.0015C3.29286 3.73948 3.55107 3.55188 3.6411 3.27479L4.3604 1.06101Z" fill="#BC0000"/>
                                        </svg>
                                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3604 1.06101C4.56172 0.441415 5.43828 0.441415 5.6396 1.06101L6.3589 3.27479C6.44893 3.55188 6.70715 3.73948 6.9985 3.73948H9.3262C9.97768 3.73948 10.2485 4.57314 9.72149 4.95607L7.83834 6.32426C7.60263 6.49551 7.504 6.79906 7.59404 7.07615L8.31334 9.28993C8.51465 9.90952 7.8055 10.4247 7.27844 10.0418L5.39529 8.67363C5.15959 8.50238 4.84041 8.50238 4.60471 8.67363L2.72156 10.0418C2.1945 10.4247 1.48535 9.90952 1.68666 9.28993L2.40596 7.07615C2.496 6.79906 2.39737 6.49551 2.16166 6.32426L0.278509 4.95607C-0.248549 4.57314 0.0223231 3.73948 0.673802 3.73948H3.0015C3.29286 3.73948 3.55107 3.55188 3.6411 3.27479L4.3604 1.06101Z" fill="#ADB2B6"/>
                                      </svg>
                                    </div>
                                  </div>
                                  <span className='small text-grey300'>(4.6)</span>
                                </div>
                                <a href="#" className='reviewLink block font-normal small text-primary-400 hover:text-primary-500 underline'>View reviews</a>
                              </div>
                            </div>  
                            <p className='small text-grey300 line-clamp-3 md:line-clamp-2'>Want to know what it's like to study this course at uni? We've got all the key info, from entry requirements to the modules on offer. If that all sounds good, why not check out reviews from real students or even book onto an upcoming open day?</p>                        
                            </div>
                            <div className='uniresults-content-right flex items-end'>
                              <div className='btn-pod w-full grid grid-col-1 md:grid-cols-2 lg:flex lg:grid-cols-none gap-[8px]'>
                                <Getprospectus pageName={"courseDetails"} />
                                <Visitwebsite />
                                <BookEvent />
                                <RequestInfo />
                              </div>
                          </div> 
                        </div>    
                
                    </div>
                    {/* -- */}
                  </div>
        </div>
      </div>
    </>
  )
}

export default Courseheaderinfocomponents
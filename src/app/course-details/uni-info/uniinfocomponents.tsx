import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reviewscomponents from '@/app/home/reviews/reviewscomponents'
import Reviewslidercomponents from '@/app/components/slider/reviewslidercomponents'
import Getprospectus from '@/app/components/cards/interaction-button/getprospectus'
import Viewprofile from '@/app/components/cards/interaction-button/viewprofile'

const Uniinfocomponents = () => {
  
  return (
    <>
      <div className='uni-info-container'> 
        <div className="max-w-container mx-auto">
            <div className='uni-info-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
                <div className='h5 w-full md:w-[289px]'>Uni info</div>
                <div className='flex flex-col gap-[16px] md:gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>
                  <div className='course-card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>                  
                    {/* -- */}
                    <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
                        <div className='uniresults-left'>
                          <div className="univ__logo hidden md:block bg-white p-[4px] w-[120px] rounded-[8px] shadow-custom-4 overflow-hidden">
                            <Image className='w-full' src="/assets/images/myhc_252670.jpg" alt="uni logo" width={112} height={112}  />
                          </div>
                        </div>
                        <div className='uniresults-right flex flex-col gap-[16px]'>
                            <div className='uni-info-card flex flex-col gap-[8px]'>
                              <div className='flex md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                              <a href="#" className='block w-fit h5  text-primary-400 hover:text-primary-500 hover:underline line-clamp-1'>Norwich University of the Arts</a>
                                <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                    className='group-hover:stroke-white'
                                    d="M2.02513 2.05003C0.658291 3.41686 0.658291 5.63294 2.02513 6.99978L8.00004 12.9747L13.9749 6.99978C15.3417 5.63294 15.3417 3.41686 13.9749 2.05003C12.608 0.683194 10.392 0.683194 9.02513 2.05003L8.00004 3.0752L6.97487 2.05003C5.60804 0.683194 3.39196 0.683194 2.02513 2.05003Z" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </span>
                                {/* <a className="flex gap-[8px] group" href="#">
                                <svg 
                                className='group-hover:fill-primary-400'
                                width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path 
                                  className='group-hover:stroke-primary-400'
                                  d="M17.1437 9.79631C14.9739 12.3161 10.419 16.1896 9.71263 16.7861C9.65686 16.8332 9.5823 16.8337 9.52591 16.7873C8.74209 16.1434 3.27771   11.6293 1.86774 9.79631C0.849038 8.47199 0.501753 7.22424 0.955741 5.61631C1.44629 3.87887 2.53272 2.79441 4.29974 2.42431C5.66722 2.13788 6.55457 2.54278 7.79574 3.18431C8.42503 3.50957 9.20753 4.18317 9.50113 4.44496C9.56628 4.50304 9.66668 4.49637 9.72424 4.43077C10.0058 4.10994 10.807 3.2403 11.5197 2.88031C12.6437 2.31262 13.4599 2.11874 14.7117 2.42431C16.3644 2.8277 17.4948 3.69343 17.9797 5.38831C18.4377 6.98881 18.2563 8.50431 17.1437 9.79631Z" stroke="#333333" stroke-width="1.52"/>
                                  </svg>
                                <span className="small text-grey300 group-hover:underline group-hover:text-primary-400">Favourite</span></a> */}                                                         
                            </div>
                            <p className='small text-grey300 line-clamp-3 md:line-clamp-2'>Norwich University of the Arts was founded more than 175 years ago, and today provides students with excellent teaching that...</p>
                            <div className='flex flex flex-col md:flex-row gap-[8px] md:gap-[32px]'>
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
                                <a href="#" className='reviewLink block font-normal small text-primary-400 hover:text-primary-500 hover:underline'>View reviews</a>
                              </div>
                              <div className='flex items-center small text-neutral-900'>CUG ranking&nbsp;
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9.50977C3 9.16459 3.27982 8.88477 3.625 8.88477H4.875C5.22018 8.88477 5.5 9.16459 5.5 9.50977V12.6348C5.5 12.9799 5.22018 13.2598 4.875 13.2598H3.625C3.27982 13.2598 3 12.9799 3 12.6348V9.50977Z" fill="#BC0000"/>
                                <path d="M6.75 7.00977C6.75 6.66459 7.02982 6.38477 7.375 6.38477H8.625C8.97018 6.38477 9.25 6.66459 9.25 7.00977V12.6348C9.25 12.9799 8.97018 13.2598 8.625 13.2598H7.375C7.02982 13.2598 6.75 12.9799 6.75 12.6348V7.00977Z" fill="#BC0000"/>
                                <path d="M10.5 5.13477C10.5 4.78959 10.7798 4.50977 11.125 4.50977H12.375C12.7202 4.50977 13 4.78959 13 5.13477V12.6348C13 12.9799 12.7202 13.2598 12.375 13.2598H11.125C10.7798 13.2598 10.5 12.9799 10.5 12.6348V5.13477Z" fill="#BC0000"/>
                              </svg>
                                88th</div>
                            </div>                          
                            </div>
                            <div className='uniresults-content-right flex items-end'>
                            <div className='btn-pod w-full flex gap-[8px]'>
                              <Getprospectus pageName={"courseDetails"} />
                            </div>
                          </div> 
                        </div>                    
                    </div>
                    {/* -- */}
                  </div>
                  <div className='course-card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>                  
                        <div className="course-highlight__option flex flex-col md:flex-row items-center gap-[24px]">
                            <div className='w-[120px] p-[10px]'>
                                <Image className='w-full' src="/assets/images/course-details/wusca/WUSCA_badge.png" alt="academic-cap" width="120" height="93" />    
                            </div>                          
                          <div className="flex flex-col gap-[4px] *:text-grey300">
                            <div className="h5 font-semibold">Whatuni Student Choice Awards</div>
                            <p className="small">Winner: Facilities</p>
                          </div>
                        </div>                    
                  </div>
                  <div className='course-card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>                  
                        <div className="course-highlight__option flex flex-col md:flex-row items-center gap-[24px]">
                            <div className='w-[120px] p-[10px]'>
                                <Image className='w-full' src="/assets/images/course-details/wusca/WUSCA_badge.png" alt="academic-cap" width="120" height="93" />    
                            </div>                          
                          <div className="flex flex-col gap-[4px] *:text-grey300">
                            <div className="h5 font-semibold">Whatuni Student Choice Awards</div>
                            <p className="small">Winner: Facilities</p>
                          </div>
                        </div>                    
                  </div>
                  {/* -- */}
                  <div className='flex flex-col md:flex-row border border-grey-200 rounded-b-[8px] md:rounded-r-[8px] overflow-hidden'>
                    <div className='card-map w-full md:w-[453px]'>
                      <Image className='block w-full object-cover' layout='fixed' src="/assets/images/course-details/map_img.jpg" width={453} height={316} alt="Map"/>
                    </div>
                    <div className='course-card flex flex-col gap-[16px] bg-white p-[16px] md:p-[24px] w-full md:w-[calc(100%_-_452px)]'>                  
                      <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[8px]'>
                          <div className='h5 text-grey300'>Norwich University of the Arts</div>
                          <div className="flex flex-col *:text-small *:text-grey300">
                            <span>Richmond Road</span> 
                            <span>Bradford</span> 
                            <span>BD7 1DP</span> 
                            <span>United Kingdom</span>
                          </div>
                          <div className="flex items-start gap-[8px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span className="flex flex-col lg:flex-row items-start gap-[4px] small">Nearest train station:
                                <span>Frizinghall&nbsp;1.2 miles away</span>
                              </span>
                            </div>
                        </div>
                        <div className="course-highlight__details w-full flex bg-blue-50 rounded-[4px] p-[16px]">
                          <div className="course-highlight__option  flex flex-col items-start gap-[16px]">                      
                            <div className="flex flex-col">
                              <div className="para font-semibold text-black">Thinking of studying in Norwich?</div>
                              <p className="small text-black">Check out our</p>
                              <Link href="" className='small text-primary-500 hover:text-primary-500 hover:underline' title=''>Norwich City guide</Link>
                            </div>
                          </div>
                      </div>
                      </div>
                    </div>  
                  </div>
                  {/* -- */}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Uniinfocomponents
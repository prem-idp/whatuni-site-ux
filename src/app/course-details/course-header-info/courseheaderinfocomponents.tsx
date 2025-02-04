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
                    <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
                        <div className='uniresults-left'>
                          <div className="univ__logo bg-white p-[4px] w-[120px] rounded-[8px] shadow-custom-4 overflow-hidden hidden md:block">
                            <Image className='w-full' src="/assets/images/myhc_252670.jpg" alt="uni logo" width={112} height={112}  />
                          </div>
                        </div>
                        <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                            <div className='uni-info-card flex flex-col gap-[8px]'>
                              <div className='flex flex-col-reverse md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                                <span>Animation BA (Hons)</span>
                                <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
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
                            <a href="#" className='block w-fit para-lg font-semibold text-primary-400 hover:text-primary-500 hover:underline'>Norwich University of the Arts</a>
                            <div className='flex'>
                              <div className='rating-pod flex items-center gap-[8px]'>
                                <div className='rating-card flex items-center gap-[8px]'>
                                <span className="reviewLink small text-grey300">Student rating</span>
                                <div className='flex gap-[4px]'>
                                  <div className='tooltip'>
                                    <div className='flex gap-[2px]'>
                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                      </svg>
                                    </div>
                                  </div>
                                  <span className='small text-grey300'>(4.6)</span>
                                </div>
                                </div>
                                <a href="#" className='reviewLink block small text-primary-400 hover:text-primary-500 hover:underline'>View reviews</a>
                              </div>
                            </div>  
                            <p className='small text-grey300'>Want to know what it's like to study this course at uni? We've got all the key info, from entry requirements to the modules on offer. If that all sounds good, why not check out reviews from real students or even book onto an upcoming open day?</p>                        
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
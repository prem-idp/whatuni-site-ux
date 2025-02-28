import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reviewscard from '../../cards/reviews-card/reviewscard'

const Oneclickmodalcomponents = ({isOpen, onClose}: any) => {
  return (
    <>
      <div onClick={onClose} className={`${isOpen ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[10]`}>
      </div>
      <div className='modal modal-container flex justify-center items-center fixed top-0 right-0 bottom-0 z-[11]'>            
          <div className={`${isOpen ? "translate-y-0 opacity-[1] " : "translate-y-[100px] opacity-0"} transition-all duration-300 modal-box shadow-custom-6 w-full md:w-[720px] lg:w-[1092px] p-[0] md:p-[24px] lg:p-[40px] bg-grey-50 md:rounded-[8px] fixed top-auto left-0 right-0 mx-auto h-[100vh] md:h-auto`}>
              <div onClick={onClose} className='modal_close flex items-center justify-center absolute top-[8px] right-[8px] md:top-[10px] md:right-[10px] lg:top-[12px] lg:right-[12px] z-[1] cursor-pointer'>
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='stroke-grey-600' d="M1 13L13 1M1 1L13 13"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
              <div className='oneclick-container flex flex-col-reverse md:flex-row gap-[16px] md:gap-[20px] p-[16px] md:p-[0] max-md:pb-[80px] max-md:pr-[10px] max-md:mr-[10px] max-md:h-[100vh]  max-md:custom-scrollbar-2 max-md:overflow-y-auto'>
                <div className='oneclick-left flex flex-col gap-[16px] w-full md:w-[304px] lg:w-[392px]'>
                  <Link href="" className='card flex flex-col bg-white rounded-[8px] shadow-custom-2 overflow-hidden'>
                    <div className='card-header relative min-h-[160px] bg-grey-200'>
                        <Image src="/assets/images/course-details/one_click_image.jpg" width="392" height="221" className='block w-full h-auto' alt='Article_image' />
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack2 z-0'></div>
                        <div className='absolute z-[1] top-[16px] left-[16px] rounded-[8px] overflow-hidden'>
                                <Image src='/assets/images/uni_logo_tile1.jpg' width="64" height="64" alt="University logo" />
                        </div>
                        <div className='absolute top-[16px] right-[16px] z-[1]'>
                          <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                                    <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                                            stroke="#4664DC"
                                            strokeWidth="1.67"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        </svg>
                                    </div>                                  
                          </span>
                        </div>                          
                        <div className='flex flex-col gap-[4px] w-full absolute bottom-0 p-[16px]'>
                          <div className='card-title h6 font-farro font-bold text-white line-clamp-2'>University of East Anglia UEA</div>
                          <div className='rating-pod flex items-center gap-[8px]'>
                              <div className='rating-card flex items-center gap-[4px]'>
                                  <Image src="/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                  <span className='font-normal small text-white'>4.6</span>
                              </div>
                              <span className='reviewLink block small text-white underline'>400 reviews</span>
                          </div>
                        </div>
                    </div>   
                  </Link>
                  <div className='h5 text-grey300'>What students say</div>
                  <Reviewscard />
                </div>
                <div className='oneclick-right flex flex-col flex-1 bg-white border border-grey-200 rounded-[8px] p-[16px] lg:p-[32px] gap-[16px] md:gap-[24px]'>
                  <div className='flex flex-col gap-[8px] border-b border-grey-200 pb-[16px] md:pb-[24px] h-fit'>
                    <div className='h5 font-bold text-grey300'>Get prospectus from</div>
                    <p className='para md:para-lg font-semibold text-grey300'>University of Bradford</p>
                  </div>
                  <div className='address flex flex-col gap-[8px] border border-grey-200 bg-grey-50 p-[16px] rounded-[8px]'>
                    <div className='small font-semibold'>Send prospectus to</div>
                    <div className='address flex flex-col'>
                      <div className='small font-semibold text-grey300'>Name:</div>
                      <div className='flex items-start lg:items-center gap-[4px]'>
                        <div className='small font-semibold text-grey300'>Address: <span className='font-normal'>69, Zoo Lane, Coventry, England, GA1 2LD</span></div>                        
                      </div>
                      <Link href="#" className="small text-primary-400 hover:text-primary-500 hover:underline">Edit</Link>
                    </div>
                  </div>
                  <div className='privacy'>
                    <div className="form_check flex flex-col gap-[8px]">
                    <label className="check-label small font-semibold text-grey300">
                      Stay up to date via email{" "}
                      <span className="x-small font-normal text-grey-700">
                        (optional)
                      </span>
                    </label>
                    <div className="form-check-group flex flex-col gap-[8px]">
                      <div className="col flex items-start gap-[12px] relative">
                        <div className="checkbox_card">
                          <input type="checkbox" className="form-checkbox hidden" id="oneclick" />
                          <label htmlFor="oneclick" className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400"
                          >
                            <svg
                                  width="10"
                                  height="8"
                                  viewBox="0 0 10 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.666667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                            </svg>
                          </label>
                        </div>
                        <label
                          htmlFor="oneclick"
                          className="check-label small font-semibold w-[calc(100%_-_28px)]"
                        >
                        <p className="x-small font-normal text-grey-600">
                          Don’t show this again, I’m happy for this data to be sent each time I order a prospectus
                        </p>
                        </label>
                      </div>
                      <div className="col flex items-start gap-[12px] relative">
                        <div className="checkbox_card">
                              <input
                                type="checkbox"
                                className="form-checkbox hidden"
                                id="Surveys"
                              />
                              <label
                                htmlFor="Surveys"
                                className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
                              >
                                <svg
                                  width="10"
                                  height="8"
                                  viewBox="0 0 10 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.666667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                        </div>
                        <label
                              htmlFor="Surveys"
                              className="check-label small font-semibold w-[calc(100%_-_28px)]"
                            >
                              <span className="x-small font-semibold text-grey-600">
                              (Recommended) I want news and updates from [Uni X] &nbsp;
                                <span className="x-small font-normal text-grey-700">
                                (tick to opt in)
                                </span>
                              </span>
                              <p className="x-small font-normal text-grey-600">
                              Receive newsletters direct from the uni. Contact the university directly to update your email preferences, 
                              <Link href="" className='text-primary-400 hover:text-primary-500 hover:underline pl-[4px]'>Privacy Policy</Link>
                              </p>
                        </label>
                      </div>
                      <div className="err_msg">
                            <p className="x-small font-normal text-negative-default">
                              Please agree to our terms and conditions
                            </p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div>
                    <button type='button' className='btn btn-primary flex items-center justify-center w-full  gap-[8px]'>Order my free prospectus <Image src="/assets/icons/right_white_arrow.svg" width="17" height="14" alt="arrow icon" />
                    </button>
                  </div>
                </div>
              </div>
          </div>
      </div> 
    </>
  )
}

export default Oneclickmodalcomponents
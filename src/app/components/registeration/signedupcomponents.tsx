import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Signedupcomponents = () => {
  return (
           <div className='registeration-container flex flex-col md:flex-row h-[100vh] overflow-auto md:h-[100%]'>
                <div className='regist-col min-w-[309px] w-full md:w-[309px]  flex flex-col justify-center gap-[20px] md:gap-[24px]  px-[24px] py-[24px] md:py-[45px] bg-blue-200 hidden md:flex'>
                    <div className='flex justify-start md:justify-center gap-[12px]'>
                        <Image className='block' src="/assets/images/registeration/regist_hero_image.png" width="97" height="129"  alt='hero image'/>
                        <h5 className='self-center text-left text-[24px] leading-[31px] block md:hidden'>Why create an account?</h5>
                    </div>
                    <div className='flex flex-col gap-[8px] md:px-[8px]'>
                        <h5 className='text-center hidden md:block'>Why create an account?</h5>
                        <ul className='flex flex-col gap-[16px]'>
                            <li className='flex flex-row items-start justify-start'>
                                <div className='min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]'></div>
                                <div>
                                    <div className='small font-semibold text-grey300 line-clamp-1'>Save your results:</div>
                                    <div className='small font-normal text-grey300 line-clamp-2'>Keep your cost of living estimates so you can check them anytime</div>
                                </div>
                            </li>
                            <li className='flex flex-row items-start justify-start'>
                                <div className='min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]'></div>
                                <div>
                                    <div className='small font-semibold text-grey300 line-clamp-1'>Build your shortlist:</div>
                                    <div className='small font-normal text-grey300 line-clamp-2'>Add universities to your favourites, making it easy to compare</div>
                                </div>
                            </li>
                            <li className='flex flex-row items-start justify-start'>
                                <div className='min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]'></div>
                                <div>
                                    <div className='small font-semibold text-grey300 line-clamp-1'>Unlock insights:</div>
                                    <div className='small font-normal text-grey300 line-clamp-2'>Quickly view costs by university, city, and region</div>
                                </div>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className='regist-col w-full flex items-center relative'>
                    {/* <Signedupcomponents /> */}
                    <div className='signedup w-full flex flex-col self-start px-[16px] md:px-[24px] pt-[40px] pb-[16px] md:pb-[24px] gap-[16px]'>
                        <div className='success_continer flex items-start bg-positive-light rounded-[6px] px-[16px] py-[16px] gap-[8px] border border-positive-default'>
                        <svg className='mt-[4px]' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7L5 11L15 1" stroke="#106519" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className='small font-semibold text-positive-dark flex w-[calc(100%_-_24px)]'>You have successfully signed up to Whatuni</p>
                        </div>
                        <div className='thanks_card flex flex-col gap-[4px]'>
                            <h6 className='text-grey300'>Thanks!</h6>
                            <p className='small font-normal text-grey300'>If you’re not a student researching for yourself, let us know so we can plan some great content tailored for you.</p>
                        </div>                       
                                                
                        <form className='signedup_form w-full h-full flex flex-col gap-[24px] md:gap-[36px]'>
                            <div className='form_container flex flex-col gap-[16px] bg-grey-50 px-[16px] py-[16px]'>
                                <div className='form_radio flex flex-col gap-[8px]'>
                                    <label className="check-label small font-semibold text-grey300">What description fits you best? <span className='x-small font-normal text-grey-700'>(optional)</span></label>
                                    <div className='form-radio-group flex flex-col gap-[10px]'>
                                        <div className="col flex items-center gap-[12px]">
                                            <div className='radio_card'>
                                                <input type="radio" name="descrip" className="form-radio hidden" id="parents" />
                                                <label htmlFor='parents' className='flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400'>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clipRule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <label htmlFor="parents" className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]">Parents</label>                            
                                        </div>
                                        <div className="col flex items-center gap-[12px]">
                                            <div className='radio_card'>
                                                <input type="radio" name="descrip" className="form-radio hidden" id="teacher" />
                                                <label htmlFor='teacher' className='flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400'>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clipRule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <label htmlFor="teacher" className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]">Teacher</label>                            
                                        </div>
                                        <div className="col flex items-center gap-[12px]">
                                            <div className='radio_card'>
                                                <input type="radio" name="descrip" className="form-radio hidden" id="advisor" />
                                                <label htmlFor='advisor' className='flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400'>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clipRule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <label htmlFor="advisor" className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]">Career Advisor</label>                            
                                        </div>
                                        <div className="col flex items-center gap-[12px]">
                                            <div className='radio_card'>
                                                <input type="radio" name="descrip" className="form-radio hidden" id="sector" />
                                                <label htmlFor='sector' className='flex justify-center items-center w-[16px] h-[16px] rounded-[16px] border border-grey-400'>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clipRule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <label htmlFor="sector" className="check-label x-small font-semibold text-grey-600 w-[calc(100%_-_28px)]">Work in the sector</label>                            
                                        </div>                                                                                                    
                                    </div>           
                                </div>
                            </div> 
                            <div className='flex flex-col justify-between items-center gap-[24px]'>
                            <div className='submit_btn w-full'>
                                <button type="submit" className="btn btn-primary w-full flex items-center justify-center">Submit</button>
                            </div>
                            <div className='small font-semibold text-grey300'><Link href="" className='text-primary-400 hover:text-primary-500 hover:underline'>I’m researching for myself</Link> </div>
                        </div>
                        </form>
                    </div>     
                    {/* <Signedupcomponents /> */}
                </div>
            </div>
  )
}

export default Signedupcomponents
"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
type ChildComponentProps = {
    $showSignupComp: (compName: string) => void;
  };
const Socialsignincomponent: React.FC<ChildComponentProps> = ({$showSignupComp}) => {
    useEffect(() => {
        const body = document.body;
      body.classList.add("overflow-y-hidden");
    }, [])
  return (
        <div className='registeration-container flex flex-col md:flex-row h-[100vh] overflow-auto md:h-[100%]'>
            <div className='regist-col min-w-[309px] w-full md:w-[309px]  flex flex-col justify-center gap-[20px] md:gap-[24px]  px-[24px] py-[24px] md:py-[45px] bg-blue-200'>
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
                {/* <Socialsignincomponents /> */}
                <div className='signin w-full flex flex-col px-[24px] py-[16px] md:py-[40px] gap-[16px]'>                       
                    <h6 className='md:text-center'>Welcome to Whatuni</h6>
                    <div className='social_btn flex flex-col gap-[8px]'>
                        <button className='continue_apple w-full flex items-center justify-center gap-[8px] para font-semibold text-grey500 bg-white rounded-[10px] px-[20px] py-[10px] shadow-custom-11 hover:bg-grey-50'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.04 12.2615C23.04 11.446 22.9668 10.6619 22.8309 9.90918H12V14.3576H18.1891C17.9225 15.7951 17.1123 17.013 15.8943 17.8285V20.714H19.6109C21.7855 18.7119 23.04 15.7637 23.04 12.2615Z" fill="#4285F4"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 23.4996C15.105 23.4996 17.7081 22.4698 19.6109 20.7134L15.8943 17.828C14.8645 18.518 13.5472 18.9257 12 18.9257C9.00474 18.9257 6.46951 16.9028 5.56519 14.1846H1.72314V17.1641C3.61542 20.9225 7.50451 23.4996 12 23.4996Z" fill="#34A853"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.56523 14.1855C5.33523 13.4955 5.20455 12.7584 5.20455 12.0005C5.20455 11.2425 5.33523 10.5055 5.56523 9.81548V6.83594H1.72318C0.944318 8.38844 0.5 10.1448 0.5 12.0005C0.5 13.8562 0.944318 15.6125 1.72318 17.165L5.56523 14.1855Z" fill="#FBBC05"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
                        </svg>                            
                            Continue with Google
                        </button>   
                        <button className='continue_facebook w-full flex items-center justify-center gap-[8px] para font-semibold text-white bg-primary-400 rounded-[10px] px-[20px] py-[10px] hover:bg-primary-500'>
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 12.0694C23 5.71811 17.8513 0.569391 11.5 0.569391C5.14872 0.569391 0 5.71811 0 12.0694C0 17.8094 4.20538 22.567 9.70312 23.4297V15.3936H6.7832V12.0694H9.70312V9.5358C9.70312 6.65361 11.42 5.06158 14.0468 5.06158C15.305 5.06158 16.6211 5.28619 16.6211 5.28619V8.11627H15.171C13.7424 8.11627 13.2969 9.00273 13.2969 9.91218V12.0694H16.4863L15.9765 15.3936H13.2969V23.4297C18.7946 22.567 23 17.8094 23 12.0694Z" fill="white"/>
                        </svg>

                            Continue with Facebook
                        </button>
                        <button className='continue_apple w-full flex items-center justify-center gap-[8px] para font-normal text-white bg-black rounded-[10px] px-[20px] py-[10px] shadow-custom-11 hover:bg-grey300 hover:text-white'>
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7807 18.424C19.4328 19.2275 19.0211 19.9672 18.5441 20.6472C17.8939 21.5743 17.3615 22.216 16.9512 22.5724C16.3152 23.1573 15.6337 23.4568 14.904 23.4739C14.3801 23.4739 13.7483 23.3248 13.0129 23.0224C12.2751 22.7214 11.597 22.5724 10.9771 22.5724C10.3268 22.5724 9.62947 22.7214 8.88355 23.0224C8.1365 23.3248 7.53469 23.4824 7.07456 23.498C6.37478 23.5278 5.67728 23.2197 4.98105 22.5724C4.53669 22.1848 3.98087 21.5204 3.31503 20.5791C2.60063 19.5739 2.01329 18.4084 1.55317 17.0795C1.06038 15.6442 0.813354 14.2543 0.813354 12.9087C0.813354 11.3673 1.14642 10.0379 1.81354 8.92385C2.33784 8.029 3.03534 7.32312 3.90832 6.80493C4.7813 6.28674 5.72456 6.02267 6.74036 6.00578C7.29618 6.00578 8.02506 6.1777 8.93083 6.51559C9.83405 6.85462 10.414 7.02655 10.6683 7.02655C10.8584 7.02655 11.5026 6.82552 12.5948 6.42473C13.6277 6.05305 14.4994 5.89916 15.2135 5.95978C17.1485 6.11595 18.6023 6.87876 19.5691 8.25303C17.8385 9.30163 16.9824 10.7703 16.9995 12.6544C17.0151 14.122 17.5475 15.3432 18.5938 16.3129C19.068 16.7629 19.5975 17.1107 20.1867 17.3578C20.0589 17.7283 19.9241 18.0832 19.7807 18.424ZM15.3427 0.960131C15.3427 2.11039 14.9224 3.18439 14.0848 4.17847C13.074 5.36023 11.8513 6.04311 10.5254 5.93536C10.5086 5.79736 10.4988 5.65213 10.4988 5.49951C10.4988 4.39526 10.9795 3.21349 11.8331 2.24724C12.2593 1.75801 12.8014 1.35122 13.4587 1.02671C14.1146 0.707053 14.735 0.530273 15.3185 0.5C15.3356 0.653772 15.3427 0.807554 15.3427 0.960116V0.960131Z" fill="white"/>
                            </svg>
                            Continue with Apple
                        </button>
                    </div>
                    <div className='x-small font-semibold text-grey-700 text-center uppercase'>or</div>
                    <div className='flex flex-col justify-between items-center gap-[16px] md:min-h-[126px]' onClick={() => $showSignupComp('SIGNUP')}>
                        <button className='continue_email w-full flex items-center justify-center gap-[8px] small font-semibold text-primary-400 border border-primary-400 rounded-[20px] px-[20px] py-[10px] hover:bg-primary-500 hover:text-white'>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 4.16699L8.0755 8.55066C8.63533 8.92388 9.36467 8.92388 9.9245 8.55066L16.5 4.16699M3.16667 13.3337H14.8333C15.7538 13.3337 16.5 12.5875 16.5 11.667V3.33366C16.5 2.41318 15.7538 1.66699 14.8333 1.66699H3.16667C2.24619 1.66699 1.5 2.41318 1.5 3.33366V11.667C1.5 12.5875 2.24619 13.3337 3.16667 13.3337Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Continue with email
                        </button>
                        <div className='small font-semibold text-grey300'>Already have an account? <Link href="/registeration/signin" className='text-primary-400 hover:text-primary-500 hover:underline'>Sign in</Link> </div>
                    </div>
                </div>
                {/* <Socialsignincomponents /> */}
            </div>
        </div>
  )
}

export default Socialsignincomponent
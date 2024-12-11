"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Signincomponents = () => {
    useEffect(() => {
        const body = document.body;
      body.classList.add("overflow-y-hidden");
    }, [])
  return (
            <div className='registeration-container flex flex-col md:flex-row h-[100vh] overflow-auto md:h-[100%]'>
                <div className='regist-col w-full flex items-center relative'>
                    {/* <Signincomponents /> */}
                    <div className='signup w-full flex flex-col self-start px-[16px] md:px-[24px] py-[16px] md:pt-[40px] md:pb-[24px] gap-[16px]'>                       
                        <h6 className='text-grey300'>Sign in</h6>
                        <div className='small font-semibold text-grey300 text-center'>Don’t have an account? <Link href="/registeration/signup" className='text-primary-400 hover:text-primary-500 hover:underline'>Sign up</Link></div>
                        <form className='signup_form w-full h-full flex flex-col gap-[16px]'>
                            <div className='form_container flex flex-col gap-[16px]'>
                                <div className='form_field'>
                                    <div className="col flex flex-col basis-full gap-[4px] error">
                                        <label htmlFor="emailAddress" className="form-label small font-semibold text-grey300">Email address*</label>
                                        <input type="email" className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2" id="emailAddress" value="neil.burgess@idp.com" />
                                        <div className='err_msg'><p className='x-small font-normal text-negative-default'>Please enter a valid email address</p></div>
                                    </div>           
                                </div>
                                <div className='form_field'>
                                    <div className="col flex flex-col basis-full gap-[4px]">
                                        <label htmlFor="password" className="form-label small font-semibold text-grey300">Password*</label>
                                        <div className='relative'>
                                        <input type="password" className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2" id="password" />
                                        <div className='err_msg'><p className='x-small font-normal text-negative-default'>We still don’t know your password. Remind us?</p></div>
                                        <button className="cursor-pointer absolute top-[12px] right-[11px] w-[20px] h-[20px] form-field__icon" aria-label="hide password" role="button" type="button">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.39742 0.897461L4.03037 3.53041M14.6019 14.102L11.9692 11.4693M9.37504 12.5061C8.92964 12.5906 8.46999 12.6348 8.00001 12.6348C4.71527 12.6348 1.93477 10.4759 1 7.49969C1.25448 6.68947 1.64574 5.93983 2.14672 5.27782M6.4435 5.94355C6.84176 5.54529 7.39195 5.29896 7.99967 5.29896C9.21511 5.29896 10.2004 6.28427 10.2004 7.49971C10.2004 8.10743 9.95409 8.65762 9.55584 9.05588M6.4435 5.94355L9.55584 9.05588M6.4435 5.94355L4.03037 3.53041M9.55584 9.05588L4.03037 3.53041M9.55584 9.05588L11.9692 11.4693M4.03037 3.53041C5.17463 2.79271 6.53732 2.36463 7.99999 2.36463C11.2847 2.36463 14.0652 4.5235 15 7.49974C14.4814 9.15081 13.3948 10.5503 11.9692 11.4693" stroke="#5C656E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            <svg className='hidden' width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2004 6.50032C10.2004 7.71576 9.21511 8.70107 7.99967 8.70107C6.78423 8.70107 5.79892 7.71576 5.79892 6.50032C5.79892 5.28488 6.78423 4.29957 7.99967 4.29957C9.21511 4.29957 10.2004 5.28488 10.2004 6.50032Z" stroke="#5C656E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 6.5003C1.93479 3.52408 4.71528 1.36523 7.99999 1.36523C11.2847 1.36523 14.0652 3.52411 15 6.50035C14.0652 9.47656 11.2847 11.6354 8.00001 11.6354C4.71527 11.6354 1.93477 9.47654 1 6.5003Z" stroke="#5C656E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        </div>                                   
                                    </div>           
                                </div>
                                <div className='form_check flex flex-col gap-[4px]'>
                                    <div className='form-check-group flex flex-col gap-[8px]'>
                                        <div className="col flex items-center gap-[12px] relative">
                                            <div className='checkbox_card'>
                                                <input type="checkbox" className="form-checkbox hidden" id="newsletters" />
                                                <label htmlFor='newsletters' className='flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]'>
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                </label>
                                            </div>
                                            <label htmlFor="newsletters" className="check-label small font-semibold w-[calc(100%_-_28px)]">
                                            <p className='x-small font-normal text-grey-600'>Remember me</p>
                                            </label>                            
                                        </div>                                      
                                    </div>           
                                </div>
                            </div>
                            
                            <div className='signup_btn w-full'>
                                <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-[8px]">Sign in <Image src="/assets/icons/right_white_arrow.svg" width="17" height="14" alt="arrow icon" /></button>
                            </div>
                            <div className='x-small font-semibold text-grey-700 text-center uppercase'>or</div> 
                            <div className='social_btn flex flex-col gap-[8px]'>
                                <button className='continue_apple w-full flex items-center justify-center gap-[8px] para font-semibold text-grey500 bg-white rounded-[10px] px-[20px] py-[10px] shadow-custom-11 hover:bg-grey-50'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2615C23.04 11.446 22.9668 10.6619 22.8309 9.90918H12V14.3576H18.1891C17.9225 15.7951 17.1123 17.013 15.8943 17.8285V20.714H19.6109C21.7855 18.7119 23.04 15.7637 23.04 12.2615Z" fill="#4285F4"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4996C15.105 23.4996 17.7081 22.4698 19.6109 20.7134L15.8943 17.828C14.8645 18.518 13.5472 18.9257 12 18.9257C9.00474 18.9257 6.46951 16.9028 5.56519 14.1846H1.72314V17.1641C3.61542 20.9225 7.50451 23.4996 12 23.4996Z" fill="#34A853"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1855C5.33523 13.4955 5.20455 12.7584 5.20455 12.0005C5.20455 11.2425 5.33523 10.5055 5.56523 9.81548V6.83594H1.72318C0.944318 8.38844 0.5 10.1448 0.5 12.0005C0.5 13.8562 0.944318 15.6125 1.72318 17.165L5.56523 14.1855Z" fill="#FBBC05"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
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
                        </form>
                    </div>    
                    {/* <Signincomponents /> */}
                </div>
            </div> 
  )
}

export default Signincomponents
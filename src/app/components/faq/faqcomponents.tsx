import React from 'react'
import Link from 'next/link'

const Faqcomponents = () => {
  return (
    <div className="reviews-container bg-white">
      <div className="max-w-container mx-auto">
            <div className="reviews-card-container px-[20px] py-[34px] lg:py-[60px] lg:px-[0]">
                <div className="reviews-header mb-[26px]  md:px-[20px] xl:px-[0] xl:mb-[32px]">
                    <h2 className="font-bold">Frequently asked questions</h2>
                    <p className="font-normal small mt-[8px]">Subheading</p>
                </div>
                <div className="accordion flex flex-col rounded-[6px] border border-grey-200 px-[16px]">
                    <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0 cursor-pointer">
                        <div className='accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey300'>
                            How can I see my existing clients through Designership?
                            <span>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.5L7 1.5L13 7.5" stroke="#82898F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="accordion-body hidden">It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.</div>                                                    
                    </div>
                    <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0">
                    <div className='accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey300'>
                            How can I see my existing clients through Designership?
                            <span>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.5L7 1.5L13 7.5" stroke="#82898F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="accordion-body hidden">It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.</div>                                                    
                    </div>
                    <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0">
                    <div className='accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey300'>
                             How does Designership attract clients?
                            <span>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.5L7 1.5L13 7.5" stroke="#82898F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="accordion-body">It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.</div>                                                    
                    </div>
                    <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0">
                    <div className='accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey300'>
                            What type of support does Designership provide?
                            <span>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.5L7 1.5L13 7.5" stroke="#82898F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="accordion-body hidden">It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.</div>                                                    
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Faqcomponents
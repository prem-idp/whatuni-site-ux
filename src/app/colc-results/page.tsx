import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='colc_results bg-white'>
        <div className='max-w-container mx-auto'>
            <div className='results_container flex gap-[20px] py-[40px]'>
                <section className='results_card w-full rounded-t-[8px] overflow-hidden'>
                    <div className='edit_results_card flex justify-between gap-[24px] bg-orange-200 px-[24px] py-[12px]'>
                        <div className='results_img max-w-[97px]'>
                        <Image className='block' src="/assets/images/registeration/regist_hero_image.png" width="97" height="129"  alt='hero image'/>
                        </div>
                        <div className='results_edit flex justify-between items-center w-full'>
                            <div className='flex flex-col'>
                                <h4>Your results</h4>
                                <p className='para font-normal'>Here’s your cost of living around the UK</p>
                            </div>
                            <div className='edit_answers'>
                                <button type='button' className='btn btn-primary flex items-center justify-center min-w-[153px] gap-[8px]'>Edit my answers</button>
                            </div>
                        </div>
                    </div>
                    <div className='cost_living_container flex flex-col gap-[24px] px-[24px] py-[24px] bg-white rounded-b-[8px] overflow-hidden border border-grey-200 shadow-custom-3'>
                        <div className='average_cost_card flex flex-col gap-[16px]'>
                            <h6>Your average cost of living in the UK</h6>
                            <div className='average_cost_breakdown flex flex-col rounded-[8px] border-[3px] border-grey-600'>
                                <div className='flex justify-between gap-[24px] px-[16px] py-[16px] bg-grey-600'>
                                    <div className='para-lg font-semibold text-white'>UK Average</div>
                                    <div className='para-lg font-semibold text-white'>£1,500pcm</div>
                                </div>
                                <div className='flex flex-col gap-[8px] px-[16px] py-[8px] bg-grey-600'>
                                    <div className='small font-semibold text-white'>COST OF LIVING BREAKDOWN</div>
                                    <div className='flex justify-between gap-[16px]'>
                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                            <div className='small font-semibold text-white'>Housing</div>
                                            <div className='small font-normal text-white'>£1,612pcm</div>
                                        </div>
                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                            <div className='small font-semibold text-white'>Food</div>
                                            <div className='small font-normal text-white'>£161pcm</div>
                                        </div>
                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                            <div className='small font-semibold text-white'>Travel</div>
                                            <div className='small font-normal text-white'>£61pcm</div>
                                        </div>
                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                            <div className='small font-semibold text-white'>Clothing</div>
                                            <div className='small font-normal text-white'>£12pcm</div>
                                        </div>
                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                            <div className='small font-semibold text-white'>Daily life</div>
                                            <div className='small font-normal text-white'>£56pcm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-[16px] py-[16px] bg-neutral-100 rounded-b-[8px]'>
                                    <div className='flex flex-col gap-[4px] basis-[50%]'>
                                        <div className='small font-semibold text-neutral-700'>Income</div>
                                        <div className='small font-normal text-neutral-700'>£1,612pcm</div>
                                    </div>
                                    <div className='flex flex-col gap-[4px] basis-[50%]'>
                                        <div className='small font-semibold text-desturctive-600'>Deficit</div>
                                        <div className='small font-normal text-desturctive-600'>-£1,612pcm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='your_cost_card flex flex-col gap-[16px]'>
                            <h6>Your cost of living around the UK</h6>
                            <div className='your_cost_of_living flex flex-col gap-[8px]'>
                                <ul className="flex items-center gap-[8px] cursor-pointer">
                                    <li className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500`}>
                                        University
                                    </li>
                                    <li className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500`}>
                                        City
                                    </li>
                                    <li className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500`}>
                                        Region
                                    </li>
                                </ul>
                            </div>
                            <div className="accordion">
                                <div className='accordion-item-caption flex gap-[8px] justify-between py-[12px] pl-[16px] pr-[24px] bg-grey-100'>
                                    <div className='flex items-center gap-[8px] '>
                                        <span className='x-small font-semibold text-grey300 uppercase tracking-[1px]'>University</span>
                                        <span>
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 1L9 5M9 11L5 15L1 11" stroke="#ADB2B6" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-[8px]'>
                                        <span className='x-small font-semibold text-grey300 uppercase tracking-[1px]'>TOTAL COST</span>
                                        <span>
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 1L9 5M9 11L5 15L1 11" stroke="#ADB2B6" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    {/* accordion start */}
                                    <div className='accordion-header favourites_added py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Abertay University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                    {/* accordion start */}
                                    <div className='accordion-header expanded flex flex-col gap-[16px] py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Arts University Plymouth</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="accordion-body">
                                            <div className='average_cost_breakdown flex flex-col rounded-[8px] overflow-hidden'>
                                                <div className='flex flex-col gap-[8px] px-[16px] py-[8px] bg-grey-50'>
                                                    <div className='small font-semibold text-grey300'>COST OF LIVING BREAKDOWN</div>
                                                    <div className='flex justify-between gap-[16px]'>
                                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                                            <div className='small font-semibold text-grey300'>Housing</div>
                                                            <div className='small font-normal text-grey300'>£1,612pcm</div>
                                                        </div>
                                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                                            <div className='small font-semibold text-grey300'>Food</div>
                                                            <div className='small font-normal text-grey300'>£161pcm</div>
                                                        </div>
                                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                                            <div className='small font-semibold text-grey300'>Travel</div>
                                                            <div className='small font-normal text-grey300'>£61pcm</div>
                                                        </div>
                                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                                            <div className='small font-semibold text-grey300'>Clothing</div>
                                                            <div className='small font-normal text-grey300'>£12pcm</div>
                                                        </div>
                                                        <div className='flex flex-col gap-[4px] basis-[20%]'>
                                                            <div className='small font-semibold text-grey300'>Daily life</div>
                                                            <div className='small font-normal text-grey300'>£56pcm</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex px-[16px] py-[16px] bg-grey-100'>
                                                    <div className='flex flex-col gap-[4px] basis-[50%]'>
                                                        <div className='small font-semibold text-grey300'>Income</div>
                                                        <div className='small font-normal text-grey300'>£1,612pcm</div>
                                                    </div>
                                                    <div className='flex flex-col gap-[4px] basis-[50%]'>
                                                        <div className='small font-semibold text-desturctive-600'>Deficit</div>
                                                        <div className='small font-normal text-desturctive-600'>-£1,612pcm</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                    {/* accordion start */}
                                    <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Aston University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                  {/* accordion start */}
                                  <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                            <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birkbeck University of London Birkbeck University of London Birkbeck University of London</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */} 
                                  {/* accordion start */}
                                  <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birmingham City University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */} 
                                  {/* accordion start */}
                                  <div className='accordion-header favourites_added py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birmingham Newman University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                    {/* accordion start */}
                                    <div className='accordion-header favourites_added py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Abertay University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                    {/* accordion start */}
                                    <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Arts University Plymouth</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="accordion-body hidden">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                    {/* accordion start */}
                                    <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Aston University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}
                                  {/* accordion start */}
                                  <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                            <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birkbeck University of London Birkbeck University of London Birkbeck University of London</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */} 
                                  {/* accordion start */}
                                  <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birmingham City University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */} 
                                  {/* accordion start */}
                                  <div className='accordion-header py-[12px] pl-[16px] pr-[24px] border-t-0 border-b border-grey-200 cursor-pointer hover:bg-primary-50 first:border-t'>
                                        <div className='flex gap-[8px] justify-between'>
                                        <div className='accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]'>
                                                <span className='cursor-pointer'>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#4664DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <Link className='small font-semibold text-primary-400 hover:text-primary-500 line-clamp-1' href={''}>Birmingham Newman University</Link>                                            
                                            </div>
                                            <div className='flex items-center gap-[8px] '>
                                                <span className='small font-semibold text-grey300'>£1,500pcm</span>
                                                <span>
                                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5L7 1.5L13 7.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* accordion start */}                                                                                                                                                   <nav aria-label="navigation">
                                        <ul className="pagination flex justify-center items-center gap-[8px] px-[24px] pt-[24px]">
                                            <li className="page-item"><Link className="page-link flex items-center justify-center px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]" href="#">
                                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 11L1 6L6 1" stroke="#333F48" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg></Link>
                                            </li>
                                            <li className="page-item active"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">5</a></li>
                                            <li className="page-item"><a className="page-link flex items-center justify-center small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]" href="#">...</a></li>
                                            <li className="page-item"><a className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50" href="#">25</a></li>
                                            <li className="page-item"><a className="page-link flex items-center justify-center px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]" href="#">
                                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L1 11" stroke="#333F48" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg></a>
                                            </li>
                                        </ul>
                                    </nav>                               
                                </div>
                            </div>                                
                        </div>                     
                    </div>
                    <div className='uni_compare flex flex-col gap-[16px]'>
                        <h5>How this calculator can help you</h5>
                        <p>Plan your budget with our new Cost of Living Calculator. Compare uni cities across the UK, see all expenses in one place, and avoid surprises. Make informed choices to ensure the best uni experience—both academically and financially.</p>
                        <div className='find_more'></div>
                    </div>
                </section>
                <aside className='promotion_pod min-w-[392px]'>
                    <Image src="/assets/images/colc/promotion_app_img.jpg" alt="" width="392" height="403" />
                </aside>
            </div>
        </div>
    </div>
  )
}

export default page
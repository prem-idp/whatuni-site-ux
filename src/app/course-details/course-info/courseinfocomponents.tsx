import React from 'react'
import Keystatscomponents from '../keystats/keystatscomponents'
import Reviewslidercomponents from '@/app/components/slider/reviewslidercomponents'

const Courseinfocomponents = () => {
  return (
    <>
      <div className='courseinfo-container'> 
        <div className="max-w-container mx-auto">
            <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] pb-[40px]'>
                <div className='h5 w-full md:w-[289px]'>Course info</div>
                <div className='flex flex-col gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>
                    <div className='flex flex-col items-start gap-[8px]'>
                        <div className='rtf-innerstyle flex flec-col gap-[16px]'>
                          <p className='para font-normal line-clamp-3'>Our LLB Law degree will give you the opportunity to study the foundational areas of law, alongside other key areas of law, giving a broader understanding of the subject.Through your studies, you will develop an in-depth understanding of law, Legal Process, Contract, Criminal, Tort, Employment Law and Business Law.You will enhance your ability to engage in critical academic study and research by way of legal research and a dissertation, helping you to develop the professional and reflective ...</p>                        
                        </div>
                        <div className='small font-semibold text-primary-400 hover:underline cursor-pointer'>+ Read more</div>
                    </div>
                    {/* Keystats */}
                    <Keystatscomponents />
                    {/* -- */}
                    <div className='latest-reviews flex flex-col gap-[16px]'>
                      <div className='card-header flex flex-col gap-[8px]'>
                        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]'>
                          <div className='h5 text-black'>What students say</div>
                        </div>
                      </div>
                      <Reviewslidercomponents />
                    </div>
                  {/* -- */}                    
                </div>

            </div>
        </div>
      </div> 
    </>
  )
}

export default Courseinfocomponents
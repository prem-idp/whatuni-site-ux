import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AdviceCourseCard = ({categoryTag} : { categoryTag: boolean }) => {
  return (
    <Link href="" className='card flex flex-col bg-white border border-grey-200 lg:hover:border-primary-400 rounded-[8px] shadow-custom-2 overflow-hidden'>
        <div className='card-header'>
            <Image src="/assets/images/article_image1.jpg" width="392" height="221" className='block w-full h-auto min-h-[185px]' alt='Article_image' />
        </div>   
      <div className='card-body flex flex-col gap-[10px] p-[16px]'>
        {categoryTag && (<span className="text-blue-400 x-small font-inter trakcing-[1px] uppercase font-semibold">SUBJECT GUIDE</span>) }
       
        <div className='card-title font-farro font-semibold para-lg text-grey300 line-clamp-2'>Everything you need to know about University Open Days</div>
        {!categoryTag && ( 
          <>
             <p className='card-description font-normal small text-grey-700 line-clamp-2'>You’ve probably heard from your teachers, friends or parents about university open days and campus tours. But what exactly are they, and what can you get out of them? Let’s go through everything about uni open days step by step.</p>
             <p className='card-date font-normal x-small text-grey300'>11 oct 2023</p>
          </>

        )}
           
        </div>
    </Link>
  )
}

export default AdviceCourseCard
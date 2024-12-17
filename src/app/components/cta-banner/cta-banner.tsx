import React from 'react'
import Image from 'next/image'

const Ctabanner = () => {
  return (
      <div className='bg-blue-200 px-[20px] rounded-[8px] flex items-end'>
          <div className="flex flex-col gap-[16px] py-[24px]">
              <div className='text-grey300 flex flex-col gap-[4px]'>
              <div className="h4 heading4 font-semibold font-farro">Heading</div>
              <p className='font-inter font-normal small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
             
              <button className='btn btn-primary px-[20px] py-[10px] w-fit'>CTA Button</button>
          </div>
          <span className='min-w-[219px] h-[187px]'>
              <Image src="/assets/images/article-details/cta-banner.png" width={219} height={187} alt="article banner" />             
              
          </span>
    </div>
  )
}

export default Ctabanner
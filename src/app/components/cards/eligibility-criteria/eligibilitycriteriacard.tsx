import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Ctabutton from '../interaction-button/ctabutton'

const Eligibilitycriteriacard = () => {
  return (
    <div className='card group flex flex-col bg-white border border-grey-200 rounded-[8px] shadow-custom-2 overflow-hidden p-[16px] gap-[16px]'> 
      <div className='card-body flex flex-col gap-[8px]'>
          <div className='card-header w-[48px]'>
              <Image src="/assets/images/article/eligibility_criteria_thumb_image.svg" width="48" height="48" className='block w-full h-auto min-h-[48px]' alt='Article_image' />
          </div> 
          <div className='card-title font-farro para-lg font-semibold text-grey300 line-clamp-2'>Subheading</div>
          <p className='card-description font-normal small text-grey300 line-clamp-2'>Review the eligibility criteria for your chosen scholarship.</p>
      </div>
      <Ctabutton />
    </div>
  )
}

export default Eligibilitycriteriacard
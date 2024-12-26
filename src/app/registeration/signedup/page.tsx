import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Signedupcomponents from '@/app/components/registeration/signedupcomponents'

function page() {
  return (
        <div className='modal modal-container flex  justify-center items-start md:items-center backdrop-shadow-white fixed top-0 right-0 left-0 bottom-0 bg-white'>
            <div className='modal-box shadow-custom-6 w-full md:w-[728px] bg-white md:rounded-[8px] overflow-hidden relative'>
                <div className='modal_close absolute top-[12px] right-[12px] z-[1] cursor-pointer'>
                    <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12"  alt='modal close'/>
                </div>
                <Signedupcomponents />
            </div>
        </div>  
  )
}

export default page
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Discovercard = () => {
  return (
    <div className='discover-card-container px-[16px] md:px-[20px] lg:p-[0]'>
        <div className='discover-header mb-[26px] md:mb-[32px]'>
            <h2 className='font-bold'>Discover</h2>
            <p className='font-normal small mt-[8px]'>Subheading</p>
        </div>
        <div className="discover-inner-wrap grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className='bg-primary-100 rounded-[8px] overflow-hidden'>
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                        <h5 className='font-bold'>Looking for courses?</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>
            <Link href="#" className='bg-secondary-200 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-positive-default bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>universities</div>
                        <h5 className='font-bold'>Pick your perfect uni</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>
            <Link href="#" className='bg-tertiary-100 rounded-[8px] overflow-hidden'> 
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-tertiary-600 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>career</div>
                        <h5 className='font-bold'>Take our careers quiz</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>
            <Link href="#" className='bg-primary-100 rounded-[8px] overflow-hidden'>    
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>Subject guides</div>
                        <h5 className='font-bold'>Find out what to study</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>
            <Link href="#" className='bg-secondary-200 rounded-[8px] overflow-hidden'>    
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-positive-default bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>open days</div>
                        <h5 className='font-bold'>Find an open day</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>
            <Link href="#" className='bg-tertiary-100 rounded-[8px] overflow-hidden'>    
                <div className='discover-card flex justify-between gap-[8px]'>
                    <div className="flex flex-col justify-between p-[20px] pr-[0]">
                        <div className='w-fit uppercase font-bold x-small text-tertiary-600 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>app</div>
                        <h5 className='font-bold'>Download the app</h5>
                    </div>
                    <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                </div>
            </Link>                                                    
        </div>
    </div>
  )
}

export default Discovercard
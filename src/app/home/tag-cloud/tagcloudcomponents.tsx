import Link from 'next/link'
import React from 'react'

const Tagcloudcomponents = ({ routerUrl}: {routerUrl:boolean} ) => {
  return (
    <div className='tag-cloud-container bg-white'>
      <div className='max-w-container mx-auto'>
        {/* <div className='tag-cloud-card-container flex flex-col gap-[16px] px-[20px] lg:px-[0] pt-[8px] pb-[32px] md:pt-[16px] md:pb-[64px]'> */}
          <div className={`tag-cloud-card-container flex flex-col px-[20px] lg:px-[0] ${routerUrl ? 'gap-[32px] py-[40px]':'gap-[16px] pt-[8px] md:pt-[16px] pb-[32px] md:pb-[64px]'}`}>
            <div className='tag-cloud-header'>            
            <div className={`text-grey300 ${routerUrl ? 'h2' : 'h6'}`} >
              {routerUrl ? ('Scholarships at this uni') :( 'Tag cloud heading') }
              </div>
            </div>
              <div className="tag-cloud-inner-wrap"> 
                <ul className='flex flex-wrap gap-[8px]'>
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                    <li><Link href="#" className='font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]'>Badge</Link></li>                                      
                </ul>
              </div>
        </div>       
    </div>
  </div>
  )
}

export default Tagcloudcomponents
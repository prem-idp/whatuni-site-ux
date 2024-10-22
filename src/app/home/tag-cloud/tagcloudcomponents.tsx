import Link from 'next/link'
import React from 'react'

const Tagcloudcomponents = () => {
  return (
    <div className='tag-cloud-container bg-white'> 
    <div className="max-w-container mx-auto">
        <div className='tag-cloud-card-container px-[0] py-[34px] lg:py-[60px]'>
            <div className='tag-cloud-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]'>
                <h2 className='font-bold'>Tag cloud heading</h2>
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
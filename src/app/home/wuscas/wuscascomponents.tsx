import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Wuscascomponents = () => {
  return (
    <section className='bg-neutral-50'>
      <div className="max-w-container mx-auto">
        {/* container */}
          <div className="wusca-container grid grid-cols-2">
            <div className="wusca-content flex flex-col justify-center">
              <h2 className="font-bold ">Nam vitae porttitor lorem.</h2>
              <p className="font-normal mb-[16px]">Sed ac neque at magna sagittis rhoncus nec vel magna. Duis ac urna in sem sollicitudin efficitur eleifend ultrices velit.</p>
              <Link href="#" className="flex items-center gap-[6px] w-fit bg-primary-400 hover:bg-primary-500 text-white rounded-[20px] font-inter font-semibold text-small px-[20px] py-[10px]">
                Learn more
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                    stroke="#fff" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>              
            </div>
            <div className='wusca-highlights flex gap-[8px]'> 
                <div className='wusca-card flex items-center gap-[8px] px-[16px] py-[12px] rounded-[4px] border border-grey-300'>
                  <Image src="/assets/images/wusca/icon-building-outlined-grey.svg" width="32" height="32"  alt="wusca chat icon" />
                  <div className='wusca-content'>
                    <h3 className='font-bold'>101</h3>
                    <div className='font-semibold small'>UK universities</div>
                  </div>
                </div>
                <div className='wusca-card flex items-center gap-[8px] px-[16px] py-[12px] rounded-[4px] border border-grey-300'>
                  <Image src="/assets/images/wusca/icon-chat-outlined-grey.svg" width="32" height="32"  alt="wusca chat icon" />
                  <div className='wusca-content'>
                    <h3 className='font-bold'>38,000</h3>
                    <div className='font-semibold small'>Student reviews</div>
                  </div>
                </div>
                <div className='wusca-card flex items-center gap-[8px] px-[16px] py-[12px] rounded-[4px] border border-grey-300'>
                  <Image src="/assets/images/wusca/icon-shine-outlined-grey.svg" width="32" height="32"  alt="wusca chat icon" />
                  <div className='wusca-content'>
                    <h3 className='font-bold'>12</h3>
                    <div className='font-semibold small'>years of WUSCAs</div>
                  </div>
                </div>
              </div>
              <div className="grid px-[98px] py-[36px]">
              <Image src="/assets/images/wusca/wusca-image.png" width={402} height={401} alt="wusca" />
            </div>
          </div>
          {/* container */}
        </div>
    </section>
  )
}

export default Wuscascomponents
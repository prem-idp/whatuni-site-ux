"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Discovercard from '../cards/discover/discovercard';

const Discoverslidercomponents = () => {
  return (
    <> 
        <div className="slider-container">
            <div>
            <div className="discover-card">
                <Link href="#" className='block bg-primary-100 rounded-[8px] overflow-hidden'>
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                            <h5 className='font-bold'>Looking for courses?</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>                                                  
            </div>
            </div>
            <div>
                <div className="discover-card">
                <Link href="#" className='block bg-secondary-200 rounded-[8px] overflow-hidden'>    
                        <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-positive-default bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>universities</div>
                            <h5 className='font-bold'>Pick your perfect uni</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
            </div>
            <div>
                <div className="discover-card">
                <Link href="#" className='block bg-tertiary-100 rounded-[8px] overflow-hidden'> 
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-tertiary-600 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>career</div>
                            <h5 className='font-bold'>Take our careers quiz</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
            </div>
            <div>
                <div className="discover-card">
                <Link href="#" className='block bg-primary-100 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>Subject guides</div>
                            <h5 className='font-bold'>Find out what to study</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
            </div>
            <div>
                <div className="discover-card">
                <Link href="#" className='block bg-secondary-200 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-positive-default bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>open days</div>
                            <h5 className='font-bold'>Find an open day</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
            </div>
            <div>
                <div className="discover-card">
                <Link href="#" className='block bg-tertiary-100 rounded-[8px] overflow-hidden'>    
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
          </div>
    </>
  );
};

export default Discoverslidercomponents;

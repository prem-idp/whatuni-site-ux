import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Authorprofile = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[20px]">
    <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
      <div className="flex gap-[16px]">                 
        <Image className='w-[40px] h-[40px] rounded-[30px] object-cover' src="/assets/images/article-avatar.png" width="40" height="40" alt='profile icon'/>                                    
        <div className="flex flex-col">
            <span className="text-blue-400 small font-medium">
              <Link className='hover:underline' href="#">Author name</Link>
              </span>
          <span className="text-grey300 small font-normal">Job title</span>
        </div>
</div>
    </div>
    <div className="w-full">
    <Image src="/assets/images/article_image1.jpg" width="907" height="511" className='block w-full h-auto' alt='Article_image' />
    </div>
</div>
  )
}

export default Authorprofile
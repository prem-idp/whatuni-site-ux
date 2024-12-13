import React from 'react'
import Image from 'next/image';
// Component 
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent';
import Skiplinkdetails from '../components/skiplinkdetails/skiplinkdetailscomponent';
import Advicecomponents from '../home/advice/advicecomponents';


const page = () => {
  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Payments",
    },
    {
      url: "#",
      label: "Online payments",
    },
    {
      url: "",
      label: "Overview",
    },
  ];

  return (
    <>
      <div>
        {/* breadcrumb  */}
      <section className="pt-[16px] pb-[40px]">
          <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
        </section>
        {/* breadcrumb  */}
        {/* Article card  */}
        <section className='pb-[40px]'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <div className="flex flex-col gap-[8px]">
            <span className="x-small font-inter tracking-[1px] text-blue-400">CATEGORY</span>
            <h1 className='font-farro text-heading1 text-grey900'>Article title</h1>
            <p className='text-para-lg max-w-[907px] w-full text-grey900 text-inter'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra posuere ligula, eget commodo turpis semper a. Phasellus t</p>
            <span className="x-small text-grey300 text-inter">Updated: 29 Jul 2024</span>
            <button className='btn btn-primary-outline px-[16px] py-[8px] flex gap-[6px] svg-hover-white w-fit'>
              <Image src="assets/icons/share-blue.svg" width="20" height="20" alt='Share icon'/>
              Share</button>
            </div>
            </div>
        </section>
        {/* Article card END  */}
        {/* Author profile  */}
        <section className='pb-[40px]'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
            <div className="flex flex-col lg:flex-row lg:gap-[20px]">
              <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
                <div className="flex gap-[16px]">                 
                  <Image className='w-[40px] h-[40px] rounded-[30px] object-cover' src="/assets/images/article-avatar.png" width="40" height="40" alt='profile icon'/>                                    
                  <div className="flex flex-col">
                    <span className="text-blue-400 small font-medium">Author name</span>
                    <span className="text-grey300 small font-normal">Job title</span>
                  </div>
</div>
              </div>
              <div className="w-full">
              <Image src="/assets/images/article_image1.jpg" width="907" height="511" className='block w-full h-auto' alt='Article_image' />
              </div>
        </div>
          </div>
        </section>
        {/* Author profile END */}
        {/* skiplink article details */}
        <section>
          <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
            <Skiplinkdetails />
        </div>
        </section>
        {/* skiplink article details END */}
         {/* Slider section  */}
         <section>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Advicecomponents categoryTag={false} adviceBgWhite={false} />
          </div>
        </section>
        {/* Slider section END */}
        {/* Slider section  */}
        <section className='bg-white'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Advicecomponents categoryTag={true} adviceBgWhite={true} />
          </div>
        </section>
        {/* Slider section END */}
        {/* Slider section  */}
        <section>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Advicecomponents categoryTag={true} adviceBgWhite={false} />
          </div>
        </section>
        {/* Slider section END */}
        {/* Slider section  */}
        <section className='bg-white'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Advicecomponents categoryTag={true} adviceBgWhite={true} />
          </div>
        </section>
        {/* Slider section END */}
        
      </div>
    
    </>
  )
}

export default page
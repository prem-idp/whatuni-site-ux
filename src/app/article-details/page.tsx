import React from 'react'

// Component 
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent';
import Skiplinkdetails from '../components/skiplinkdetails/skiplinkdetailscomponent';
import Advicecomponents from '../home/advice/advicecomponents';
import Articledescription from '../components/article-description/article-description';
import Authorprofile from '../components/author-profile/author-profile';


const page = () => {
  const breadcrumbData = [
    // {
    //   url: "#",
    //   Imgurl: "/assets/icons/breadcrumbs-home-icon.svg"
    // },
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
      {/* Skeleton loader  */}
      <div className="bg-white hidden">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          {/* Skeleton Breadcrum  */}
          <div className="pt-[16px] pb-[40px]">
      <nav aria-label="breadcrumb">
              <ul className="flex flex-wrap gap-[20px]">
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-[''] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
      </ul>
    </nav>
        </div>
          {/* Skeleton Breadcrum END */}
          {/* skeleton article description  */}
          <section className='pb-[40px]'>
       
            <div className="flex flex-col">
              <span className="skeleton skeleton-text-animated flex max-w-[100px] h-[10px]"></span>
              <span className="skeleton skeleton-text-animated flex max-w-[200px] h-[30px]"></span>
              <span className="skeleton skeleton-text-animated flex max-w-[90%] h-[10px]"></span>
              <span className="skeleton skeleton-text-animated flex max-w-[80%] h-[10px]"></span>            
              <span className="skeleton skeleton-text-animated flex max-w-[60%] min-h-[10px]"></span>
              <span className="skeleton skeleton-text-animated flex max-w-[100px] min-h-[40px]"></span>
              
       </div>
       
        </section>
          {/* skeleton article description END */}
          {/* skeleton article author  */}
          <section className='lg:pb-[40px]'>          
           <div className="flex flex-col lg:flex-row lg:gap-[20px]">
           <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
             <div className="flex gap-[16px]">                 
               <span className='skeleton skeleton-text-animated flex max-w-[40px] min-h-[40px]'></span>
               <div className="flex w-full flex-col">
                    <span className='skeleton skeleton-text-animated flex max-w-[90%] min-h-[10px]'></span>
                    <span className='skeleton skeleton-text-animated flex max-w-[60%] min-h-[10px]'></span>     
               </div>
       </div>
           </div>
           <div className="w-full">
         <span className='skeleton skeleton-text-animated flex min-h-[500px]'></span>
           </div>
       </div>
        </section>
          {/* skeleton article author END */}
     
        </div>
      
      </div>
      {/* Skeleton loader END */}
      
      <div className='bg-white'>
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
        <Articledescription /> 
        </div>
        </section>
        {/* Article card END  */}
        {/* Author profile  */}
        <section className='lg:pb-[40px]'>          
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Authorprofile />
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
         <section className='bg-grey-50'>
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
        <section className='bg-grey-50'>
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
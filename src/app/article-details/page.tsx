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
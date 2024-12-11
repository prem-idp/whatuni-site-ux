import React from 'react'
import Image from 'next/image';
// Component 
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent'


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
          <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
        </section>
        {/* breadcrumb  */}
        {/* Article card  */}
        <section className='pb-[40px]'>
        <div className="max-w-container mx-auto">
          <div className="article-category-card">
            <span className="article-category-tag">CATEGORY</span>
            <h1>Article title</h1>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra posuere ligula, eget commodo turpis semper a. Phasellus t</p>
            <span className="category-updates">Updated: 29 Jul 2024</span>
            <button>
              {/* <Image src={} width={} height={} alt='Share icon'/> */}
              Share</button>
            </div>
            </div>
        </section>
        {/* Article card END  */}
      </div>
    
    </>
  )
}

export default page
import Breadcrumblayoutcomponent from '@/app/components/breadcrumb-layout/breadcrumblayoutcomponent';
import { div, h1 } from 'motion/react-client';
import React from 'react'

const page = () => {
  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Scholarships",
    },

    {
      url: "",
      label: "Search results",
    },
  ];
  const scholarshipCard = [
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    },
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    },
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    },
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    },
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    },
    {
      title: "Scholarship name",
      logo: "Scholarship name",
      thumbnail: "Scholarship name",
      universityName: "Scholarship name",
      award: "Scholarship name",
      funding: "Scholarship name",
      deadline: "Scholarship name",
    }
  ]
  return (
    <>
          {/* breadcrumb  */}
          <section className="bg-white hidden lg:block">
        <div className="max-w-container mx-auto pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>
      {/* breadcrumb  */}
      {/* popular scholarship  */}
      <section>
        <div className="max-w-container mx-auto">
          <div className="">
            {scholarshipCard.map((items, index) => (
              <div className="">
                <div className=""></div>
                <div className="">
                  <div className="">
                    <div className="h6">{items.title}</div>
                    <span>{items.universityName}</span>
                    <ul>
                      <li>
                        <span>Award criteria:</span>
                        <p>{ items.award }</p>
                      </li>
                      <li>
                        <span>Award criteria:</span>
                        <p>{ items.award }</p>
                      </li>
                      <li>
                        <span>Award criteria:</span>
                        <p>{ items.award }</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">btn</div>
                </div>
              </div>
              
            )) }
          </div>
        </div>
      </section>
      {/* popular scholarship END */}
</>
  )
}

export default page
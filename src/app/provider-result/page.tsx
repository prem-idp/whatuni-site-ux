import React from 'react'
import Subscribecomponents from '../article-landing/subscribe-newsletter/subscribecomponents'
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent'

const page = () => {
    const breadcrumbData = [
        {
          url: "#",
          Imgurl: "/assets/icons/breadcrumbs-home-icon.svg"
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
  return (
      <>
          <section>
        <Breadcrumblayoutcomponent data={breadcrumbData} />
          </section>
       <Subscribecomponents/>
      </>
  )
}

export default page
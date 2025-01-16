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
    const providerList = [
        {
            title: "Architecture & Design",
            provideFav: false,
            title: "Architecture & Design",
            title: "Architecture & Design",
            title: "Architecture & Design",
            title: "Architecture & Design",
        },
    ]
  return (
      <>
          <div>
                 {/* breadcrumb  */}
      <section>
          <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
        </section>
              {/* breadcrumb  */}
              <Subscribecomponents/>
          </div>
     
      
      </>
  )
}

export default page
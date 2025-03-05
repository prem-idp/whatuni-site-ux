import React from 'react'
import Advicecomponents from '../home/advice/advicecomponents'
import Faqcomponents from '../components/faq/faqcomponents'
import Eligibilitycriteriacomponents from './eligibility-criteria/eligibilitycriteriacomponents'
import Scholarshipunicomponents from './scholarship-universities/scholarshipunicomponents'
import Subscribecomponents from './subscribe-newsletter/subscribecomponents'
import Articlelinkcomponents from '../components/article-link/articlelinkcomponents'
import Articlesnippetcomponents from '../components/article-snippet/articlesnippetcomponents'
import ColcBanner from '../components/colc-banner/colc-banner'
import Faqskeleton from '../components/skeleton/faqskeleton'
import ColcBannerSkeleton from '../components/skeleton/colcbannerskeleton'
import Eligibilitycriteriacardskeleton from '../components/skeleton/eligibilitycriteriacardskeleton'
import AdviceCourseCardSkeleton1 from '../components/skeleton/advicecoursecardskeleton1'
import Wuscacomponentskeleton1 from '../components/skeleton/wuscacomponentskeleton1'
import BreadCrumbs from '../components/breadcrumb/breadcrumbcomponents'
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent'

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
    <div className='article_landing'>
      <div className='max-w-container mx-auto m-[24px_0_24px_0]'>
        <Breadcrumblayoutcomponent data={breadcrumbData} />
      </div>
      <ColcBanner />
      <ColcBannerSkeleton />
      <Articlesnippetcomponents />
      <Articlelinkcomponents />
      <Scholarshipunicomponents scholarshipURL={ false} />
      <Eligibilitycriteriacomponents />
      <Faqcomponents />
      <Faqskeleton />
      <Advicecomponents categoryTag={false} adviceBgWhite={false} />
      <Subscribecomponents />
      <Eligibilitycriteriacardskeleton />
      <AdviceCourseCardSkeleton1 />
      <Wuscacomponentskeleton1 />
    </div>
  )
}

export default page
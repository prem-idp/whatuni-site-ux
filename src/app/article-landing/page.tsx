import React from 'react'
import Advicecomponents from '../home/advice/advicecomponents'
import Faqcomponents from '../components/faq/faqcomponents'
import Eligibilitycriteriacomponents from './eligibility-criteria/eligibilitycriteriacomponents'
import Scholarshipunicomponents from './scholarship-universities/scholarshipunicomponents'
import Subscribecomponents from './subscribe-newsletter/subscribecomponents'
import Articlelinkcomponents from '../components/article-link/articlelinkcomponents'
import Articlesnippetcomponents from '../components/article-snippet/articlesnippetcomponents'
import ColcBanner from '../components/colc-banner/colc-banner'

const page = () => {
  return (
    <div className='article_landing'>
      <ColcBanner />
      <Articlesnippetcomponents />
      <Articlelinkcomponents />
      <Scholarshipunicomponents />
      <Eligibilitycriteriacomponents />
      <Faqcomponents />
      <Advicecomponents categoryTag={false} adviceBgWhite={false} />
      <Subscribecomponents />
    </div>
  )
}

export default page
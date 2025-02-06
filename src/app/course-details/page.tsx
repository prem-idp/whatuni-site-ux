"use client"
import React, { useState } from 'react'
import Subscribecomponents from '../article-landing/subscribe-newsletter/subscribecomponents'
import Breadcrumblayoutcomponent from '../components/breadcrumb-layout/breadcrumblayoutcomponent'
import Courseoptionscomponents from './course-options/courseoptionscomponents';
import Courseinfocomponents from './course-info/courseinfocomponents';
import Jumptocomponents from './jump-to/jumptocomponents';
import Modulescomponents from './modules/modulescomponents';
import Entryrequirements from './entery-requirements/entryrequirements';
import Tuitionfeescomponents from './tuition-fees/tuitionfeescomponents';
import Popularalevelsubjectcomponents from './popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from './latest-reviews/latestreviewscomponents';
import Uniinfocomponents from './uni-info/uniinfocomponents';
import Findacoursecomponents from './findacourse/findacoursecomponents';
import Similarcoursecomponents from './similar-course/similarcoursecomponents';
import Courseheaderinfocomponents from './course-header-info/courseheaderinfocomponents';
import Subjectmodalcomponents from './Modal/subjectmodalcomponents';
import Examtypemodalcomponents from './Modal/examtypemodalcomponents';
import Locationmodalcomponents from './Modal/locationmodalcomponents';
import Courseinfomodalcomponents from './Modal/courseinfomodalcomponents';
import Yearofentrycomponents from './year-of-entry/yearofentrycomponents';
import Reviewfiltermodalcomponents from '../components/modal/review-lightbox/reviewfiltermodalcomponents';

const page = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);

  };
  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Insert level",
    },
    {
      url: "",
      label: "Insert level",
    },
  ];

  return (
    <>
    <section className="px-[16px] md:px-[20px] xl:px-[0] pt-[22px] hidden md:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
    </section>
    <Courseheaderinfocomponents />
    <Yearofentrycomponents />     
    <Courseoptionscomponents  onOpenModal={() => handleOpenModal("courseoption")}/> 
    <Jumptocomponents />
    <Courseinfocomponents  onOpenModal={() => handleOpenModal("subject")} onOpenReviewModal={()=> handleOpenModal("reviewfilter")} />
    <Modulescomponents />
    <Entryrequirements onOpenModal={() => handleOpenModal("examType")} />
    <Popularalevelsubjectcomponents />
    <Tuitionfeescomponents onOpenModal={() => handleOpenModal("location")} />
    <Latestreviewscomponents onOpenModal={() => handleOpenModal("subject") }/>
    <Uniinfocomponents />
    <Similarcoursecomponents />
    <Findacoursecomponents />
    <Subscribecomponents />
    {openModal === "courseoption" && <Courseinfomodalcomponents onClose={handleCloseModal} />}
    {openModal === "subject" && <Subjectmodalcomponents onClose={handleCloseModal} />}
    {openModal === "examType" && <Examtypemodalcomponents onClose={handleCloseModal} />}
    {openModal === "location" && <Locationmodalcomponents onClose={handleCloseModal} />}
    {openModal === "reviewfilter" && <Reviewfiltermodalcomponents onClose={handleCloseModal} />}
    </>     
  )
}

export default page
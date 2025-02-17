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
import Reviewgallerymodalcomponents from '../components/modal/review-lightbox/reviewgallerymodalcomponents';
import Courseheaderinfoskeleton from '../components/skeleton/courseheaderinfoskeleton';
import Courseoptionsskeleton from '../components/skeleton/courseoptionsskeleton';
import Yearofentryskeleton from '../components/skeleton/yearofentryskeleton';
import Jumptoskeleton from '../components/skeleton/jumptoskeleton';
import { log } from 'console';
import Othercoursesmaylikecomponents from './other-courses-you-may-like/othercoursesmaylikecomponents';

const page = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);
     document.body.classList.add("overflow-y-hidden");
  };
  const handleCloseModal = (modalName: any) => {
    console.log(modalName);
    
    if(modalName === "subject" || "examType" || "location" || "courseoption" || "reviewfilter" || "reviewgallery"){
      setOpenModal(null)
      document.body.classList.remove("overflow-y-hidden");
    }
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
    {/* <Courseheaderinfoskeleton /> */}
    <Courseheaderinfocomponents />
    {/* <Yearofentryskeleton /> */}
    <Yearofentrycomponents />
    {/* <Courseoptionsskeleton />  */}
    <Courseoptionscomponents  onOpenModal={() => handleOpenModal("courseoption")} /> 
    {/* <Jumptoskeleton /> */}
    <Jumptocomponents />
    <Courseinfocomponents  onOpenModal={() => handleOpenModal("subject")} onOpenReviewModal={()=> handleOpenModal("reviewfilter")} />
    <Modulescomponents />
    <Entryrequirements onOpenModal={() => handleOpenModal("examType")} />
    <Popularalevelsubjectcomponents />
    <Tuitionfeescomponents onOpenModal={() => handleOpenModal("location")} />
    <Latestreviewscomponents onOpenModal={() => handleOpenModal("subject") } />
    <Uniinfocomponents />
    <Othercoursesmaylikecomponents />
    <Similarcoursecomponents />
    <Findacoursecomponents />
    <Subscribecomponents />
    {openModal === "courseoption" && <Courseinfomodalcomponents onClose={handleCloseModal} />}
    {openModal === "subject" && <Subjectmodalcomponents onOpenModal={true}  onClose={handleCloseModal} />}
    {openModal === "examType" && <Examtypemodalcomponents onClose={handleCloseModal} />}
    {openModal === "location" && <Locationmodalcomponents onClose={handleCloseModal} />}
    {(openModal === "reviewfilter" || openModal === "reviewgallery") && <Reviewfiltermodalcomponents onOpenReviewGalleryModal={()=> handleOpenModal("reviewgallery")} onClose={handleCloseModal} />}
    {openModal === "reviewgallery" && <Reviewgallerymodalcomponents onClose={()=> handleCloseModal("reviewgallery")} />}
    </>     
  )
}

export default page
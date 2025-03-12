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
import Othercoursesmaylikecomponents from './other-courses-you-may-like/othercoursesmaylikecomponents';
import Oneclickmodalcomponents from '../components/modal/one-click/Oneclickmodalcomponents';
import Clearingcourseheaderinfo from './course-header-info/Clearingcourseheaderinfo';

const page = () => {
  const [openModal, setOpenModal] = useState(null);
  const [isOpen, setIsOpen] = useState<any>(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };
  const handleCloseModal = (modalName: any) => {
    setIsOpen(null);
    setOpenModal(null);
    document.body.classList.remove("overflow-y-hidden");
    const validModals = ["subject", "examType", "location", "courseoption", "reviewfilter", "reviewgallery"];   
    
    if (validModals.includes(modalName)) {
      setOpenModal(null);
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
    <Courseheaderinfocomponents onOpenModal={() => handleOpenModal("oneclick")} />
    {/* <Clearingcourseheaderinfo /> */}
    {/* <Yearofentryskeleton /> */}
    <Yearofentrycomponents />
    {/* <Courseoptionsskeleton />  */}
    <Courseoptionscomponents /> 
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
    {openModal === "courseoption" && <Courseinfomodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {openModal === "subject" && <Subjectmodalcomponents isOpen={isOpen}  onClose={handleCloseModal} />}
    {openModal === "examType" && <Examtypemodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {openModal === "location" && <Locationmodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    {(openModal === "reviewfilter" || openModal === "reviewgallery") && <Reviewfiltermodalcomponents isOpen={isOpen} onOpenReviewGalleryModal={()=> handleOpenModal("reviewgallery")} onClose={handleCloseModal} />}
    {openModal === "reviewgallery" && <Reviewgallerymodalcomponents isOpen={isOpen} onClose={()=> handleCloseModal("reviewgallery")} />}
    {openModal === "oneclick" && <Oneclickmodalcomponents isOpen={isOpen} onClose={handleCloseModal} />}
    </>     
  )
}

export default page
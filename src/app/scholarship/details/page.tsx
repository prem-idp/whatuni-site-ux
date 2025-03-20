"use client"; 

import CourseOverview from "@/app/components/course-overview/courseoverview";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination} from 'swiper/modules';
import Breadcrumblayoutcomponent from "@/app/components/breadcrumb-layout/breadcrumblayoutcomponent";
import ScholarshipInfo from "@/app/components/scholarship-info/scholarshipInfo";
import Scholarshipunicard from "@/app/components/cards/scholarshipuniversities/scholarshipunicard";

const page = () => {
  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Scholarships",
    },
    {
      url: "#",
      label: "University of Kent",
    },

    {
      url: "",
      label: "Search results",
    },
  ];
  const overview = [
    {
      title: "Scholarship overview ",
      description: "Overview of the [Scholarship Name] scholarship ",

      cardGrid: [
        {
          cardTitle: "Level of study",
          cardDetails: "Undergraduate, Postgraduate, Doctorate",
          cardIcon: "/assets/icons/scholarship/clock.svg",
          cardImgname: "clock icon",
        },
        {
          cardTitle: "Eligible Subjects",
          cardDetails: "Engineering, Business, Medicine",
          cardIcon: "/assets/icons/scholarship/file-searching.svg",
          cardImgname: "file search icon",
        },
        {
          cardTitle: "Nationality ",
          cardDetails: "Open to UK, Commonwealth, International students ",
          cardIcon: "/assets/icons/scholarship/nationality-world.svg",
          cardImgname: "world icon",
        },
        {
          cardTitle: "Number of awards available",
          cardDetails: "2",
          cardIcon: "/assets/icons/scholarship/awards-star.svg",
          cardImgname: "Award icon",
        },
      ],
    },
  ];
  const eligibility = [
    {
      title: "Eligibility Criteria Section",
      description: "Heading Copy: Who can apply for the [Scholarship name]?",
      cardGrid: [
        {
          cardTitle: "Gender",
          cardDetails: "Applicable to all genders",
          cardIcon: "/assets/icons/scholarship/avatar.svg",
          cardImgname: "avatar icon",
        },
        {
          cardTitle: "Study mode",
          cardDetails: "Full time",
          cardIcon: "/assets/icons/scholarship/clock.svg",
          cardImgname: "clock icon",
        },
        {
          cardTitle: "Delivery mode",
          cardDetails: "All types of delivery mode",
          cardIcon: "/assets/icons/scholarship/delivery.svg",
          cardImgname: "transport icon",
        },
        {
          cardTitle: "Eligibility intake",
          cardDetails: "Only selective applicants are considered ",
          cardIcon: "/assets/icons/scholarship/file-searching.svg",
          cardImgname: "file search icon",
        },
      ],
      requirements:
        "ICMS is offering a scholarship to a new international Postgraduate student who will be commencing their studies at ICMS in a 2-year Master program in August 2024 . The scholarship is awarded based on a three-component application process, which will result in the successful applicant being awarded a scholarship which offers a tuition waiver to the value of UP TO AUD$18,000 within one of the ICMS Master Degree programs commencing August 2024.",
      degress: [
        "Master of Business Administration",
        "Master of Business Administration (Business Analytics)",
        "Master of Business Administration (Digital Transformation)",
        "Master of Business Administration (Innovation and Entrepreneurship)",
        "Master of Event Management",
        "Master of International Business",
        "Master of Management",
        "Master of Management (Tourism and Hospitality)",
      ],
      criteria: [
        "Applicants must have a full time or equivalent study load",
        "Applicants need to meet the ICMS Academic & English Entry Requirement",
        "Applicants must have a GPA of 3.20 out of 5.0 from their previous undergraduate degree",
        "This scholarship is available for new international students only",
      ],
      discover: [
        {
          area: "Business and Managemen",
          level: "Undergraduate",
        },
        {
          area: "Art",
          level: "Undergraduate",
        },
        {
          area: "Law",
          level: "Undergraduate",
        },
      ],
    },
  ];
  const funding = [
    {
      title: "Funding details section",
      otherLabel: "What does the [Scholarship name] include? ",
      otherdescription: "This scholarship provides the following support: ",
      cardGrid: [
        {
          cardTitle: "Funding type",
          cardDetails: "Cash, Fee Waiver, Discount, etc.",
          cardIcon: "/assets/icons/scholarship/funding-card.svg",
          cardImgname: "funding icon",
        },
        {
          cardTitle: "Amount/Value:",
          cardDetails: "Fixed, Variable, or NA",
          cardIcon: "/assets/icons/scholarship/market-arrow.svg",
          cardImgname: "growth icon",
        },
        {
          cardTitle: "Coverage",
          cardDetails: "Tuition, Accommodation, Cost of Living",
          cardIcon: "/assets/icons/scholarship/home-coverage.svg",
          cardImgname: "home icon",
        },
      ],
    },
  ];
  const selectionProcess = [
    {
      title: "Selection process section",
      description: "What is the selection process for the [Scholarship name]? ",
      details:
        "Here’s an outline of the selection criteria and process to help you understand how the recipients are chosen: ",
      cardGrid: [
        {
          cardTitle: "Selection basis",
          cardDetails: "Academic Excellence, Financial Need, etc.",
          cardIcon: "/assets/icons/scholarship/funding-card.svg",
          cardImgname: "fundin icon",
        },
        {
          cardTitle: "Selection approach",
          cardDetails: "Fixed, Variable, or NA",
          cardIcon: "/assets/icons/scholarship/group-avatar.svg",
          cardImgname: "group avatar icon",
        },
        {
          cardTitle: "Other selection criteria",
          cardDetails: "Tuition, Accommodation, Cost of Living",
          cardIcon: "/assets/icons/scholarship/circle-search.svg",
          cardImgname: "search icon",
        },
      ],
    },
  ];
  const howToApply = [
    {
      title: "How to apply",
      description:
        "Applying for the [Scholarship Name]: What You Need to Know ",
      otherLabel:
        "Ready to apply? Here’s what you need to know before submitting your application:  ",

      cardGrid: [
        {
          cardTitle: "Application Type",
          cardDetails: "Separate application required ",
          cardIcon: "/assets/icons/scholarship/folder.svg",
          cardImgname: "folder icon",
        },
        {
          cardTitle: "Application deadline:  ",
          cardDetails: "[Insert date]",
          cardIcon: "/assets/icons/scholarship/clock.svg",
          cardImgname: "clock icon",
        },
        {
          cardTitle: "Required documents:",
          cardDetails: "???????",
          cardIcon: "/assets/icons/scholarship/document.svg",
          cardImgname: "document icon",
        },
        {
          cardTitle: "Application method:",
          cardDetails:
            "Application method: Submit via [University name from DB] website ",
          cardIcon: "/assets/icons/scholarship/bulb.svg",
          cardImgname: "blub icon",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-white">
        {/* breadcrumb  */}
        <section className="bg-white hidden lg:block">
        <div className="max-w-container mx-auto pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>      
        {/* breadcrumb  */}
        {/* University details  */}
        <section className="shadow-custom-1 pb-[4px] mb-[30px ]">
          <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
            <div className="flex justify-between w-full py-[16px]">
              <div className="flex gap-[17px]">
                <span className="p-[4px] bg-white rounded-[8px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px]">
                  <Image
                    src="/assets/icons/search-result/kent.png"
                    alt="University logo"
                    width={56}
                    height={56}
                  />
                </span>
                <div className="flex flex-col gap-[4px]">
                  <div className="h5 heading5 font-farro text-black">
                  Scholarship name from DB scholarship at [University/Institution/Provider from DB] 
                  </div>
                  <span className="text-para-lg font-semibold text-blue-400">Norwich University of the Arts </span>
                  <div className="flex items-center gap-[8px] text-blue-400 small">
                    <span className="flex items-center">
                      <Image
                        alt="blue star icon"
                        className="relative top-[-1px]"
                        width="24"
                        height="24"
                        src="/assets/icons/blue-star.svg"
                      />
                      4.6
                    </span>
                    <Link href="#" className="underline ">
                      400 reviews
                    </Link>
                  </div>
                  <ul className="flex mt-[4px] flex-wrap gap-[8px]">
                    <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-grey-100 text-grey-500 xs-small">
                    South East England
                    </li>
                    <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                      <Image
                        src="/assets/icons/search-result/location-green.svg"
                        width="16"
                        height="16"
                        alt="location icon"
                      />
                      18.1 Miles from you
                    </li>
                    <li className="relative group text-nowrap uppercase underline text-blue-400 x-small">
                      <span>
                        WUSCA ranking: 18th
                        <div
                          className="z-[5] absolute select-none hidden group-hover:flex border border-grey-200 top-[20px] shadow-custom-1 whitespace-normal normal-case rounded-[8px] max-w-[100%] md:min-w-[320px] min-w-[200px] left-[-16px] md:left-0  bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0
                    "
                        >
                          <span className="x-small text-grey900 font-semibold">
                            Why should you trust our uni reviews?
                          </span>
                          <p className="x-small text-grey300">
                            All our reviews are from real students, submitted
                            using their verified university email address.
                          </p>
                        </div>
                      </span>
                    </li>
                    <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                      Lecturers and Teaching
                    </li>
                    <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                      + 2 more
                    </li>
                  </ul>
                </div>
              </div>

              {/* <span className="favorite group mr-[0] lg:mr-[10px]  items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </span> */}
            </div>
          </div>
        </section>
        {/* University details END */}
        <section>
          <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
            <div className="flex gap-[98px] pt-[54px] justify-between relative">
              <div className="w-full">
                <div className="flex flex-col pt-[10px] mb-[32px] gap-[4px]">
                  <div className="para-lg font-semibold">Overview</div>
                  <p className="para">The [Scholarship name from DB] is designed to support students pursuing [Subject areas from DB] at [University Name from DB]. It offers financial support of upto [ Value from DB]  for [Award coverage from DB – tuition, accommodation etc] and is open to eligible [LEVEL OF STUDY from DB] students.  </p>
                </div>
                <div className="flex flex-col gap-[4px] pb-[40px] border-b-[1px] border-neutral300">
                  <div className="text-x-small font-semibold uppercase letter tracking-[1px]">jump to:</div>
                  <ul className="flex flex-col gap-[4px]">
                    <li className="relative before:left-[0] before:text-neutral600 before:content-['-'] before:absolute pl-[14px]">
                      <Link className="small text-blue-400" href="#overview">Overview</Link>
                    </li> 
                    <li className="relative before:left-[0] before:text-neutral600 before:content-['-'] before:absolute pl-[14px]">
                      <Link className="small text-blue-400" href="#eligibility">Eligibility</Link>
                    </li> 
                    <li className="relative before:left-[0] before:text-neutral600 before:content-['-'] before:absolute pl-[14px]">
                      <Link className="small text-blue-400" href="#funding">Funding</Link>
                    </li> 
                    <li className="relative before:left-[0] before:text-neutral600 before:content-['-'] before:absolute pl-[14px]">
                      <Link className="small text-blue-400" href="#selectionprocess">Selection process</Link>
                    </li> 
                    <li className="relative before:left-[0] before:text-neutral600 before:content-['-'] before:absolute pl-[14px]">
                      <Link className="small text-blue-400" href="#howtoapply">How to apply</Link>
                    </li>                    
                  </ul>
                </div>
                <section id="overview">
                  <CourseOverview noBorder={false} data={overview} />
                </section>
                <section id="eligibility">
                  <CourseOverview noBorder={false} data={eligibility} />
                </section>
                <section id="funding">
                  <CourseOverview noBorder={false} data={funding} />
                </section>
                <section id="selectionprocess">
                  <CourseOverview noBorder={false} data={selectionProcess} />
                </section>
                <section id="howtoapply">
                  <CourseOverview noBorder={true} data={howToApply} />
                </section>
                <section className="pb-[46px]">
                <ScholarshipInfo moreDetails={ true }/>
                </section>
              </div>
              <ScholarshipInfo moreDetails={ false }/>
              {/* <div className="relative">
                <div className="sticky top-[20px] mb-[20px] shadow-custom-1 border border-grey-200 rounded-[8px] w-[289px] max-w-[100%] p-[16px] gap-[16px] flex flex-col">
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex gap-[16px] items-start">
                      <div className="h6">
                        Need more information? Visit the [Institution name]
                      </div>
                      <Image
                        alt="info"
                        src="/assets/icons/scholarship/info-bulb.svg"
                        width="48"
                        height="48"
                      />
                    </div>
                    <p>
                      Head over to the [Institution name] for more details on
                      the scholarship and application guidelines
                    </p>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <Visitwebsite />
                    <RequestInfo />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="py-[64px] bg-grey-50">
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
              <div className="scholarship-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
                <div className="h2 font-bold">Popular scholarships at this university</div>             
              </div>
              <div className="scholarship-course-container ">
                <div className="scholarship-inner-wrap">
                <div className="slider-container">
         <Swiper
         pagination={true}
         navigation={true}
         breakpoints={{
           320: {
             slidesPerView: 1,
             spaceBetween: 8,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           1200: {
             slidesPerView: 3,
             spaceBetween: 20,            
           },
         }}
         modules={[FreeMode, Pagination, Navigation]} 
         className="MultiSwiper">
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
           </Swiper>
         </div>
                </div>
              </div>
            </div>
        </section>
        <section className="py-[64px]">
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
              <div className="scholarship-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
                <div className="h2 font-bold">Similar scholarships at other universities</div>             
              </div>
              <div className="scholarship-course-container ">
                <div className="scholarship-inner-wrap">
                <div className="slider-container">
         <Swiper
         pagination={true}
         navigation={true}
         breakpoints={{
           320: {
             slidesPerView: 1,
             spaceBetween: 8,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           1200: {
             slidesPerView: 3,
             spaceBetween: 20,            
           },
         }}
         modules={[FreeMode, Pagination, Navigation]} 
         className="MultiSwiper">
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
              <SwiperSlide>
                 <Scholarshipunicard scholarshipURL={true} />
             </SwiperSlide>          
           </Swiper>
         </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default page;

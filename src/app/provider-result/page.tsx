"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Subscribecomponents from "../article-landing/subscribe-newsletter/subscribecomponents";
import Breadcrumblayoutcomponent from "../components/breadcrumb-layout/breadcrumblayoutcomponent";
import Paginations from "../components/paginations/paginations";
import Tagcloudcomponents from "../home/tag-cloud/tagcloudcomponents";
import RequestInfo from "../components/cards/interaction-button/requestinfo";
import Getprospectus from "../components/cards/interaction-button/getprospectus";
import Visitwebsite from "../components/cards/interaction-button/visitwebsite";
import BookOpenDay from "../components/cards/interaction-button/bookopenday";

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
  const providerList = [
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      fullCourse: "Full course details available on [subject]",
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
    {
      title: "Architecture & Design",
      provideFav: false,
      modulesList: ["Something", "Something", "Something", "Something"],
      tagLocation: "Distance/online",
      points: "164-112 ucas points",
    },
  ];
  // Provider card toggle function 
  const [isUniModule, setIsUniModule] = useState(false);
    const visbleModule = () => {
      setIsUniModule(preState => !preState)
    }
// Provider card toggle function  END

  const providerCard = providerList.map((items) => (
    <div
      key={items.title}
      className="flex flex-col rounded-[16px] overflow-hidden bg-white shadow-custom-3 border border-grey-200 w-full md:max-w-[calc(50%_-_10px)] xl:max-w-[385px]"
    >
      <div className="flex justify-end p-[16px] bg-blue-100">
        <div className="heart group w-[40px] h-[40px] bg-white border border-primary-400 rounded-[24px] flex items-center justify-center hover:bg-primary-400 hover:cursor-pointer">
          <svg className="group-hover:fill-primary-400"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="group-hover:stroke-white"
              d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
              stroke="#4664DC"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex p-[16px] flex-col gap-[16px] h-full justify-between">
        <div className="flex flex-col gap-[16px] md:min-h-[240px]">
          <div className="h6 font-farro text-blue-400">{items.title}</div>
          <ul className="flex flex-wrap gap-[4px]">
            <li className="flex gap-[2px] bg-grey-100 text-grey-500 font-semibold x-small px-[8px] rounded-[4px]">
              <Image
                alt="calender icon"
                width="16"
                height="16"
                src="/assets/icons/search/calender-grey.svg"
              />

              {items.points}
            </li>
            <li className="flex gap-[2px] bg-grey-100 text-grey-500 font-semibold x-small px-[8px] rounded-[4px]">
              <Image
                alt="timer icon"
                width="16"
                height="16"
                src="/assets/icons/search/time-grey.svg"
              />

              {items.tagLocation}
            </li>
          </ul>
          {items.fullCourse && (
            <span className="text-blue-400 font-semibold small">
              {items.fullCourse}
            </span>
          )}
          {items.modulesList && (
            <>
              <span onClick={visbleModule} className="text-blue-400 select-none font-semibold small cursor-pointer transition-all delay-0 duration-300 ease-linear pl-[20px] relative before:absolute before:content-[''] before:w-[11px] before:h-[2px] before:bg-blue-400 before:rounded-[2px] before:left-[2px] before:top-[10px] after:absolute after:content-[''] after:w-[11px] after:h-[2px] after:bg-blue-400 after:rounded-[2px] after:left-[2px] after:top-[10px] after:rotate-[90deg] after:transition-all after:delay-0 after:duration-300 after:ease-linear">
                Modules
              </span>
              <ul className="p-[0_16px_0_18px] flex flex-col gap-[8px] list-disc">
                {isUniModule && (
                  <>
                   {items.modulesList.map((list, index) => (
                  <li className="text-grey300 small font-semibold break-all" key={index}>{ list }</li>
                   ))}
                  </>
                ) }
               
                
              </ul>
            </>
          )}
        </div>

        <div className="w-full flex flex-col gap-[8px]">
          <Getprospectus/>
          <Visitwebsite/>
          <BookOpenDay/>
          <RequestInfo/>         
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {/* breadcrumb  */}
      <section className="bg-white hidden lg:block">
        <div className="max-w-container mx-auto pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>
      {/* breadcrumb  */}
      {/* University details  */}
      <section className="bg-white">
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
          <div className="flex flex-col-reverse gap-[5px] md:gap-[0] md:flex-row justify-between max-w-[100%] w-[1145px]  py-[16px]">
            <div className="flex gap-[17px]">
              <span className="p-[4px] bg-white rounded-[8px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px]">
                <Image
                  src="/assets/icons/search/kent.png"
                  alt="University logo"
                  width={56}
                  height={56}
                />
              </span>
              <div className="flex flex-col gap-[4px]">
                <div className="h5 heading5 font-farro text-black">
                  University of kent
                </div>
                <span className="para">1563 courses available </span>
                <div className="flex items-center gap-[8px] text-blue-400 small">
                  <span className="flex">
                    <Image
                      alt="blue star icon"
                      className="relative top-[-1px]"
                      width="24"
                      height="24"
                      src="./assets/icons/blue-star.svg"
                    />
                    4.6
                  </span>
                  <Link href="#" className="underline ">
                    400 reviews
                  </Link>
                </div>
                <ul className="flex flex-wrap gap-[8px]">
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-grey-100 text-grey-500 xs-small">
                    REGION
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    <Image
                      src="assets/icons/search/location-green.svg"
                      width="16"
                      height="16"
                      alt="location icon"
                    />
                    18.1 Miles from you
                  </li>
                  <li className="text-nowrap uppercase underline text-blue-400 xs-small">
                    <Link href="#">WUSCA ranking: 18th</Link>
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    Lecturers and Teaching{" "}
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    + 2 more
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Link href="#" className="flex gap-[8px]">
              <Image src="./assets/icons/heart-grey.svg" alt="heart icon" width="19" height="19" />
              <span className="small text-grey300 underline">Favourite</span>
              </Link>
            
            </div>
          </div>
        </div>
      </section>
      {/* University details END */}
      {/* SR Filter */}
      <section className="bg-grey-600 px-[12px] py-[16px]">
        <div className="max-w-container mx-auto flex gap-[8px] small">
          <div className="flex items-center justify-center gap-[8px] btn btn-primary grow w-fit px-[12px] lg:grow-0 lg:shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                fill="#F9FAFB"
              />
            </svg>
            Add my grades
          </div>
          <div className="flex items-center justify-center gap-[8px] btn grow w-fit px-[12px] hover:bg-blue-200 bg-white text-grey300 lg:grow-0 lg:shrink-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.90625V1.875M10 3.90625C8.87817 3.90625 7.96875 4.81567 7.96875 5.9375C7.96875 7.05933 8.87817 7.96875 10 7.96875M10 3.90625C11.1218 3.90625 12.0312 4.81567 12.0312 5.9375C12.0312 7.05933 11.1218 7.96875 10 7.96875M3.90625 16.0938C5.02808 16.0938 5.9375 15.1843 5.9375 14.0625C5.9375 12.9407 5.02808 12.0312 3.90625 12.0312M3.90625 16.0938C2.78442 16.0938 1.875 15.1843 1.875 14.0625C1.875 12.9407 2.78442 12.0312 3.90625 12.0312M3.90625 16.0938V18.125M3.90625 12.0312V1.875M10 7.96875V18.125M16.0938 16.0938C17.2156 16.0938 18.125 15.1843 18.125 14.0625C18.125 12.9407 17.2156 12.0312 16.0938 12.0312M16.0938 16.0938C14.9719 16.0938 14.0625 15.1843 14.0625 14.0625C14.0625 12.9407 14.9719 12.0312 16.0938 12.0312M16.0938 16.0938V18.125M16.0938 12.0312V1.875"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter (2)        
          </div>
          
          <div className="hidden lg:flex items-center justify-center gap-[8px] lg:shrink-0">
            <div className="flex items-center gap-[8px] btn w-fit hover:bg-blue-200 bg-white text-grey300">
              Study level
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-[8px] btn w-fit hover:bg-blue-200 bg-white text-grey300">
              Subject (1)
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-[8px] btn w-fit hover:bg-blue-200 bg-white text-grey300">
              Year
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-[8px] btn w-fit hover:bg-blue-200 bg-white text-grey300">
              University
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8L10 13L5 8"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          
          </div>
          <div className="flex items-center justify-center gap-[4px] cursor-pointer px-0 text-grey-50 xl:px-[16px] lg:shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.8173 1.8173C2.24037 1.39423 2.9263 1.39423 3.34937 1.8173L8 6.46794L12.6506 1.8173C13.0737 1.39423 13.7596 1.39423 14.1827 1.8173C14.6058 2.24037 14.6058 2.9263 14.1827 3.34937L9.53206 8L14.1827 12.6506C14.6058 13.0737 14.6058 13.7596 14.1827 14.1827C13.7596 14.6058 13.0737 14.6058 12.6506 14.1827L8 9.53206L3.34937 14.1827C2.9263 14.6058 2.24037 14.6058 1.8173 14.1827C1.39423 13.7596 1.39423 13.0737 1.8173 12.6506L6.46794 8L1.8173 3.34937C1.39423 2.9263 1.39423 2.24037 1.8173 1.8173Z"
                fill="white"
              />
            </svg>
            Reset
          </div>
        </div>
      </section>
      {/* SR Filter END */}
      {/* university tag  */}
      <div className="bg-white overflow-x-auto snap-x snap-mandatory">
        <section className="bg-white px-[16px] py-[10px] xl:px-0 lg:py-[8px]">
          <div className="max-w-container mx-auto">
            <ul className="flex items-start gap-[8px] uppercase">
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                2023
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                Undergraduate
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                Sn3 TR7
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                Full time
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                Full time
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                South East England
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M4 4L12 12"
                    stroke="#3460DC"
                    strokeWidth="1.13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                <Link href="">
                  <svg
                    width="7"
                    height="20"
                    viewBox="0 0 7 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.55756 10.508H4.31356V12.788H2.68156V10.508H0.437563V8.96H2.68156V6.668H4.31356V8.96H6.55756V10.508Z"
                      fill="#3460DC"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* university tag  */}
      {/* Provider Result card list  */}
      <section className="bg-grey-50">
        <div className="max-w-container px-[6px] md:px-[24px] xl:px-[0] mx-auto">
          <div className="flex p-[0_10px_24px] md:p-[20px_10px_24px] flex-wrap gap-[20px]">
            {providerCard}
          </div>
          <div className="pb-[64px]">
            <Paginations />
          </div>
        </div>
      </section>
      {/* Provider Result card list END */}

      {/* <section className="bg-white">
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] lg:-px-[0]">
          <div className="flex flex-col py-[40px] gap-[32px]">
            <div className="h2 font-farro heading2 text-grey300">
              Scholarships at this uni
            </div>
            <ul className="flex flex-wrap gap-[8px]">
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
              <li className="p-[2px_8px] bg-blue-50 text-primary-500 rounded-[4px] uppercase font-bold x-small">
                Badge
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <Tagcloudcomponents routerUrl={ true } />
      <Subscribecomponents />
    </>
  );
};

export default page;

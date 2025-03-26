"use client";
import React from "react";
import Link from "next/link";

import Breadcrumblayoutcomponent from "@/app/components/breadcrumb-layout/breadcrumblayoutcomponent";
import SearchFilterButtons from "@/app/components/search-filter-buttons/search-filter-buttons";
import Scholarshipunicomponents from "@/app/article-landing/scholarship-universities/scholarshipunicomponents";
import Subscribecomponents from "@/app/article-landing/subscribe-newsletter/subscribecomponents";
import Faqcomponents from "@/app/components/faq/faqcomponents";
import Advicecomponents from "@/app/home/advice/advicecomponents";
import { Pagination } from "swiper/modules";
import Paginations from "@/app/components/paginations/paginations";

const page = () => {
  const scholarshipLable = true;
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

  return (
    <>
      {/* Skeleton loader  */}
      <section className="hidden">
        <div className="bg-white ">
          <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
            {/* Skeleton Breadcrum  */}
            <div className="pt-[16px] pb-[40px]">
              <nav aria-label="breadcrumb">
                <ul className="flex flex-wrap gap-[20px]">
                  <li className="flex relative">
                    <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                  </li>
                  <li className="flex relative">
                    <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                  </li>
                  <li className="flex relative">
                    <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                  </li>
                  <li className="flex relative">
                    <span className="skeleton after:absolute after:flex after:justify-center after:content-[''] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Skeleton Breadcrum END */}
        {/* filter  */}
        <section className="bg-grey-100 px-[12px] py-[16px]">
          <div className="max-w-container mx-auto flex gap-[8px] small">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex gap-[8px]">
                <span className="skeleton skeleton-text-animated min-w-[140px] min-h-[40px] flex"></span>
              </div>
            ))}
          </div>
        </section>
        {/* filter ENd */}
        {/* filter tag  */}
        <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] xl:px-0 lg:py-[8px]">
          <div className="max-w-container mx-auto">
            <ul className="flex items-start gap-[8px]">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="min-w-[100px]">
                  <span className="skeleton skeleton-text-animated !rounded-[4px] min-h-[30px] flex"></span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* filter tag END */}
        {/* listing card  */}
        <section className="bg-white ">
          <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[24px] px-[10px] gap-[20px]">
              {/* card  */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-[16px] overflow-hidden bg-white shadow-custom-3 border border-grey-200"
                >
                  <div className="skeleton skeleton-text-animated !rounded-[0] !m-[0] flex w-full relative min-h-[220px]">
                    <span className="skeleton !m-[0] skeleton-text-animated max-w-[64px] absolute top-[16px] left-[16px] min-h-[64px] !rounded-[8px]"></span>
                  </div>
                  <div className="p-[16px] flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="skeleton skeleton-text-animated">                       </div>
                      <p className="skeleton skeleton-text-animated"></p>
                      <ul className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] text-grey500">
                        <li className="flex flex-col gap-[4px]">
                        <span className="skeleton skeleton-text-animated !m-[0]"></span>
                          <p className="skeleton skeleton-text-animated !m-[0]"></p>
                        </li>
                        <li className="flex flex-col gap-[4px]">
                        <span className="skeleton skeleton-text-animated !m-[0]"></span>
                        <p className="skeleton skeleton-text-animated !m-[0]"></p>
                        </li>
                        <li className="flex flex-col gap-[4px]">
                        <span className="skeleton skeleton-text-animated !m-[0]"></span>
                        <p className="skeleton skeleton-text-animated !m-[0]"></p>
                        </li>
                        <li className="flex flex-col gap-[4px]">
                        <span className="skeleton skeleton-text-animated !m-[0]"></span>
                        <p className="skeleton skeleton-text-animated !m-[0]"></p>
                        </li>
                      </ul>
                    </div>
                    <div className="flex gap-[16px] ">
                      <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                      <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* listing card  END */}
      </section>
      {/* skeleton loader END */}
      {/* breadcrumb  */}
      <section className="bg-white">
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0] pt-[24px] pb-[8px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>
      {/* breadcrumb  */}
      {/* course title  */}
      <section className="bg-white border-b border-grey-200 lg:border-[0]">
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0] py-[16px]">
          <div className="h4 mb-[4px]">
            Top Law, Engineering & Architecture subjects for you
          </div>
          <p>000 universities offer 1563 courses</p>
        </div>
      </section>

      {/* course title  */}
      {/* start search filter button */}
      <SearchFilterButtons scholarshipURL={true} />
      {/* start search filter button */}

      {/* start search lables */}
      <section
        className={`${
          scholarshipLable ? "" : "md:sticky top-[69px]"
        }overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[8px] md:px-[20px] xl:px-0 z-[4]`}
      >
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
                className="cursor-pointer"
                width="16"
                height="17"
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
                className="cursor-pointer"
                width="16"
                height="17"
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
                className="cursor-pointer"
                width="16"
                height="17"
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
                className="cursor-pointer"
                width="16"
                height="17"
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
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[2px] font-semibold x-small flex items-center gap-[2px]">
              <Link href="" aria-label="Plus Icon">
                <svg
                  className="cursor-pointer"
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
      {/* end search lables */}

      {/* Scholarship card  */}
      <Scholarshipunicomponents scholarshipSR={false} scholarshipURL={true} />
      {/* Scholarship card  END */}
      {/* pagination  */}
      <section className="py-[40px]">
        <Paginations />
      </section>

      {/* pagination ENd */}
      <section className="bg-white">
        <div className="max-w-container mx-auto">
          <Advicecomponents categoryTag={true} adviceBgWhite={true} />
        </div>
      </section>
      <Faqcomponents />
      <Subscribecomponents />
    </>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumbs from "../components/breadcrumb/breadcrumbcomponents";
import Getprospectus from "../components/cards/interaction-button/getprospectus";
import Visitwebsite from "../components/cards/interaction-button/visitwebsite";
import BookOpenDay from "../components/cards/interaction-button/bookopenday";
import RequestInfo from "../components/cards/interaction-button/requestinfo";
import Paginations from "../components/paginations/paginations";
import Faqcomponents from "../components/faq/faqcomponents";
import Subscribecomponents from "../article-landing/subscribe-newsletter/subscribecomponents";
import SearchFilterComponent from "../popups/searchfiltercomponent";

const SearchResult = () => {
  //read more

  // search filter
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(true);
  const searchClick = () => {
    setIsSearchFilterOpen(true);
    const body = document.body;
    body.classList.add("overflow-y-hidden");
  };

  const filterClose = () => {
    const body = document.body;
    setIsSearchFilterOpen(false);
    body.classList.remove("overflow-y-hidden");
  };

  const faqData = [
    {
      title: "How can I see my existing clients through Designership?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How does Designership attract clients?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "What type of support does Designership provide?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How can I see my existing clients through Designership?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How does Designership attract clients?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "What type of support does Designership provide?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
  ];

  return (
    <>
      <section className="px-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          <BreadCrumbs />
          <div className="text-grey300 py-[16px]">
            <div className="h5 mb-[4px]">
              Top Law, Engineering & Architecture subjects for you
            </div>
            <p>000 universities offer 1563 courses</p>
          </div>
        </div>
      </section>

      <section className="bg-grey-600 px-[12px] py-[16px]">
        <div className="max-w-container mx-auto flex flex-wrap gap-[8px]">
          <div className="flex items-center justify-center gap-[8px] btn btn-primary grow w-fit px-[12px] lg:grow-0">
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
          <div
            onClick={searchClick}
            className="flex items-center justify-center gap-[8px] btn grow w-fit px-[12px] bg-blue-100 text-grey300 lg:grow-0"
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
            <div>
              <SearchFilterComponent
                onClose={filterClose}
                isFilterOpen={isSearchFilterOpen}
              />
            </div>
          </div>
          <div>
            <SearchFilterComponent
              onClose={filterClose}
              isFilterOpen={isSearchFilterOpen}
            />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-[8px]">
            <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
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
            <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
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
            <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
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
            <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
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
            <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
              Location (1)
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
          <div className="flex items-center justify-center gap-[8px] px-0 text-grey-50 lg:px-[16px]">
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
      {/* <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="snap-center flex p-4">
          <div className="bg-blue-500 w-64 p-4">Item 1</div>
          <div className="bg-green-500 w-64 p-4">Item 2</div>
          <div className="bg-yellow-500 w-64 p-4">Item 3</div>
          <div className="bg-red-500 w-64 p-4">Item 4</div>
          <div className="bg-red-500 w-64 p-4">Item 4</div>
          <div className="bg-red-500 w-64 p-4">Item 4</div>
          <div className="bg-red-500 w-64 p-4">Item 4</div>
          <div className="bg-red-500 w-64 p-4">Item 4</div>
        </div>
      </div> */}
      <div className="overflow-x-auto snap-x snap-mandatory">
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
      <section className="bg-white p-[16px] lg:pt-[16px] xl:p-0">
        <div className="max-w-container mx-auto">
          <div className="bg-blue-100 p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px]">
              <div className="bg-blue-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/search/calender-blue.svg"
                  alt="Calender"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="para-lg font-bold font-farro">
                  Add your grades
                </div>
                <div className="small">
                  Add your UCAS points to help tailor your search to find the
                  right uni for you
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center self-center gap-[8px] btn btn-primary px-[20px] py-[10px] w-full lg:w-fit">
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
          </div>
          <div className="bg-grey-50 p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px]">
              <div className="bg-grey-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/search/search-grey.svg"
                  alt="Search"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="para-lg font-bold font-farro">
                  No exact matches, but we're close
                </div>
                <div className="small">
                  We couldn’t find an exact match but here are some options
                  related to [search terms]. Or try modifying the filters to
                  find what you need
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto w-fit">
            <div className="flex items-center gap-[4px] px-[4px] py-[16px] small text-grey300 cursor-pointer">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 2.72217H10.8889M1.5 5.61106H8M1.5 8.49995H8M11.6111 5.61106V14.2777M11.6111 14.2777L8.72222 11.3888M11.6111 14.2777L14.5 11.3888"
                  stroke="#333333"
                  strokeWidth="1.335"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold">Sort:</span>
              <span> Entry reqs - highest</span>
            </div>
          </div>

          <div className="bg-grey-600 rounded-[8px] p-[24px] min-h-[268px] flex flex-col items-center gap-[24px] md:flex-row">
            <div className="flex flex-col gap-[8px] w-full order-2 lg:order-1">
              <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white hidden lg:block">
                <Image
                  src="/assets/icons/search/kent.png"
                  alt="University logo"
                  width={56}
                  height={56}
                />
              </div>
              <div className="text-green200 font-bold x-small uppercase">
                Featured
              </div>
              <div className="text-grey-50 h6">
                For the designers and makers of tomorrow
              </div>
              <div className="text-grey-50 small line-clamp-1">
                Study your creative Degree at Arts University Plymouth... Study
                your creative Degree at Arts University Plymouth Plymouth
              </div>
              <div className="flex items-center gap-[8px] text-grey-50 small">
                <div className="flex items-center gap-[4px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                      fill="#0FBEFD"
                    />
                  </svg>
                  4.6
                </div>
                <Link href="" className="hover:underline">
                  400 reviews
                </Link>
              </div>
              <Link
                href="#"
                className="flex items-center gap-[4px] text-white font-semibold underline"
              >
                Find out more
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
                    d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full md:w-[392px] shrink-0 flex items-center justify-center rounded-[8px] overflow-hidden relative order-1 lg:order-2">
              <video className="w-full hidden" src="" controls></video>
              <div className="w-full relative rounded-[8px] overflow-hidden flex justify-center">
                <Image
                  src="/assets/images/search/thumbnail.png"
                  alt="Thumbnail"
                  width={391}
                  height={200}
                />
              </div>
              <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
                <Image
                  alt="video_play_icon"
                  width="52"
                  height="52"
                  src="/assets/icons/video_play_icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between py-[24px] md:flex-row">
            <div className="w-full rounded-t-[16px] overflow-hidden shrink-0 md:w-[280px] md:h-[316px] lg:rounded-l-[16px] lg:rounded-tr-none lg:w-[500px] lg:h-[376px]">
              <div className="relative bg-blue-400 md:w-[280px] md:h-[316px] lg:w-[500px] lg:h-[376px]">
                <Image
                  src="/assets/images/search-results/university.jpg"
                  alt="University"
                  width={500}
                  height={376}
                  className="rounded-t-[16px] md:w-[280px] md:h-[316px] lg:rounded-l-[16px] lg:rounded-tr-none lg:w-[500px] lg:h-[376px]"
                />
                <div className="absolute bg-gradient11 rounded-t-[16px] top-0 left-0 p-[24px] w-full h-full md:w-[280px] md:h-[316px] lg:rounded-l-[16px] lg:rounded-tr-none lg:w-full lg:h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between">
                      <div className="flex items-start gap-[8px]">
                        <Link
                          href=""
                          className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white hidden lg:block"
                        >
                          <Image
                            src="/assets/icons/search/kent.png"
                            alt="University logo"
                            width={56}
                            height={56}
                          />
                        </Link>
                        <div className="bg-grey-100 text-grey-500 uppercase rounded-[4px] px-[8px] xs-small font-semibold">
                          sponsored
                        </div>
                      </div>
                      <div className="heart w-[40px] h-[40px] bg-white border border-primary-400 rounded-[24px] flex items-center justify-center hover:bg-blue-100 hover:cursor-pointer">
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
                    </div>
                    <div className="flex flex-col gap-[4px] text-white">
                      <div className="h5">University of Kent</div>
                      <div className="x-small font-semibold">
                        12 engineering courses
                      </div>
                      <div className="flex items-center gap-[8px] text-grey-50 small">
                        <div className="flex items-center gap-[4px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                              fill="#0FBEFD"
                            />
                          </svg>
                          4.6
                        </div>
                        <Link href="" className="underline">
                          400 reviews
                        </Link>
                      </div>
                      <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                        <div className="bg-grey-100 text-grey-500 px-[8px] rounded-[4px]">
                          REGION
                        </div>
                        <div className="flex items-center justify-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.929 10.0711C10.5878 10.4122 9.98482 11.0152 9.41426 11.5858C8.63321 12.3668 7.36696 12.3669 6.58591 11.5859C6.02667 11.0266 5.43232 10.4323 5.07111 10.0711C3.45351 8.45346 3.45351 5.83081 5.07111 4.2132C6.68872 2.5956 9.31137 2.5956 10.929 4.2132C12.5466 5.83081 12.5466 8.45346 10.929 10.0711Z"
                              stroke="#168721"
                              strokeWidth="1.13"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.55335 7.14214C9.55335 8 8.85791 8.69544 8.00005 8.69544C7.14218 8.69544 6.44675 8 6.44675 7.14214C6.44675 6.28427 7.14218 5.58884 8.00005 5.58884C8.85791 5.58884 9.55335 6.28427 9.55335 7.14214Z"
                              stroke="#168721"
                              strokeWidth="1.13"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          18.1 Miles from you
                        </div>
                      </div>
                      <Link href="" className="x-small underline">
                        WUSCA rank: 18th
                      </Link>
                      <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                        <div className="flex items-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                          <Image
                            src="/assets/icons/search/lectures-green.svg"
                            alt="Lecturers and Teaching"
                            width={12}
                            height={12}
                          />
                          Lecturers and Teaching
                        </div>
                        <div className="bg-primary-400 px-[8px] rounded-[4px]">
                          + 2 more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white p-[20px] border border-grey-200 rounded-b-[16px] shadow-custom-3 lg:rounded-tr-[16px] lg:rounded-b-[16px]">
                <div className="bg-grey-100 p-[12px] rounded-[8px] flex items-center gap-[4px]">
                  <div className="text-heading1">“</div>
                  <div className="flex flex-col gap-[4px]">
                    <Link
                      href=""
                      className="text-primary-400 underline x-small font-semibold"
                    >
                      What students think
                    </Link>
                    <div className="x-small text-grey300 line-clamp-2">
                      I never thought I’f find myself in a position where I
                      would feel empowered to be a lawyer, I wanted to go into
                      teaching but then realised after visiting Kent’s
                      facilities this would be the right plac... Read full
                      review
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-grey-300 -mx-[20px] pt-[20px] mb-[20px]"></div>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-[8px]">
                      <div className="text-primary-400 font-semibold">
                        Course name
                      </div>
                      <div className="flex gap-[4px] text-grey-500">
                        <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                          <Image
                            className="hidden md:block"
                            src="/assets/icons/search/calender-grey.svg"
                            alt="Lecturers and Teaching"
                            width={16}
                            height={16}
                          />
                          164-112 ucas points
                        </div>
                        <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                          <Image
                            className="hidden md:block"
                            src="/assets/icons/search/time-grey.svg"
                            alt="Lecturers and Teaching"
                            width={16}
                            height={16}
                          />
                          164-112 ucas points
                        </div>
                      </div>
                    </div>
                    <div className="heart w-[40px] h-[40px] bg-white border border-primary-400 rounded-[24px] flex items-center justify-center hover:bg-blue-100 hover:cursor-pointer">
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
                  </div>
                  <div className="flex items-center gap-[4px] text-primary-400 small font-semibold">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                        fill="#4664DC"
                      />
                    </svg>
                    Modules
                  </div>
                  <div className="grid gap-[8px] md:grid-flow-row lg:grid-flow-col">
                    <Getprospectus />
                    <Visitwebsite />
                    <BookOpenDay />
                    <RequestInfo />
                  </div>
                </div>
              </div>
              <Link
                href=""
                className="flex items-center justify-center gap-[4px] text-primary-400 small font-semibold mt-[16px] hover:underline"
              >
                View 99 related courses
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                    fill="#4664DC"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="pt-[24px] pb-[64px]">
            <Paginations />
          </div>
        </div>
      </section>
      <section className="bg-white p-[16px] lg:py-[28px] xl:p-0">
        <div className="max-w-container mx-auto">
          <div className="h1 pt-[12px] pb-[40px]">Explore more about law</div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col item-center lg:flex-row">
              <div className="w-full lg:w-[392px] shrink-0">
                <Image
                  src="/assets/images/search-results/article1.png"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 border border-t-0 border-grey-200 rounded-[0_0_8px_8px] lg:rounded-[0_8px_8px_0] lg:border-l-0 lg:border-t-[1px] lg:px-[24px] lg:py-[32px]">
                <div className="h4">Studying Law</div>
                <div className="small line-clamp-4">
                  A Law degree will teach students about issues that relate to
                  different areas of society; from business and the environment,
                  to human rights and trade. Students will develop key skills
                  like research, critical analysis and presentation, which will
                  prepare them to practice law. There are different strands of
                  law such as LLB, BA and BSc Law first-degree courses.
                  Graduates have the option of pursuing careers within law or in
                  other areas such as academia...
                </div>
                <Link
                  href=""
                  className="flex items-center gap-[4px] text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                      fill="#4664DC"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col item-center lg:flex-row">
              <div className="w-full lg:w-[392px] shrink-0">
                <Image
                  src="/assets/images/search-results/article2.jpg"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 border border-t-0 border-grey-200 rounded-[0_0_8px_8px] lg:rounded-[0_8px_8px_0] lg:border-l-0 lg:border-t-[1px] lg:px-[24px] lg:py-[32px]">
                <div className="h4">Studying in London</div>
                <div className="small line-clamp-4">
                  A Law degree will teach students about issues that relate to
                  different areas of society; from business and the environment,
                  to human rights and trade. Students will develop key skills
                  like research, critical analysis and presentation, which will
                  prepare them to practice law. There are different strands of
                  law such as LLB, BA and BSc Law first-degree courses.
                  Graduates have the option of pursuing careers within law or in
                  other areas such as academia...
                </div>
                <Link
                  href=""
                  className="flex items-center gap-[4px] text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                      fill="#4664DC"
                      className="flex-1"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Faqcomponents data={faqData}/> */}
      <Faqcomponents />
      <Subscribecomponents />
    </>
  );
};

export default SearchResult;

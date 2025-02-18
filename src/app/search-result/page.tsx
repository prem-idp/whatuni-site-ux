"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Paginations from "../components/paginations/paginations";
import Faqcomponents from "../components/faq/faqcomponents";
import Subscribecomponents from "../article-landing/subscribe-newsletter/subscribecomponents";
import Breadcrumblayoutcomponent from "../components/breadcrumb-layout/breadcrumblayoutcomponent";
import Getprospectus from "../components/cards/interaction-button/getprospectus";
import Visitwebsite from "../components/cards/interaction-button/visitwebsite";
import BookOpenDay from "../components/cards/interaction-button/bookopenday";
import RequestInfo from "../components/cards/interaction-button/requestinfo";
import SearchFilterButtons from "../components/search-filter-buttons/search-filter-buttons";
import ClickAndShow from "../components/click-show/click-show";
import SearchResultReviewLightBox from "../components/popups/sr-reviewlightbox";

const SearchResult = ({ openSearchResultLightbox }: any) => {
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

  const faqData = [
    {
      title: "1",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "2",
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

  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortClicked = () => {
    setIsSortClicked(!isSortClicked);
  };

  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);
  };
  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const sortBy = [
    "Recommended",
    "Distance from home",
    "Employment rate",
    "Entry reqs - Highest",
    "Entry reqs - lowest",
    "Student Ranking",
  ];
  const wuscaCategories = [
    "University of the year",
    "Career prospects",
    "Employment rate",
    "Facilities",
    "International",
    "Lecturers and teaching quality",
    "Postgraduate",
    "Student life",
    "Student support",
    "Students’s Union",
    "University Halls",
  ];
  const unicard = [
    {
      showprospect: true,
      showvisit: true,
      showBooking: true,
      showRequest: true,
      showImage: true,
      sponsored: true,
      course: [
        {
          buttonCount: 4,
        },
        {
          buttonCount: 4,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: false,
      showBooking: false,
      showRequest: false,
      showImage: false,
      course: [
        {
          buttonCount: 0,
        },
        {
          buttonCount: 0,
        },
      ],
    },
    {
      showprospect: true,
      showvisit: true,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 3,
        },
        {
          buttonCount: 3,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: true,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 2,
        },
        {
          buttonCount: 2,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: false,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 1,
        },
        {
          buttonCount: 1,
        },
      ],
    },
  ];

  return (
    <>
      {/* start breadcrumb and subject*/}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          {/* breadcrumb  */}
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          {/* breadcrumb  */}
          {/* start subject */}
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              Top Law, Engineering & Architecture subjects for you
            </div>
            <p>000 universities offer 1563 courses</p>
          </div>
          {/* skeleton */}
          <div className="py-[16px]">
            <div className="skeleton skeleton-text-animated descrip !w-[50%]"></div>
            <div className="skeleton skeleton-text-animated descrip !w-[30%]"></div>
          </div>
          {/* skeleton */}
          {/* end subject */}
        </div>
      </section>
      {/* end breadcrumb and subject*/}

      {/* start search filter button */}
      <SearchFilterButtons />
      {/* start search filter button */}

      {/* start search lables */}
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[8px] md:px-[20px] xl:px-0 md:sticky top-[69px] z-[4]">
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

      <section className="p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          {/* start add your grades */}
          <div className="bg-blue-100 p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px]">
              <div className="bg-blue-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/search-result/calender-blue.svg"
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
          {/* end add your grades */}

          {/* start add your grades skeleton*/}
          <div className="bg-neutral-100 h-[81px] p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px] grow">
              <div className="skeleton-text-animated text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <div className="skeleton skeleton-square-img skeleton-text-animated !w-[22px] !h-[22px] !rounded-none"></div>
              </div>
              <div className="flex flex-col gap-[4px] grow">
                <div className="skeleton skeleton-text-animated large_heading !w-[20%]"></div>
                <div className="skeleton skeleton-text-animated !w-[70%]"></div>
              </div>
            </div>
            <div className="skeleton skeleton_btn flex items-center justify-center self-center gap-[8px] btn   px-[20px] py-[10px] w-full lg:w-fit">
              <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[20px] !rounded-none"></div>
              <div className="skeleton skeleton-text-animated descrip"></div>
            </div>
          </div>
          {/* end add your grades skeleton*/}

          {/* start no search results */}
          {/* <div className="bg-grey-50 p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px]">
              <div className="bg-grey-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/search-result/search-grey.svg"
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
          </div> */}
          {/* end no search results */}

          {/* start sorting */}
          <div className="ml-auto w-fit relative">
            <div
              onClick={sortClicked}
              className="flex items-center gap-[4px] px-[4px] py-[16px] small text-grey300 cursor-pointer hover:underline"
            >
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
            {isSortClicked && (
              <div className="absolute top-[53px] right-[-1px] w-[345px] bg-white p-[24px] rounded-[8px] shadow-custom-3 z-10 md:w-[700px] lg:w-[940px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="text-heading6 font-farro font-bold">
                    Sort by
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                    {sortBy.map((item, index) => (
                      <div
                        className="custom-radio flex items-center"
                        key={index}
                      >
                        <input
                          className="rounded-md"
                          type="radio"
                          id={item}
                          name="featured"
                        />
                        <label htmlFor={item} className="flex items-center">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="font-semibold text-heading6 md:text-small">
                    Wusca categories{" "}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                    {wuscaCategories.map((item, index) => (
                      <div
                        className="custom-radio flex items-center"
                        key={index}
                      >
                        <input
                          className="rounded-md"
                          type="radio"
                          id={item}
                          name="featured"
                        />
                        <label htmlFor={item} className="flex items-center">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* end sorting */}

          {/* start university and video section */}
          <div className="bg-grey-600 rounded-[8px] p-[16px] flex flex-col gap-[24px] md:flex-row lg:p-[24px]">
            <div className="flex flex-col gap-[8px] w-full order-2 lg:order-1">
              <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4 hidden lg:block">
                <Image
                  src="/assets/icons/search-result/kent.png"
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
                <div className="flex items-end gap-[2px]">
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
                className="flex items-center gap-[4px] w-fit text-white font-semibold underline"
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
            <div className="w-full shrink-0 flex self-center  rounded-[8px] overflow-hidden relative order-1 md:w-[310px] md:h-[158px] lg:w-[391px] lg:h-[200px] lg:order-2">
              <video className="w-full hidden" src="" controls></video>
              <div className="w-full relative rounded-[8px] overflow-hidden flex justify-center">
                <Image
                  src="/assets/images/search-results/thumbnail.png"
                  alt="Thumbnail"
                  width={391}
                  height={200}
                  className="w-full h-full"
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
          {/* skeleton */}
          <div className="bg-neutral-100 rounded-[8px] p-[16px] flex flex-col gap-[24px] md:flex-row lg:p-[24px]">
            <div className="flex flex-col gap-[8px] w-full order-2 lg:order-1">
              <div className="skeleton skeleton-square-img skeleton-text-animated !w-[64px] !h-[64px] p-[4px] !rounded-[4px] bg-white shadow-custom-4 hidden lg:block"></div>
              <div className="skeleton skeleton-text-animated heading !w-[10%]"></div>
              <div className="skeleton skeleton-text-animated large_heading !w-[60%]"></div>
              <div className="skeleton skeleton-text-animated descrip"></div>
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
                      fill="#d4d4d4"
                    />
                  </svg>
                </div>
                <div className="skeleton skeleton-text-animated descrip !w-[20%]"></div>
              </div>
              <div className="flex items-center gap-[4px] text-white font-semibold underline">
                <div className="skeleton skeleton-text-animated heading !w-[15%]"></div>
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
                    fill="#d4d4d4"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full shrink-0 flex self-center  rounded-[8px] overflow-hidden relative order-1 md:w-[310px] md:h-[158px] lg:w-[391px] lg:h-[200px] lg:order-2">
              <div className="bg-neutral-100 w-full relative rounded-[8px] overflow-hidden flex justify-center">
              </div>
              <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
              <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[52px] !h-[52px] !rounded-none"></div>

              </div>
            </div>
          </div>
          {/* skeleton */}
          {/* end university and video section */}

          {/* start sponsored section */}
          {unicard.map((item, index) => (
            <div
              className="flex flex-col mt-[8px] md:mt-[24px] md:flex-row cursor-pointer"
              key={index}
            >
              <div className="w-full h-[292px] relative bg-blue-400 bg-gradient11 shrink-0 rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none md:w-[280px] md:h-[316px] lg:w-[500px] lg:h-[376px]">
                <div className="absolute top-0 left-0 p-[16px] bg-gradient11 w-full h-full lg:p-[24px] flex flex-col justify-between rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none">
                  <div className="flex justify-between">
                    <div className="flex items-start gap-[8px]">
                      <Link
                        href=""
                        className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4"
                      >
                        <Image
                          src="/assets/icons/search-result/kent.png"
                          alt="University logo"
                          width={56}
                          height={56}
                        />
                      </Link>
                      {item.sponsored ? (
                        <div className="bg-grey-100 text-grey-500 uppercase rounded-[4px] px-[8px] xs-small font-semibold">
                          sponsored
                        </div>
                      ) : null}
                    </div>
                    <div className="heart w-[40px] h-[40px] bg-white x-small border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100 relative group">
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
                      <div className="absolute z-[1] select-none hidden group-hover:flex border border-grey-200 top-[43px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-[24px] md:right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                        <div className="flex items-center justify-between">
                          <span className="text-grey900 font-semibold">
                            We have added this to your comparison
                          </span>
                          <svg
                            className="cursor-pointer"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18"
                              stroke="#333333"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 6L18 18"
                              stroke="#333333"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Link
                          href=""
                          className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
                        >
                          View all modules
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
                              d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                              fill="#3460DC"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] text-white">
                    <div className="h5  hover:underline">
                      University of Kent
                    </div>
                    <div className="x-small font-semibold">
                      12 engineering courses
                    </div>
                    <div className="flex items-center gap-[8px] text-grey-50 small">
                      <div className="flex items-end gap-[2px]">
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
                      <div className="flex items-center justify-center gap-[2px] bg-green-100 text-positive-dark px-[8px] rounded-[4px]">
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
                    <div className="x-small underline w-fit relative group">
                      WUSCA rank: 18th
                      <div className="absolute z-0 select-none hidden group-hover:flex border border-grey-200 top-[22px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] left-[-16px] md:left-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                        <div className="flex items-center justify-between">
                          <span className="text-grey900 font-semibold">
                            WUSCA Student Ranking
                          </span>
                          <svg
                            className="cursor-pointer"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18"
                              stroke="#333333"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 6L18 18"
                              stroke="#333333"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="x-small text-grey300 font-normal">
                          These are the 2024 ranking, based on rating given by
                          past and present students
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                      <div className="flex items-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                        <Image
                          src="/assets/icons/search-result/lectures-green.svg"
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
                {item.showImage ? (
                  <Image
                    src="/assets/images/search-results/university.jpg"
                    alt="University"
                    width={500}
                    height={376}
                    className="w-full h-full rounded-t-[16px] object-cover md:rounded-l-[16px] md:rounded-tr-none"
                  />
                ) : null}
              </div>
              <div className="flex flex-col grow">
                <div className="bg-white border border-grey-200 rounded-b-[16px] shadow-custom-3 md:rounded-tr-[16px]">
                  <div className="border-b-[1px] border-grey-200 p-[16px] lg:p-[20px]">
                    <div className="bg-grey-100 p-[12px] rounded-[8px] flex gap-[4px]">
                      <div className="text-heading1 relative top-[20px] font-farro font-normal">
                        “
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <div className="relative group x-small">
                          <span className="text-primary-400 underline font-semibold">
                            What students think
                          </span>
                          <div className="absolute z-[1] select-none hidden group-hover:flex border border-grey-200 top-[22px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] left-[-16px] md:left-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                            <div className="flex items-center justify-between">
                              <span className="text-grey900 font-semibold">
                                Why should you trust our uni reviews?
                              </span>
                              <svg
                                className="cursor-pointer"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18 6L6 18"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6 6L18 18"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="x-small text-grey300 font-normal">
                              All our reviews are from real students, submitted
                              using their verified university email address.
                            </p>
                          </div>
                        </div>
                        <div className="relative x-small">
                          <div className="text-grey300 line-clamp-2">
                            I never thought I’f find myself in a position where
                            I would feel empowered to be a lawyer, I wanted to
                            go into teaching but then realised after visiting
                            Kent’s facilities this would be the right plac
                          </div>
                          <div className="absolute bottom-0 bg-grey-100 right-0 lg:right-[56px]">
                            <span>... </span>
                            <span
                              onClick={handleOpenModal}
                              className="text-blue-400 cursor-pointer hover:underline"
                            >
                              Read full review
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {item.course.map((chitem, index) => (
                    <div
                      className="flex flex-col gap-[16px] border-b-[1px] border-grey-200 p-[16px] lg:p-[20px] last:border-none"
                      key={index}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-[8px]">
                          <div className="text-primary-400 font-semibold cursor-pointer hover:underline"
                          >
                            Course name
                          </div>
                          <div className="flex gap-[4px] text-grey-500">
                            <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                              <Image
                                className="hidden md:block"
                                src="/assets/icons/search-result/calender-grey.svg"
                                alt="Lecturers and Teaching"
                                width={16}
                                height={16}
                              />
                              164-112 ucas points
                            </div>
                            <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                              <Image
                                className="hidden md:block"
                                src="/assets/icons/search-result/time-grey.svg"
                                alt="Lecturers and Teaching"
                                width={16}
                                height={16}
                              />
                              3 years full time
                            </div>
                          </div>
                        </div>
                        <div className="heart w-[40px] h-[40px] bg-white x-small border border-primary-400 rounded-[24px] flex items-center justify-center hover:bg-blue-100 hover:cursor-pointer relative group">
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
                          <div className="absolute z-[1] select-none hidden group-hover:flex border border-grey-200 top-[44px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-[24px] md:right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                            <div className="flex items-center justify-between">
                              <span className="text-grey900 font-semibold">
                                We have added this to your comparison
                              </span>
                              <svg
                                className="cursor-pointer"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18 6L6 18"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6 6L18 18"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <Link
                              href=""
                              className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
                            >
                              View all modules
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
                                  d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                                  fill="#3460DC"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <ClickAndShow>
                        <div className="text-black x-small">
                          <div className="font-semibold">Year 1</div>
                          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
                            <li>Becoming a Criminologist</li>
                            <li>Introduction to Law and its Study</li>
                            <li>Social Research in Practice</li>
                            <li>Criminology in Late Modernity</li>
                            <li>Criminal Law</li>
                          </ul>
                          <Link
                            href=""
                            className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline"
                          >
                            View all modules
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
                                d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                                fill="#3460DC"
                              />
                            </svg>
                          </Link>
                        </div>
                      </ClickAndShow>
                      <div
                        className={`grid grid-cols-1 justify-items-stretch gap-[8px] auto-cols-fr xl:grid-rows-1 xl:grid-flow-col ${
                          chitem.buttonCount == 4
                            ? "lg:grid-rows-2 lg:grid-flow-col"
                            : "lg:grid-cols-1"
                        } ${chitem.buttonCount == 0 ? "hidden" : ""}`}
                      >
                        {item.showprospect ? (
                          <Getprospectus showCount={chitem.buttonCount} />
                        ) : null}

                        {item.showvisit ? (
                          <Visitwebsite showCount={chitem.buttonCount} />
                        ) : null}

                        {item.showBooking ? <BookOpenDay /> : null}

                        {item.showRequest ? (
                          <RequestInfo showCount={chitem.buttonCount} />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href=""
                  className="flex items-center mx-auto gap-[4px] text-primary-400 small font-semibold mt-[16px] hover:underline"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                      fill="#4664DC"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          {openModal && (
            <SearchResultReviewLightBox onClose={handleCloseModal} />
          )}
          {/* end sponsored section */}
          {/* start pagination */}
          <div className="pt-[24px] pb-[40px] md:pb-[64px]">
            <Paginations />
          </div>
          {/* end pagination */}
        </div>
      </section>

      {/* start about subject section */}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="h1 pt-[40px]">Explore more about law</div>
          <div className="flex flex-col gap-[40px] md:gap-[80px] py-[40px]">
            <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row">
              <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
                <Image
                  src="/assets/images/search-results/article1.png"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px]">
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
                  className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.61377L12 10.6138L7 15.6138"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row">
              <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
                <Image
                  src="/assets/images/search-results/article2.jpg"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px]">
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
                  className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.61377L12 10.6138L7 15.6138"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about subject section */}
      <Faqcomponents />
      <Subscribecomponents />
    </>
  );
};

export default SearchResult;

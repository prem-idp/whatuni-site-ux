"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import HeroComponent from "@/app/components/cards/hero-card/herocomponent";
import UcasComponent from "@/app/popups/ucascomponent";
import Homesearchcomponents from "@/app/components/home-search/Homesearchcomponents";

const HeroSliderComponent = () => {
  // course tab
  const [activeTab, setActiveTab] = useState("tab0");
  const searchTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  // course tab actions
  const [isUndergratuateClicked, setIsUndergratuateClicked] = useState(false);
  const [isSubjectClicked, setIsSubjectClicked] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isUniversityClicked, setIsUniversityClicked] = useState(false);
  const [isAdviceClicked, setIsAdviceClicked] = useState(false);
  const [isPgsUniversityClicked, setIsPgsUniversityClicked] = useState(false);
  const [isPgsSearched, setIsPgsSearched] = useState(false);

  const courseActions = (tabName: string) => {
    if (tabName == "UG") {
      setIsUndergratuateClicked(!isUndergratuateClicked);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Subject") {
      setIsSubjectClicked(!isSubjectClicked);
      setIsUndergratuateClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Location") {
      setIsLocationClicked(!isLocationClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "University") {
      setIsUniversityClicked(!isUniversityClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Advice") {
      setIsAdviceClicked(!isAdviceClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
    } else if (tabName == "PGSUniversity") {
      setIsPgsUniversityClicked(!isPgsUniversityClicked);
      setIsAdviceClicked(false);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
    }
  };

  // ucas calculate
  const [isUcasPopupOpen, setIsUcasPopupOpen] = useState(false);
  const ucasClick = () => {
    setIsUcasPopupOpen(true);
    const body = document.body;
    body.classList.add("overflow-y-hidden");
  };

  const ucasClose = () => {
    const body = document.body;
    setIsUcasPopupOpen(false);
    body.classList.remove("overflow-y-hidden");
  };

  // PGS SearchBox
  const search = ["Masters", "PhD", "PGCert", "PGDip", "MBA", "PGCE"];

  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      setIsPgsSearched(!isPgsSearched);
    }
  };

  const searchKey = [
    {
      name: "Law",
      course: "1124 courses",
    },
    {
      name: "Law / Legal Studies",
      course: "1124 courses",
    },
    {
      name: "Law (Specific Statutes)",
      course: "1124 courses ",
    },
    {
      name: "Asian Law",
      course: "1124 courses",
    },
    {
      name: "Civil Law",
      course: "1124 courses",
    },
  ];

  return (
    <>
      <section>
        <div className="bg-blue-200 px-[16px] md:px-[20px] xl2:px-0">
          <div className="max-w-container mx-auto">
            <Swiper
              slidesPerView={1}
              effect="fade"
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              modules={[Autoplay, EffectFade, Pagination]}
              className="mySwiper hero"
            >
              <SwiperSlide>
                <HeroComponent />
              </SwiperSlide>
              <SwiperSlide>
                <HeroComponent />
              </SwiperSlide>
              <SwiperSlide>
                <HeroComponent />
              </SwiperSlide>
              <SwiperSlide>
                <HeroComponent />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Homesearchcomponents
        isUndergratuateClicked={isUndergratuateClicked}
        isSubjectClicked={isSubjectClicked}
        isLocationClicked={isLocationClicked}
        isUniversityClicked={isUniversityClicked}
        isAdviceClicked={isAdviceClicked}
        isPgsSearched={isPgsSearched}
        isUcasPopupOpen={isUcasPopupOpen}
        ucasClose={ucasClose}
        activeTab={activeTab}
        searchTab0Click={()=>searchTabClick("tab0")}
        searchTab1Click={()=>searchTabClick("tab1")} 
        searchTab2Click={()=>searchTabClick("tab2")} 
        searchTab3Click={()=>searchTabClick("tab3")}
        courseActions1={() => courseActions("UG")}
        courseActions2={() => courseActions("Subject")}
        courseActions3={() => courseActions("Location")}
        courseActions4={() => courseActions("University")}
        courseActions5={() => courseActions("Advice")}
        courseActions6={() => courseActions("PGSUniversity")}
        />
      </section>
      {/* PGS SEARCH */}
      {/* <div className="max-w-container mx-auto">
        <div className="px-[16px] py-[16px] xl:p-0 flex flex-col gap-[16px]">
          <div className="bg-white rounded-[24px] p-[16px] relative z-3 border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:mt-[-28px] md:pl-[24px] md:p-[10px]">
            <div className="flex flex-col gap-[16px] small md:flex-row">
              <div className="relative grow">
                <input
                  onClick={() => courseActions("PGSUniversity")}
                  onKeyUp={handleKeyUp}
                  type="text"
                  className="w-full focus:outline-none pt-0 pb-[16px] text-black placeholder:text-gray-500 border-b border-grey-200 md:py-[10px] md:border-none"
                  aria-label="submenu"
                  placeholder="Subject, qualification or university"
                />
                {isPgsUniversityClicked && (
                  <div className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[53px] md:w-[345px]">
                    <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                      QUALIFICATION
                    </div>
                    <ul>
                      {search.map((item, index) => (
                        <li
                          key={index}
                          className="px-[16px] py-[10px] block hover:bg-blue-50 hover:underline cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isPgsSearched && (
                  <div className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px]  left-[-16px] top-[53px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]">
                    <Link href="">
                      <div className="px-[16px] py-[12px]">
                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                          KEYWORD SEARCH FOR
                        </p>
                        <p className="small text-primary-400">Law</p>
                      </div>
                    </Link>
                    <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                      QUALIFICATION
                    </div>
                    <ul>
                      {searchKey.map((item, index) => (
                        <li
                          key={index}
                          className="px-[16px] py-[10px] block hover:bg-blue-50 cursor-pointer"
                        >
                          <span className="text-grey900 underline">
                            {item.name}
                          </span>{" "}
                          <span className="text-grey-700">{item.course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-[4px] bg-gray-100 text-grey-500 font-semibold px-[12px] py-[8px] rounded-[4px]">
                <span>sdsd</span>
                <svg
                  className="cursor-pointer"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#5c655e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1f2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[114px]"
              >
                <Image
                  src="/assets/icons/search_icon.svg"
                  width="18"
                  height="18"
                  alt="Search icon"
                />
                Search
              </button>
            </div>
          </div>
          <p className="small text-negative-default">
            Please select university from dropdown
          </p>
        </div>
      </div> */}
      {/* <button
        type="button"
        className="inline-flex items-center px-[12px] py-[8px] font-semibold leading-6 rounded-[4px] text-white bg-primary-400 hover:bg-primary-500 transition ease-in-out duration-150 cursor-not-allowed"
      >
        <svg
          className="animate-spin mr-[8px] h-[18px] w-[18px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </button> */}
    </>
  );
};

export default HeroSliderComponent;

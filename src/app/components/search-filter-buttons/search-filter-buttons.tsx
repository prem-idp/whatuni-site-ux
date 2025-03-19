"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchFilterComponent from "../popups/searchfiltercomponent";

const SearchFilterButtons = ({ scholarshipURL }: { scholarshipURL: boolean }) => {
  // search list 
  const universityList = [
    { id: '1', keywords: 'University of Kent', courseNumber: '1124' },
    { id: '2', keywords: 'University of Aberdeen', courseNumber: '1124' },
    { id: '3', keywords: 'University of Birmingham', courseNumber: '1124' },
    { id: '4', keywords: 'Teeside University', courseNumber: '1124' },
    { id: '5', keywords: 'University of Plymouth', courseNumber: '1124' },
    { id: '6', keywords: 'University of Kent', courseNumber: '1124' },
    { id: '7', keywords: 'University of Aberdeen', courseNumber: '1124' },
    { id: '8', keywords: 'Teeside University', courseNumber: '1124' },
    { id: '9', keywords: 'University of Plymouth', courseNumber: '1124' },
    { id: '10', keywords: 'Teeside University', courseNumber: '1124' },
  ];
  // Scroll fixed bottom 
  const [scrolled, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 330) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
    
    
  }, []);

  // search filter
    const [isUniversityClicked, setIsUniversityClicked] = useState(false);
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(false);
  
  const courseActions = () => { 
    setIsUniversityClicked(!isUniversityClicked);     
  }
  
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
  return (
    <>
      <section className={`${scholarshipURL ? "py-[12px] items-center" : "py-[16px] sticky top-0"} ${scrolled ? "fixed w-full bottom-[0]" : ""} bg-grey-600 px-[12px] z-[5]`}>
        <div className="max-w-container mx-auto items-center flex gap-[8px] small">
          {scholarshipURL && !scrolled && (
                <div className="flex h-[44px] w-[200px] px-[4px] items-center bg-white rounded-[32px] border border-neutral300 hover:border-primary-500 shadow-custom-1 gap-x-[10px]">
                  <div className="flex relative">
                    <input
                      onClick={courseActions}
                      type="text"
                      className="form-control w-full focus:outline-none pl-[24px] bg-transparent small text-black placeholder:text-gray-500 border-none"
                      aria-label="submenu"
                      placeholder="University name"
                    />
                    {isUniversityClicked && (
                      <div className={`${scholarshipURL ? "w-[343px] z-[5]" : "w-full z-[1]"} flex flex-col absolute  bg-white shadow-custom-3 rounded-[8px] left-[0] top-[40px] w-[343px] overflow-hidden`}>
                    <div className="px-[16px] py-[12px] cursor-pointer">
                      <p className="text-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">KEYWORD SEARCH FOR</p>
                      <p className="small text-primary-400">'University'</p>
                    </div>   
                    <div className="flex px-[16px] py-[8px]">
                      <ul className="flex flex-wrap gap-[8px]">
                        <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-grey-100 text-grey-500 xs-small">University</li>
                      </ul>
                   </div>
                    <ul className="custom-scrollbar-2 max-h-[205px] overflow-y-scroll mr-[4px]">
                      {universityList.map((items: any) => (
                        <li className="flex gap-[4px] hover:bg-blue-50 px-[16px] py-[10px] small "><Link className="hover:underline text-black" key={items.id} href="#">{items.keywords}</Link> <span className="text-grey500">{ items.courseNumber} courses</span> </li>
                      ))
                      }
                          
                        </ul>
                      </div>
                    )}
                  </div>
                 
                    <button
                      type="submit"
                      className="btn btn-primary h-[36px] min-w-[36px] p-[8px]">
                      <Image src="/assets/icons/search_icon.svg" width="18" height="18" alt="Search icon" />                    
                    </button>
                 
                </div>
          )}
          {!scholarshipURL && (
            <button type="button" className="flex items-center justify-center gap-[8px] btn btn-primary grow w-fit px-[12px] lg:grow-0 lg:shrink-0">
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
          </button>
          ) }
          
          <button type="button"
            onClick={searchClick}
            className={`${scrolled && scholarshipURL ? "w-full": "lg:shrink-0"} flex items-center justify-center gap-[8px] btn grow w-fit px-[12px] bg-primary-100 hover:bg-primary-200 text-grey300 lg:grow-0` }
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
          </button>
          {!scholarshipURL && (
          <div className="hidden lg:flex items-center justify-center gap-[8px] lg:shrink-0">
          <button type="button" className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300">
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
          </button>
          <button type="button" className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300">
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
          </button>
          <button type="button" className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300">
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
          </button>
          <button type="button" className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300">
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
          </button>
          <button type="button" className="flex items-center gap-[8px] btn w-fit bg-grey-100 hover:bg-grey-200 text-grey300">
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
          </button>
        </div>
          )}
          
          <button type="button" className="flex items-center justify-center gap-[4px] cursor-pointer px-0 text-grey-50 hover:underline xl:px-[16px] lg:shrink-0">
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
          </button>
        </div>
      </section>
      <SearchFilterComponent scholarshipURL={ scholarshipURL }
        onClose={filterClose}
        isFilterOpen={isSearchFilterOpen}
      />
    </>
  );
};

export default SearchFilterButtons;

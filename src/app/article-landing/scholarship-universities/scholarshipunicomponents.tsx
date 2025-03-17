"use client";
import React from "react";
import { useState } from "react";

import Scholarshipunicard from "@/app/components/cards/scholarshipuniversities/scholarshipunicard";
import Scholarshipunislidercomponents from "@/app/components/slider/scholarshipunislidercomponents";

const Scholarshipunicomponents = ({
  scholarshipURL, scholarshipSR
}: {
  scholarshipURL: boolean;
  scholarshipSR: boolean;
}) => {
  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortClicked = () => {
    setIsSortClicked(!isSortClicked);
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
  return (
    <div className={`scholarship-container  ${scholarshipURL ? "" : "bg-white"}`}>
      <div className="max-w-container mx-auto">
        {scholarshipURL && (
          <>
            {/* start sorting */}
            <div className="ml-auto px-[16px] md:px-[20px] xl:px-[0] w-fit relative">
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
          </>
        )}

        {scholarshipURL ? (
          <>
            {/* No results  */}
            {!scholarshipSR && (
               <div className="flex px-[16px] md:px-[20px] xl:px-[0] flex-col pt-[24px] pb-[10px] text-black">
               <div className="h6">Sorry, we couldn’t find any scholarships that match your search criteria </div>
               <span className="font-semibold para">Try adjusting your filters or check out our popular scholarships below.</span>
             </div>
            ) }
           
            {/* No results END */}
            <div className="px-[0] py-[24px]">
              {scholarshipSR ? (
                 <div className="flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
                 <div className="text-small font-semibold text-black">Explore your scholarship options</div>
                 <p className="font-normal small">
                 Here are some scholarships that match your criteria. Scroll through to find the funding options that are right for you. Click on a scholarship to find out more. 
                 </p>
               </div>
              ) : (
                <div className="flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
                <div className="h2">Popular scholarships</div>
                <p className="font-normal small">
                  Here are some popular scholarships you may be interested in
                </p>
              </div>
              )}
           
             
              <div className="px-[16px] md:px-[20px] xl:px-[0] grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {Array.from({ length: 9 }).map((_, index) => (
                  <Scholarshipunicard scholarshipURL={true} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <div className="scholarship-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[26px] md:mb-[32px]">
                <div className="h2 font-bold">Heading</div>
                <p className="font-normal small">Subheading</p>
              </div>
              <div className="scholarship-course-container ">
                <div className="scholarship-inner-wrap">
                  <Scholarshipunislidercomponents scholarshipURL={false} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Scholarshipunicomponents;
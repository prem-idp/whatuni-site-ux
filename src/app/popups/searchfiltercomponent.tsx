import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../accordion/accordion";

const SearchFilterComponent = ({ onClose, isFilterOpen }: any) => {
  const [isUcasPopupOpen, setIsUcasPopupOpen] = useState(false);

  const filterHandleClose = () => {
    onClose();
    setIsUcasPopupOpen(!isUcasPopupOpen);
  };

  //study level
  const studyLevel = [
    "Undergraduate",
    "HND / HNC",
    "Foundation degree",
    "Access & Foundation",
    "Postgraduate",
  ];

  // subject area
  const subjectArea = [
    "Agriculture and Related subjects",
    "Architecture, Building, and Planning",
    "Biological and Life Sciences",
    "Business, Commerce and Management",
    "Creative Arts and Design",
    "Education and Teaching",
    "Engineering and Technology",
    "Food and Hospitality",
    "Forensic Sciences",
    "Humanities and the Arts",
    "Languages, Literature and Area Studies",
  ];

  // law
  const law = [
    "ALL Biological and Life Sciences",
    "Life sciences",
    "Biology",
    "Biomedical Sciences",
    "Biosciences",
    "Ecology and environmental biology",
  ];

  // Intake year
  const intakeYear = ["2024", "2025", "2026", "2027"];
  const intakeMonth = [
    "All months",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // subject area
  const universities = [
    "Universities A - C",
    "Universities D - H",
    "Universities I - M",
    "Universities N - P",
    "Universities Q - U",
    "Universities V - Z",
  ];
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(false);
  const searchClick = () => {
    setIsSearchFilterOpen(true);
    const body = document.body;
    body.classList.add("overflow-y-hidden");
  };
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectClicked = () => {
    setIsSubjectOpen(!isSubjectOpen);
  };

  // university list
  const universityList = [
    "Aberystwyth University ",
    "Acacia Learning",
    "Academy Of Contemporary Music",
    "Accrington And Rossendale College",
    "Activate Learning",
    "Aecc University College",
    "Al-Maktoum College Of Higher Education",
    "Amersham And Wycombe College",
    "Amity Business School London",
    "Anglia Ruskin University Aru",
    "Architectural Association School Of Architecture",
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10  ${
          isFilterOpen ? "animate-fadeIn block" : "animate-fadeOut hidden"
        }`}
      ></div>

      <div
        className={`bg-white fixed top-0 left-0 h-full w-[768px] z-10 transition-all duration-300 ease-in-out cursor-pointer ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-[16px_32px_0]">
          <svg
            onClick={filterHandleClose}
            className="ml-auto mr-[-10px] w-[44px] h-[44px] cursor-pointer"
            width="24"
            height="24"
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
          <h6 className="h2 mt-[-8px]">Filter</h6>
          <p className="m-[8px_0_24px]">
            Use these filters to narrow down your search options based on your
            preferred criteria 
          </p>
        </div>
        <div className="h-[calc(100%-210px)] overflow-y-auto custom-scrollbar-2">
          <Accordion title="Subject">
            {/* subject */}
            <div className="flex flex-col gap-[24px] pt-[24px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-para-lg font-semibold">Study Method</div>
                <div className="x-small font-semibold text-black uppercase">
                  Choose one or more
                </div>
                <div>
</div>
                <div className="flex flex-wrap gap-[8px]">
                  <div className="form-black flex relative">
                    <input 
                      defaultValue={"Online"}
                      type="checkbox"
                      className="rounded-[4px] outline-none absolute opacity-0"
                      id="Online"
                    />
                    <label htmlFor="Online" className="btn btn-black-outline">
                      Online
                    </label>
                  </div>
                  <div className="form-black flex relative">
                    <input
                      type="checkbox"
                      className=" rounded-[4px] outline-none absolute opacity-0"
                      id="In-person"
                    />
                    <label
                      htmlFor="In-person"
                      className="btn btn-black-outline"
                    >
                      In-person
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-para-lg font-semibold">Study mode</div>
                <div className="x-small font-semibold text-black uppercase">
                  Choose one or more
                </div>
                <div className="flex flex-row flex-wrap gap-[8px]">
                  <div className="form_check_black flex relative">
                    <input 
                      defaultValue={"Full time"}
                      type="checkbox"
                      className="form-checkbox rounded-[4px] outline-none absolute opacity-0"
                      id="Full time"
                    />
                    <label
                      htmlFor="Full time"
                      className="btn btn-black-outline"
                    >
                      Full time
                    </label>
                  </div>
                  <div className="form_check_black flex relative">
                    <input 
                      type="checkbox"
                      className="form-checkbox rounded-[4px] outline-none absolute opacity-0"
                      id="Sandwich"
                    />
                    <label htmlFor="Sandwich" className="btn btn-black-outline">
                      Sandwich
                    </label>
                  </div>
                  <div className="form_check_black flex relative">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded-[4px] outline-none absolute opacity-0"
                      id="Part time"
                    />
                    <label
                      htmlFor="Part time"
                      className="btn btn-black-outline"
                    >
                      Part time
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-para-lg font-semibold">Study level</div>
                <div className="x-small font-semibold text-black uppercase">
                  Choose one
                </div>
                <div className="flex flex-wrap gap-[8px]">
                  {studyLevel.map((item, index) => (
                    <div className="form_radio_black flex relative" key={index}>
                      <input
                        defaultValue={"Undergraduate"}
                        type="radio"
                        name="Undergraduate"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0"
                        id={item}
                      />
                      <label htmlFor={item} className="btn btn-black-outline">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <div className="text-para-lg font-semibold">Subject area</div>
                  <div className="x-small font-semibold text-black uppercase">
                    choose one subject area
                  </div>
                </div>
                <div className="bg-white rounded-[22px] p-[16px] border border-grey-300 hover:border-primary-500 md:p-[9px_12px]">
                  <div className="flex flex-col item-center gap-x-[10px] justify-between md:flex-row">
                    <Image
                      src="/assets/icons/search/search-black.svg"
                      width="20"
                      height="20"
                      alt="Search icon"
                    />
                    <div className="relative grow">
                      <input
                        type="text"
                        className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 border-b border-neutral200 md:border-none"
                        aria-label="enter keyword"
                        placeholder="Search subjects"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex flex-col gap-[12px]">
                    {subjectArea.map((item, index) => (
                      <div className="relative" key={index}>
                        <div
                          onClick={subjectClicked}
                          className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline"
                        >
                          {item}
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
                              fill="#4664DC"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                  {isSubjectOpen && (
                    <div
                      className={`bg-white absolute top-0 left-0 h-full z-10 transition-all duration-300 ease-in-out ${
                        isSubjectOpen ? "translate-x-0" : "-translate-x-full"
                      }`}
                    >
                      <div className="flex flex-col gap-[16px]">
                        <ul className="flex flex-wrap gap-[8px] uppercase">
                          <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                            Business LAw
                          </li>
                          <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                            Child Law
                          </li>
                          <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
                            Educational Law
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
                          <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[4px]  font-semibold x-small flex items-center gap-[2px]">
                            <Link href="">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 11L6 8L9 5"
                                  stroke="#3460DC"
                                  strokeWidth="1.13"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                        <div className="flex flex-col gap-[12px] max-h-[255px] overflow-y-auto custom-scrollbar-2">
                          <div onClick={subjectClicked} className="flex items-center gap-[4px] text-blue-400 font-semibold">
                            <svg
                              className="rotate-180"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
                                fill="#4664DC"
                              />
                            </svg>
                            Choose a different subject
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="small font-bold">Law</div>
                            <div className="flex flex-col gap-[12px]">
                              {law.map((item, index) => (
                                <div
                                  className="col form_check relative"
                                  key={index}
                                >
                                  <div className="flex items-start gap-[8px]">
                                    <div className="checkbox_card">
                                      <input
                                        type="checkbox"
                                        className="form-checkbox hidden"
                                        id={item}
                                      />
                                      <label
                                        htmlFor={item}
                                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                                      >
                                        <svg
                                          width="10"
                                          height="8"
                                          viewBox="0 0 10 8"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.666667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </label>
                                    </div>
                                    <label
                                      htmlFor={item}
                                      className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                    >
                                      {item}
                                    </label>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="Intake year">
            {/* intake */}
            <div className="flex flex-col gap-[8px] p-[8px_0_0]">
              <div className="x-small font-semibold text-black uppercase">
                Choose YEAR & MONTH
              </div>
              <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                {intakeYear.map((item, index) => (
                  <div className="form_radio_black flex relative" key={index}>
                    <input
                      defaultValue={"2024"}
                      type="radio"
                      name="2024"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0"
                      id={item}
                    />
                    <label htmlFor={item} className="btn btn-black-outline">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-[4px] gap-y-[8px]">
                {intakeMonth.map((item, index) => (
                  <div className="form_radio_black flex relative" key={index}>
                    <input
                      defaultValue={"All Months"}
                      type="radio"
                      name="All Months"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0"
                      id={item}
                    />
                    <label
                      htmlFor={item}
                      className="btn btn-black-outline min-w-[53px] py-[5px]"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
          <Accordion title="University">
            <div className="flex flex-col gap-[16px] pt-[24px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-para-lg font-semibold">
                  Find a university
                </div>
                <div className="x-small font-semibold text-black uppercase">
                  Choose one
                </div>
              </div>
              <div className="bg-white rounded-[22px] p-[16px] border border-grey-300 hover:border-primary-500 md:p-[9px_12px]">
                <div className="flex flex-col item-center gap-x-[10px] justify-between md:flex-row">
                  <Image
                    src="/assets/icons/search/search-black.svg"
                    width="20"
                    height="20"
                    alt="Search icon"
                  />
                  <div className="relative grow">
                    <input
                      type="text"
                      className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 border-b border-neutral200 md:border-none"
                      aria-label="enter keyword"
                      placeholder="Search universities"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                {universities.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="flex items-center gap-[4px] text-blue-400 small font-semibold cursor-pointer hover:underline">
                      {item}
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
                          fill="#4664DC"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[16px]">
                <ul className="flex flex-wrap gap-[8px] uppercase">
                  <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                    University of Aberdeen
                  </li>
                </ul>
                <div className="flex flex-col gap-[12px] max-h-[420px] overflow-y-auto custom-scrollbar-2">
                  <div className="flex items-center gap-[4px] text-blue-400 font-semibold">
                    <svg
                      className="rotate-180"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
                        fill="#4664DC"
                      />
                    </svg>
                    Choose a different uni
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <div className="small font-bold">A - C</div>
                    <div className="flex flex-col gap-[12px]">
                      {universityList.map((item, index) => (
                        <div className="col form_check relative" key={index}>
                          <div className="flex items-start gap-[8px]">
                            <div className="checkbox_card">
                              <input
                                type="checkbox"
                                className="form-checkbox hidden"
                                id={item}
                              />
                              <label
                                htmlFor={item}
                                className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                              >
                                <svg
                                  width="10"
                                  height="8"
                                  viewBox="0 0 10 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.666667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </div>
                            <label
                              htmlFor={item}
                              className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                            >
                              {item}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Location">
            {/* location */}
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[8px]">
                <div className="font-semibold">Distance from home</div>
              </div>
            </div>
          </Accordion>
          <Accordion title="University group"></Accordion>
        </div>

        <div className="flex items-center justify-between gap-[8px] min-h-[44px]">
          <Link
            href="#"
            aria-label="reset filters"
            className="text-primary-400 font-semibold py-[10px] px-[16px] grow text-center hover:underline"
          >
            Reset
          </Link>
          <button className="bg-primary-400 text-white rounded-[24px] py-[10px] px-[16px] min-w-[200px] font-semibold hover:bg-primary-500">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilterComponent;

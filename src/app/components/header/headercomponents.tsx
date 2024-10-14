"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Megamenucomponents from "../topnav/megamenucomponents";

const Header = () => {
  // Toggle Menu
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // search click
  const [isSearchClicked, setIsSearchClicked] = useState(true);
  const searchClick = () => {
    setIsSearchClicked(!isSearchClicked);
    setIsUserClicked(false);
    setIsShortlistClicked(false);
  };

  // user click
  const [isUserClicked, setIsUserClicked] = useState(false);
  const userClick = () => {
    setIsUserClicked(!isUserClicked);
    setIsSearchClicked(false);
    setIsShortlistClicked(false);
  };

  // shortlist click
  const [isShortlistClicked, setIsShortlistClicked] = useState(false);
  const shortlistClick = () => {
    setIsShortlistClicked(!isShortlistClicked);
    setIsSearchClicked(false);
    setIsUserClicked(false);
  };

  // course tab
  const [activeTab, setActiveTab] = useState("tab1");
  const searchTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  // undergratuate click
  const [isUndergratuateClicked, setIsUndergratuateClicked] = useState(false);
  const undergratuateClick = () => {
    setIsUndergratuateClicked(!isUndergratuateClicked);
    setIsSubjectClicked(false);
    setIsLocationClicked(false);
  };

  // subject click
  const [isSubjectClicked, setIsSubjectClicked] = useState(false);
  const subjectClick = () => {
    setIsSubjectClicked(!isSubjectClicked);
    setIsUndergratuateClicked(false);
    setIsLocationClicked(false);
  };

  // location click
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const locationClick = () => {
    setIsLocationClicked(!isLocationClicked);
    setIsUndergratuateClicked(false);
    setIsSubjectClicked(false);
  };

  return (
    <>
      <header className="bg-white px-[16px] py-[4px] lg:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto flex items-center ">
          <div className="order-2 md:grow md:basis-[100%] lg:order-1 lg:grow-0 lg:basis-[70px]">
            <Link href="#">
              <Image
                className="md:mx-auto lg:mx-0"
                src="/assets/images/whatuni-logo.svg"
                alt="Whatuni Logo"
                priority
                width={70}
                height={78}
              />
            </Link>
          </div>
          <div className="order-1 md:grow md:basis-[100%] lg:order-2 lg:grow-1 lg:basis-0">
            <button
              className="mr-[16px] block lg:hidden"
              onClick={handleToggle}
              aria-label="Mobile Toggle"
            >
              {isOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#333F48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#333F48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <Megamenucomponents />
          </div>
          <div className="flex items-center justify-end gap-[10px] order-3 basis-[100%] md:grow lg:grow-0 lg:basis-0">
            <Link
              onClick={searchClick}
              href="#"
              aria-label="Search"
              className="border border-gray-500 rounded-[34px] p-[14px] w-[48px] h-[48px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                  stroke="#5C656E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {/* course tab section */}
            {isSearchClicked && (
              <div className="bg-white absolute top-[94px] left-0 right-0 z-10">
                <div className="max-w-container w-full mx-auto flex flex-col px-[16px] py-[8px] cursor-pointer lg:py-[16px]">
                  <div
                    className="flex justify-end mr-[-8px]"
                    onClick={searchClick}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 29L29 3M3 3L29 29"
                        stroke="#333F48"
                        strokeWidth="2.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-[16px] mt-[16px] lg:mt-[-16px]">
                    <ul className="flex items-center gap-[4px]">
                      <li role="button">
                        <Link
                          href="#"
                          className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                            activeTab === "tab1"
                              ? "bg-black text-white"
                              : "bg-white text-black border border-neutral-500"
                          }`}
                          onClick={() => searchTabClick("tab1")}
                        >
                          Courses
                        </Link>
                      </li>
                      <li role="button">
                        <Link
                          href="#"
                          className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                            activeTab === "tab2"
                              ? "bg-black text-white"
                              : "bg-white text-black border border-neutral-500"
                          }`}
                          onClick={() => searchTabClick("tab2")}
                        >
                          Universities
                        </Link>
                      </li>
                      <li role="button">
                        <Link
                          href="#"
                          className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                            activeTab === "tab3"
                              ? "bg-black text-white"
                              : "bg-white text-black border border-neutral-500"
                          }`}
                          onClick={() => searchTabClick("tab3")}
                        >
                          Advice
                        </Link>
                      </li>
                    </ul>
                    <div className="w-full lg:w-[804px]">
                      {activeTab === "tab1" && (
                        <div className="flex flex-col gap-[24px]">
                          <div className="bg-white rounded-[32px] px-[16px] pt-[21px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:px-[10px] lg:pt-0">
                            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                              <div className="w-full relative mb-[14px] md:w-fit md:mr-[16px] md:mb-[0] ">
                                <button
                                  onClick={undergratuateClick}
                                  className="flex items-center justify-between gap-[4px] w-full small text-black pl-[0px] md:pl-[20px] md:pr-[17px]"
                                  type="button"
                                >
                                  Undergraduate
                                  <Image
                                    src="/assets/icons/arrow_down_black.svg"
                                    width="20"
                                    height="20"
                                    alt="Search icon"
                                  />
                                </button>
                                {isUndergratuateClicked && (
                                  <div className="w-full z-[1] bg-slate-400 shadow-custom-3 rounded-[4px] absolute left-[-15px] top-[40px] overflow-hidden lg:w-[230px] lg:left-[-8px]">
                                    <ul>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                        >
                                          Undergraduate
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          HND / HNC
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Foundation degree
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Access & foundation
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Postgraduate
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div
                                className="w-full relative md:w-fit"
                                onClick={subjectClick}
                              >
                                <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-200">
                                  <input
                                    type="text"
                                    className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                                    aria-label=""
                                    placeholder="Enter subject"
                                  />
                                </div>
                                {isSubjectClicked && (
                                  <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-[8px] top-[50px] max-h-[311px] overflow-y-scroll custom-vertical-scrollbar overflow-hidden">
                                    <Link href="">
                                      <div className="px-[16px] py-[12px]">
                                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                                          KEYWORD SEARCH FOR
                                        </p>
                                        <p className="small text-primary-400">
                                          Law
                                        </p>
                                      </div>
                                    </Link>
                                    <ul>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                        >
                                          Law
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Law / Legal Studies
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Law (Specific Statutes)
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Asian Law
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Civil Law
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Family Law
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div
                                className="w-full relative md:w-fit"
                                onClick={locationClick}
                              >
                                <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-200">
                                  <input
                                    type="text"
                                    className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                                    aria-label=""
                                    placeholder="Location (optional)"
                                  />
                                </div>
                                {isLocationClicked && (
                                  <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-[18px] top-[50px] overflow-hidden">
                                    <ul>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                        >
                                          Undergraduate
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          HND / HNC
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Foundation degree
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Access & foundation
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                          href="#"
                                        >
                                          Postgraduate
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="search-btn pt-[24px] md:pt-[0]">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[138px]"
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
                          </div>
                          <div className="flex items-center justify-center gap-[4px] small">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.66678 6.11111H12.3334M12.3334 13.8889V11.5556M10.0001 13.8889H10.0079M7.66678 13.8889H7.67456M7.66678 11.5556H7.67456M10.0001 11.5556H10.0079M12.3334 9.22222H12.3412M10.0001 9.22222H10.0079M7.66678 9.22222H7.67456M6.11122 17H13.889C14.7481 17 15.4446 16.3036 15.4446 15.4444V4.55556C15.4446 3.69645 14.7481 3 13.889 3H6.11122C5.25211 3 4.55566 3.69645 4.55566 4.55556V15.4444C4.55566 16.3036 5.25211 17 6.11122 17Z"
                                stroke="#0F172A"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="ml-[4px] mr-[8px]">
                              Don’t know your UCAS points?
                            </div>
                            <div className="text-blue-500 font-semibold">
                              Calculate them
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "tab2" && (
                        <div className="flex flex-col gap-[24px]">
                          <div className="bg-white rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px] hover:border-secondary-500 shadow-custom-1">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col justify-between w-full lg:flex-row relative">
                                <div className="flex items-center">
                                  <input
                                    type="text"
                                    className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]"
                                    aria-label=""
                                    placeholder="University name"
                                  />
                                </div>
                                <div className="search-btn pt-[24px] md:pt-[0]">
                                  <button
                                    type="submit"
                                    className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
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
                                <div className="dropdown-menu flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] left-[-8px] top-[53px] overflow-hidden hidden">
                                  <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                                    UNIVERSITIES
                                  </div>
                                  <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Law
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Manchester
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Liverpool
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Barnsley
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Burnley
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Bristol, University of the West of
                                        England
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        INTO Manchester (The University of
                                        Manchester)
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Courtauld Institute of Art, University
                                        of London
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Cardiff Metropolitan University
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Institute of Advanced Legal Studies,
                                        School of Advanced Study, University of
                                        London
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-[4px] text-blue-500 small font-semibold">
                            Browse unis A-Z
                            <Image
                              src="/assets/icons/arrow-right.svg"
                              width={20}
                              height={20}
                              alt="Right Arrow"
                            />
                          </div>
                        </div>
                      )}
                      {activeTab === "tab3" && (
                        <div className="flex flex-col gap-[24px]">
                          <div className="bg-white rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px] hover:border-secondary-500 shadow-custom-1">
                            <div className="flex items-center justify-between">
                              <div className="flex justify-between w-[100%] relative">
                                <div className="flex items-center w-[calc(100%-44px)]">
                                  <input
                                    type="text"
                                    className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]"
                                    aria-label=""
                                    placeholder="Enter keyword"
                                  />
                                </div>
                                <div className="search-btn pt-[24px] md:pt-[0]">
                                  <button
                                    type="submit"
                                    className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
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
                                <div className="dropdown-menu flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] left-[-8px] top-[53px] overflow-hidden hidden">
                                  <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                                    UNIVERSITIES
                                  </div>
                                  <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Law
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Manchester
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Liverpool
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Barnsley
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        University of Burnley
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Bristol, University of the West of
                                        England
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        INTO Manchester (The University of
                                        Manchester)
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Courtauld Institute of Art, University
                                        of London
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Cardiff Metropolitan University
                                      </Link>
                                    </li>
                                    <li className="px-[16px] py-[10px]">
                                      <Link
                                        className="dropdown-item w-fit block small text-grey-300 hover:underline"
                                        href="#"
                                      >
                                        Institute of Advanced Legal Studies,
                                        School of Advanced Study, University of
                                        London
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-[4px] text-blue-500 small font-semibold">
                            Browse advice
                            <Image
                              src="/assets/icons/arrow-right.svg"
                              width={20}
                              height={20}
                              alt="Right Arrow"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Link
              onClick={userClick}
              href="#"
              aria-label="User"
              className="border border-gray-500 rounded-[34px] p-[14px] w-[48px] h-[48px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 5.83333C13.3332 7.67428 11.8408 9.16667 9.99984 9.16667C8.15889 9.16667 6.6665 7.67428 6.6665 5.83333C6.6665 3.99238 8.15889 2.5 9.99984 2.5C11.8408 2.5 13.3332 3.99238 13.3332 5.83333Z"
                  stroke="#5C656E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99984 11.6667C6.77818 11.6667 4.1665 14.2783 4.1665 17.5H15.8332C15.8332 14.2783 13.2215 11.6667 9.99984 11.6667Z"
                  stroke="#5C656E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link onClick={shortlistClick} href="#" className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                  fill="#00BBFD"
                  stroke="#3460DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inline-flex items-center justify-center w-[16px] h-[16px] rounded-[8px] top-[10px] left-[13px] bg-success-400 text-black font-inter font-semibold text-xs-small px-[5px] py-[2px]">
                2
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* user section */}
      {isUserClicked && (
        <div className="min-w-full flex justify-between p-[16px] mx-[16px] z-10 bg-white absolute rounded-[4px] lg:min-w-[339px] top-[94px] lg:right-[85px]">
          <ul className="small">
            <li className="mb-[16px] hover:underline">
              <Link href="#">My profile</Link>
            </li>
            <li className="mb-[16px] hover:underline">
              <Link href="#">Favourites</Link>
            </li>
            <li className="mb-[16px] hover:underline">
              <Link href="#">Profile item</Link>
            </li>
            <li className="text-primary-400 hover:underline">
              <Link href="#">Log out</Link>
            </li>
          </ul>
          <Link
            href="#"
            className="font-semibold x-small text-success-400 uppercase tracking-[1px]"
          >
            Complete your profile
          </Link>
        </div>
      )}

      {/* shortlist section */}
      {isShortlistClicked && (
        <div className="flex justify-between p-[16px] absolute top-[94px] right-0 z-10 bg-white min-w-[339px] rounded-[4px]">
          <ul className="small">
            <li className="mb-[16px] hover:underline">
              <Link href="#">
                Favourites
                <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                  5
                </span>
              </Link>
            </li>
            <li className="mb-[16px] hover:underline">
              <Link href="#">
                Courses
                <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                  2
                </span>
              </Link>
            </li>
            <li className="mb-[16px] hover:underline">
              <Link href="#">
                Universities
                <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                  3
                </span>
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="font-semibold small bg-primary-400 text-white px-[16px] py-[8px] rounded-[18px] self-start"
          >
            Compare
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;

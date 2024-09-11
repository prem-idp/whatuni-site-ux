"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  // Toggle Menu
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="px-[16px] py-[4px] lg-px[0] lg:py-[12px] border-b border-neutral-900">
          <div className="max-w-container mx-auto flex justify-between items-center">
            <div className="block lg:hidden">
              <button onClick={handleToggle} id="" aria-label="Mobile Toggle">
                {isOpen ? (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 29L29 3M3 3L29 29"
                      stroke="#0F172A"
                      strokeWidth="2.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M3 6.25H29M3 16H29M3 25.75H29"
                      stroke="#0F172A"
                      strokeWidth="2.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="shrink">
              <a href="#">
                <Image
                  src="/assets/images/whatuni-logo.svg"
                  alt="Whatuni Logo"
                  priority
                  width={70}
                  height={78}
                />
              </a>
            </div>
            <div className="">
              <div className="hidden md:block">
                <div className="flex items-center justify-end gap-[16px]">
                  <a href="#" className="btn-secondary-outline">
                    Signin
                  </a>
                  <a href="#" className="relative">
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
                    <div className="absolute inline-flex items-center justify-center w-[16px] h-[16px] rounded-[20px] top-[10px] left-[13px] bg-success-400 text-neutral-900 font-semibold text-xs-small px-[5px] py-[2px]">
                      2
                    </div>
                  </a>
                </div>
              </div>
              <div className="block md:hidden">
                <div className="flex items-center gap-[8px]">
                  <a
                    href="#"
                    aria-label="Search"
                    className="bg-transparent border-secondary-500 text-secondary-500 border rounded-[22px] p-[12px]"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 17.8887L12.5 12.8887M14.1667 8.72201C14.1667 11.9437 11.555 14.5553 8.33333 14.5553C5.11167 14.5553 2.5 11.9437 2.5 8.72201C2.5 5.50034 5.11167 2.88867 8.33333 2.88867C11.555 2.88867 14.1667 5.50034 14.1667 8.72201Z"
                        stroke="#3460DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="User"
                    className="relative bg-transparent border-secondary-500 text-secondary-500 border rounded-[22px] p-[12px]"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 6.22201C13.3333 8.06295 11.8409 9.55534 9.99996 9.55534C8.15901 9.55534 6.66663 8.06295 6.66663 6.22201C6.66663 4.38106 8.15901 2.88867 9.99996 2.88867C11.8409 2.88867 13.3333 4.38106 13.3333 6.22201Z"
                        stroke="#3460DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99996 12.0553C6.7783 12.0553 4.16663 14.667 4.16663 17.8887H15.8333C15.8333 14.667 13.2216 12.0553 9.99996 12.0553Z"
                        stroke="#3460DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="absolute inline-flex items-center justify-center w-[16px] h-[16px] rounded-[8px] top-[30px] left-[28px] bg-success-400 text-neutral-900 font-semibold text-xs-small px-[5px] py-[2px]">
                      2
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="pl-[16px] lg-px[0] hidden md:block">
          <ul className="flex flex-col font-semibold lg:flex-row lg:justify-center lg:gap-[24px]">
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Find a course
                {/* <ul className="absolute bg-white rounded-[4px] top-[47px] group-hover:block w-[246px] md:hidden ">
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 1</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 2</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 3</a>
                    </li>
                  </ul> */}
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Find a uni
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Careers
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Prospectuses
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Open days
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Rankings
              </a>
            </li>
            <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
              <a
                href="#"
                className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
              >
                Advice
              </a>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <nav className="pl-[16px] lg-px[0] md:hidden">
            <ul className="flex flex-col font-semibold lg:flex-row lg:justify-center lg:gap-[24px]">
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Find a course
                  {/* <ul className="absolute bg-white rounded-[4px] top-[47px] group-hover:block w-[246px] md:hidden ">
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 1</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 2</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 3</a>
                    </li>
                  </ul> */}
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Find a uni
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Careers
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Prospectuses
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Open days
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Rankings
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Advice
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className={`hidden ${isVisible ? "block" : ""}`}>
          <nav className="pl-[16px] lg-px[0] hidden md:block">
            <ul className="flex flex-col font-semibold lg:flex-row lg:justify-center lg:gap-[24px]">
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Find a course
                  {/* <ul className="absolute bg-white rounded-[4px] top-[47px] group-hover:block w-[246px] md:hidden ">
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 1</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 2</a>
                    </li>
                    <li className="py-[12px] px-[16px] hover:bg-secondary-50">
                      <a href="">Test 3</a>
                    </li>
                  </ul> */}
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Find a uni
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Careers
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Prospectuses
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Open days
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Rankings
                </a>
              </li>
              <li className="relative p-[16px] border-b border-neutral-200 group lg: py-[10px] lg:border-b-4 lg:border-transparent lg:leading-[23px]">
                <a
                  href="#"
                  className="lg:py-[10px] lg:hover:border-b-4 lg:hover:border-primary-500"
                >
                  Advice
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

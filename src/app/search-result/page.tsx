"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumbs from "../components/breadcrumb/breadcrumbcomponents";

const SearchResult = () => {
  return (
    <>
      <section className="pt-[16px]">
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

      <section className="bg-grey-600 py-[16px]">
        <div className="max-w-container mx-auto flex gap-[8px]">
          <div className="flex items-center gap-[8px] btn btn-primary w-fit">
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
          <div className="flex items-center gap-[8px] btn w-fit bg-blue-100 text-grey300">
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
          <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
            Study level
          </div>
          <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
            Subject (1)
          </div>
          <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
            Year
          </div>
          <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
            University
          </div>
          <div className="flex items-center gap-[8px] btn w-fit bg-white text-grey300">
            Location (1)
          </div>
          <div className="flex items-center gap-[8px] btn  text-grey-50">
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
      <section className="bg-white py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex flex-wrap gap-[8px]">
            <li className="bg-secondary-50 text-blue-500 rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              2023
            </li>
            <li className="bg-secondary-50 text-blue-500 rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              Undergraduate
            </li>
            <li className="bg-secondary-50 text-blue-500 rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              Sn3 TR7
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white pt-[16px]">
        <div className="max-w-container mx-auto">
          <div className="bg-blue-100 p-[16px] rounded-[8px] flex justify-between gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <div className="bg-blue-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center">
                <Image
                  src="/assets/icons/search/calender-blue.svg"
                  alt="Housing"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-para-lg font-semibold font-farro">
                  Add your grades
                </div>
                <div className="small">
                  Add your UCAS points to help tailor your search to find the
                  right uni for you
                </div>
                
                
              </div>
            </div>
            <div className="flex items-center self-center gap-[8px] btn btn-primary w-fit">
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
          <div className="flex flex-col gap-[24px]">
            <div className="bg-grey-600 rounded-[8px] p-[24px] min-[268px] flex items-center gap-[24px]">
              <div className="flex flex-col gap-[8px] w-full">
                <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white">
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
                  Study your creative Degree at Arts University Plymouth...
                  Study your creative Degree at Arts University Plymouth
                  Plymouth
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
              <div className="w-[392px] shrink-0 flex items-center justify-center rounded-[8px] overflow-hidden relative">
                <video className="w-full hidden" src="" controls></video>
                <div className="w-full relative rounded-[8px] overflow-hidden">
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

            <div className="flex items-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResult;

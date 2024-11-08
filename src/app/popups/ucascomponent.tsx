import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UcasComponent = ({onClose}) => {
  const levels = ["A*", "A", "B", "C", "D", "E"];
  const grades = [
    "A*A*",
    "A*A",
    "AA",
    "AB",
    "BB",
    "BC",
    "CC",
    "CD",
    "DD",
    "DE",
    "EE",
  ];

  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState(true);

  const ucasHandleClose =() => {
    onClose();
    SetIsUcasPopupOpen(!isUcasPopupOpen);
  }

  useEffect(() => {
    const body = document.body;
    if (isUcasPopupOpen) {
      body.classList.add("overflow-y-hidden");
    } 
  }, [isUcasPopupOpen]);


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // UCAS dropdown actions
  const [selectedLevelName, setselectedLevelName] = useState("ALEVEL");
  const [selectedLevelDesc, setselectedLevelDesc] = useState("A Level");
  const ucasLevelSelected = (actionName: string, actionDesc: string) => {
    setIsDropdownOpen(false);
    setselectedLevelName(actionName);
    setselectedLevelDesc(actionDesc);
  };

  return (
    <>
      {isUcasPopupOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10"></div>
          <div className="bg-white fixed top-0 right-0 h-full w-[375px] z-10">
            <div className="p-[16px]">
              <svg
                onClick={ucasHandleClose}
                className="ml-auto cursor-pointer"
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
              <h6 className="text-heading5 font-bold">
                Calculate your ucas points
              </h6>
            </div>
            <div className="flex flex-col gap-[32px] h-[310px] overflow-y-auto custom-scrollbar-2">
              <div className="flex flex-col gap-[16px] px-[16px]">
                <div className="relative">
                  <div
                    onClick={toggleDropdown}
                    className="border border-grey-600 rounded-[24px] flex items-center justify-center gap-[4px] h-[36px] font-semibold small cursor-pointer"
                  >
                    <span>{selectedLevelDesc}</span>
                    <Image
                      src="/assets/icons/ucas-down-arrow.svg"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-[46px] left-0 max-h-[343px] overflow-y-auto w-full bg-white border border-neutral-300 rounded-[8px] small shadow-custom-9 custom-scrollbar-2">
                      <ul>
                        <li className="py-[10px] px-[16px] font-semibold x-small uppercase bg-neutral50 text-grey500 tracking-[1px]">
                          A Levels
                        </li>
                        <li
                          onClick={() => ucasLevelSelected("ALEVEL", "A Level")}
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          A Level
                        </li>
                        <li
                          onClick={() =>
                            ucasLevelSelected("ASLEVEL", "AS Level")
                          }
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          AS Level
                        </li>
                        <li
                          onClick={() =>
                            ucasLevelSelected(
                              "ALEVELDOUBLE",
                              "A Level Double Award"
                            )
                          }
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          A Level Double Award
                        </li>
                        <li
                          onClick={() =>
                            ucasLevelSelected(
                              "ASLEVELDOUBLE",
                              "AS Level Double Award"
                            )
                          }
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          AS Level Double Award
                        </li>
                        <li className="py-[10px] px-[16px] font-semibold x-small uppercase bg-neutral50 text-grey500 tracking-[1px]">
                          International baccalaureate (DiplomA)
                        </li>
                        <li
                          onClick={() =>
                            ucasLevelSelected("IB", "IB (Diploma) Higher level")
                          }
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          IB (Diploma) Higher level
                        </li>
                        <li
                          onClick={() =>
                            ucasLevelSelected("IB", "IB (Diploma) Higher level")
                          }
                          className="py-[10px] px-[16px] cursor-pointer"
                        >
                          IB (Diploma) Standard Level
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {selectedLevelName == "ALEVEL" && (
                  <div className="flex items-center justify-between gap-[32px] flex-wrap">
                    {levels.map((item, index) => (
                      <div className="inline-flex items-center gap-[4px]">
                        <label
                          htmlFor="grade"
                          className="min-w-[24px] font-semibold block text-neutral-900"
                        >
                          {item}
                        </label>
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 29.2048 10.7954 36.6667 20.0002 36.6667Z"
                              stroke="#ADB2B6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.3335 20H26.6668"
                              stroke="#ADB2B6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <span className="text-neutral-900 min-w-[24px] block text-center">
                          1
                        </span>
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 29.2048 10.7954 36.6667 20.0002 36.6667Z"
                              stroke="#4664DC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 13.3334V26.6667"
                              stroke="#4664DC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.3335 20H26.6668"
                              stroke="#4664DC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {selectedLevelName == "ASLEVEL" && (
                  <div className="flex items-center gap-[8px] flex-wrap cursor-pointer">
                    {grades.map((item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="min-w-[66px] text-center small bg-white border border-primary-400 text-primary-400 py-[8px] px-[16px] rounded-[20px] block font-semibold hover:bg-primary-400 hover:text-white"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="border-b border-grey-200"></div>
                <Link
                  href="#"
                  className="flex items-center gap-[4px] text-primary-400 font-semibold "
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V15M14.5 8.5L1.5 8.5"
                      stroke="#4664DC"
                      stroke-width="1.335"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Add a qualification
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] p-[16px] fixed w-[375px] bottom-0 shadow-custom-10 bg-white">
              <div className="flex items-center justify-center gap-[8px] min-h-[42px]">
                <p className="small text-neutral-900 small">Your UCAS points</p>
                <div className="flex items-center min-w-[36px] py-[6px] px-[14px] rounded-[4px] bg-grey-100 text-neutral-600 font-semibold hover:bg-positive-default hover:text-white">
                  150
                </div>
              </div>
              <div className="flex items-center justify-between gap-[8px] min-h-[44px]">
                <Link
                  href="#"
                  aria-label="reset filters"
                  className="text-primary-400 font-semibold py-[10px] px-[16px] grow text-center hover:underline"
                >
                  Reset
                </Link>
                <button className="bg-grey-300 text-white rounded-[24px] py-[10px] px-[16px] min-w-[200px] font-semibold hover:bg-primary-400">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UcasComponent;

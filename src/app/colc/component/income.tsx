"use client";
import React, { useState } from "react";
import Image from "next/image";

const Income = () => {
  //accodion and questions
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //dropdowns
  const [isCostDropdownOpened, SetIsCostDropdownOpened] = useState(false);
  const CostDropdownClicked = (dropdownType: string) => {
    if (dropdownType == "COST") {
      SetIsCostDropdownOpened(!isCostDropdownOpened);
    }
  };
  const dropdown = ["Monthly", "Weekly", "Yearly"];

  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="border-b-[2px] border-grey-200"></div>
        <div className="flex items-center gap-[12px]">
          <div className="bg-tertiary-200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
            <Image
              src="/assets/icons/colc/income.svg"
              alt="Travel"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-heading5 md:text-heading4">Your income</h2>
        </div>
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                What income will you get?
                <span className="text-small font-inter font-normal text-grey500">
                  (optional)
                </span>
                <span className="text-negative-default">*</span>
              </h3>
              <div className="grid grid-cols-1 items-center gap-[16px]">
                <div className="grid grid-cols-1 items-center gap-[16px] md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="loan"
                      className="block font-semibold mb-[8px]"
                    >
                      Student loan
                    </label>
                    <div className="flex items-center gap-[8px]">
                      <input
                        type="text"
                        id="loan"
                        className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-full"
                        placeholder="£0"
                      />
                      <div className="relative">
                        <button
                          onClick={() => CostDropdownClicked("COST")}
                          className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-[111px] font-semibold"
                          type="button"
                        >
                          Monthly
                          <Image
                            src="/assets/icons/arrow_down_black.svg"
                            width="20"
                            height="20"
                            alt="Down Arrow"
                          />
                        </button>
                        {isCostDropdownOpened && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute top-[46px] overflow-hidden">
                            <ul>
                              {dropdown.map((item, index) => (
                                <li
                                  key={index}
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="Scholarship"
                      className="block font-semibold mb-[8px]"
                    >
                      Scholarship
                    </label>
                    <div className="flex items-center gap-[8px]">
                      <input
                        type="text"
                        id="Scholarship"
                        className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-full"
                        placeholder="£0"
                      />
                      <div className="relative">
                        <button
                          onClick={() => CostDropdownClicked("COST")}
                          className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-[111px] font-semibold"
                          type="button"
                        >
                          Monthly
                          <Image
                            src="/assets/icons/arrow_down_black.svg"
                            width="20"
                            height="20"
                            alt="Down Arrow"
                          />
                        </button>
                        {isCostDropdownOpened && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute top-[46px] overflow-hidden">
                            <ul>
                              {dropdown.map((item, index) => (
                                <li
                                  key={index}
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 items-center gap-[16px] md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="parttime"
                      className="block font-semibold mb-[8px]"
                    >
                      Part-time work
                    </label>
                    <div className="flex items-center gap-[8px]">
                      <input
                        type="text"
                        id="parttime"
                        className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-full"
                        placeholder="£0"
                      />
                      <div className="relative">
                        <button
                          onClick={() => CostDropdownClicked("COST")}
                          className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-[111px] font-semibold"
                          type="button"
                        >
                          Monthly
                          <Image
                            src="/assets/icons/arrow_down_black.svg"
                            width="20"
                            height="20"
                            alt="Down Arrow"
                          />
                        </button>
                        {isCostDropdownOpened && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute top-[46px] overflow-hidden">
                            <ul>
                              {dropdown.map((item, index) => (
                                <li
                                  key={index}
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="sources"
                      className="block font-semibold mb-[8px]"
                    >
                      Other sources
                    </label>
                    <div className="flex items-center gap-[8px]">
                      <input
                        type="text"
                        id="sources"
                        className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-full"
                        placeholder="£0"
                      />
                      <div className="relative">
                        <button
                          onClick={() => CostDropdownClicked("COST")}
                          className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-[111px] font-semibold"
                          type="button"
                        >
                          Monthly
                          <Image
                            src="/assets/icons/arrow_down_black.svg"
                            width="20"
                            height="20"
                            alt="Down Arrow"
                          />
                        </button>
                        {isCostDropdownOpened && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute top-[46px] overflow-hidden">
                            <ul>
                              {dropdown.map((item, index) => (
                                <li
                                  key={index}
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-grey-50 border border-grey-300 rounded-[4px] p-[16px] flex flex-col text-neutral900">
            <div className="flex items-center gap-[12px]">
              <input aria-label="checkbox"
                type="checkbox"
                className="accent-primary-400 text-white w-[16px] h-[16px]"
              />
              <label className="cursor-pointer font-medium">
                I’m not sure of my income
              </label>
            </div>
          </div>
          <div className="border-l-[2px] border-primary-400 bg-grey-50 px-[16px] py-[10px]">
            <button
              className="flex items-center justify-between w-full font-semibold small"
              onClick={toggle}
            >
              How to answer this question
              <svg
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 14.5L12 8.5L18 14.5"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-[4px] mt-[10px] x-small">
                <div className="font-semibold">Mobile phone</div>
                <div>
                  Enter the cost of your monthly contract including any add ons.
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Income;

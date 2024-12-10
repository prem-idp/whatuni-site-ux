"use client";
import React, { useState } from "react";
import Image from "next/image";

const Clothing = () => {
  const clothing = [
    "£ - Budget clothing",
    "££ - Mid range clothing",
    "£££ - Designer labels",
  ];
  const clothMonthly = [
    "No items",
    "1 item",
    "2 item",
    "3 item",
    "4 item",
    "5 item",
  ];

  //checkbox
  const [isChecked, setIsChecked] = useState(true);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  //accodion and questions
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const clothingqus = [
    {
      list: "£ - charity shop/budget clothing store like Primark or Penneys",
    },
    {
      list: "££ - Mid range clothing store like Next or Zara",
    },
    {
      list: "£££ - High end stores or Designer labels like Selfridges or Harrods).",
    },
  ];

  //dropdowns
  const [isCostDropdownOpened, SetIsCostDropdownOpened] = useState(false);
  const CostDropdownClicked = (dropdownType: string) => {
    if (dropdownType == "COST") {
      SetIsCostDropdownOpened(!isCostDropdownOpened);
    }
  };
  const dropdown = ["Monthly", "Weekly", "Yearly"];
  const vehicle = ["No", "Yes"];

  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="border-b-[2px] border-grey-200"></div>
        <div className="flex items-center gap-[12px]">
          <div className="bg-blue-200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
            <Image
              src="/assets/icons/colc/clothing.svg"
              alt="Travel"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-heading5 md:text-heading4">Clothing</h2>
        </div>
        <div className="border-l-[8px] border-grey-200">
          <div className="ml-[16px]">
            <h3 className="text-para-lg font-medium mb-[8px]">
              How expensive is the clothing you usually buy?
              <span className="text-negative-default">*</span>
            </h3>
            <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
              CHOOSE an option
            </p>
            <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
              {clothing.map((item, index) => (
                <li
                  key={index}
                  className="btn btn-primary-outline small cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-l-[8px] border-grey-200">
          <div className="ml-[16px]">
            <h3 className="text-para-lg font-medium mb-[8px]">
              How many items of clothing do you buy monthly?
              <span className="text-negative-default">*</span>
            </h3>
            <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
              CHOOSE an option
            </p>
            <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
              {clothMonthly.map((item, index) => (
                <li
                  key={index}
                  className="btn btn-primary-outline small cursor-pointer"
                >
                  {item}
                </li>
              ))}
              <li className="btn btn-primary-outline small cursor-pointer">
                6 item +
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-grey-50 border border-grey-300 rounded-[4px] p-[16px] flex flex-col text-neutral900">
          <div className="flex items-center gap-[12px]">
            <input
              aria-label="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheck}
              className="accent-primary-400 text-white w-[16px] h-[16px]"
            />
            <label className="cursor-pointer font-medium">
              I already know how much I spend
            </label>
          </div>
          <div
            className={`transition-all duration-300 ${
              isChecked ? "block" : "hidden"
            }`}
          >
            <div className="border-t border-grey-300 pt-[12px] mt-[12px] grid grid-cols-1 items-center justify-between gap-[24px]">
              <div>
                <label
                  htmlFor="inputId"
                  className="block font-semibold mb-[8px]"
                >
                  What are your clothing costs?
                </label>
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <input
                      type="text"
                      id="inputId"
                      className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 placeholder:text-grey500 text-grey500 pl-[21px] pr-[12px] py-[10px] w-[160px]"
                      placeholder="0"
                    />
                    <div className="absolute inset-y-0 left-[12px] flex items-center">
                      <span className="text-grey500">£</span>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => CostDropdownClicked("COST")}
                      className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-full font-semibold"
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
        <div className="flex items-center gap-[4px] text-negative-default x-small">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6.8805V8.00017M8 10.2395H8.0056M4.12134 12.4789H11.8787C12.7406 12.4789 13.2793 11.5458 12.8483 10.7994L8.96966 4.08132C8.5387 3.33487 7.4613 3.33487 7.03034 4.08132L3.15168 10.7994C2.72072 11.5458 3.25942 12.4789 4.12134 12.4789Z"
              stroke="#BC0000"
              strokeWidth="1.13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Please enter your clothing costs
        </div>

        <div className="border-l-[2px] border-primary-400 bg-grey-50 px-[16px] py-[10px]">
          <button
            className="flex items-center justify-between w-full font-semibold small"
            onClick={toggle}
          >
            How to answer this question
            <svg
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
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
              <div className="font-semibold">Clothing</div>
              <div className="flex flex-col gap-[16px]">
                <div>
                  If you already know how much you spend per month on clothes,
                  please enter the amount by ticking he box next to 'I already
                  know how much I spend'.
                </div>
                <div>
                  If not, please select the usual price range of the clothes you
                  purchase (e.g.)
                </div>
                <ul>
                  {clothingqus.map((item, index) => (
                    <li
                      key={index}
                      className="list-disc ml-[22px] mb-[10px] last:mb-0"
                    >
                      {item.list}
                    </li>
                  ))}
                </ul>
                <div>
                  Then select how many items you buy per month. The calculator
                  will estimate a cost based on your answers and UK averages for
                  each price band.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clothing;

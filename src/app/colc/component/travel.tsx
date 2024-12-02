"use client";
import React, { useState } from "react";
import Image from "next/image";

const Travel = () => {
  const travel = ["Never", "Rarely", "Sometimes", "Often", "Every day"];
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

  const transportqus = [
    {
      name: "At home",
      list: "- staying where you currently are. This will likely be the cheapest option. ",
    },
    {
      name: "University halls",
      list: "- Apply via uni. This will likely be the cheapest option if you want to move away from home.",
    },
    {
      name: "Shared or single private rental",
      list: "- via and estate agent. This will generally be the most expensive option. If you already know the cost of your accommodation tick the box above and enter the amount.",
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
        <div className="border-b border-grey-200"></div>
        <div className="flex items-center gap-[12px]">
          <div className="bg-tertiary-200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
            <Image
              src="/assets/icons/colc/travel.svg"
              alt="Travel"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-heading4">Travel</h2>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[12px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                How often will you use public transport?
                <span className="text-negative-default">*</span>
              </h4>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {travel.map((item, index) => (
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

          <div className="bg-grey-50 border border-grey-300 rounded-[4px] p-[16px] flex flex-col text-neutral900">
            <div className="flex items-center gap-[12px]">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheck}
                className="accent-primary-400 text-white w-[16px] h-[16px]"
              />
              <label className="cursor-pointer font-medium">
                I already know the cost
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
                    What are your public transport costs?
                  </label>
                  <div className="flex items-center gap-[8px]">
                    <input
                      type="text"
                      id="inputId"
                      className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-[160px]"
                      placeholder="£0"
                    />

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

          <div className="border-l-[2px] border-primary-400 bg-grey-50 px-[16px] py-[10px]">
            <button
              className="flex items-center justify-between w-full font-semibold small"
              onClick={toggle}
            >
              How to answer this question
              <svg
                className={`${isOpen ? "rotate-180" : ""}`}
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
              <div className="flex flex-col gap-[4px] mt-[10px]">
                <div className="x-small font-semibold">Public transport</div>
                <div className="x-small">
                  Please indicate how often you think you'll use public
                  transport so the calculator may estimate your monthly cost. If
                  you already know how much you will spend, please tick the box
                  next to 'I already know the cost' and enter the amount.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[12px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                Do you have a vehicle?
                <span className="text-negative-default">*</span>
              </h4>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {vehicle.map((item, index) => (
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

          <div className="border-l-[2px] border-primary-400 bg-grey-50 px-[16px] py-[10px]">
            <button
              className="flex items-center justify-between w-full font-semibold small"
              onClick={toggle}
            >
              How to answer this question
              <svg
                className={`${isOpen ? "rotate-180" : ""}`}
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
              <div className="flex flex-col gap-[4px] mt-[10px]">
                <div className="x-small font-semibold">Housing</div>
                <ul className=" pl-[16px]">
                  {transportqus.map((item, index) => (
                    <li className="x-small list-disc mb-[10px] last:mb-0">
                      <span className="font-semibold">{item.name}</span>{" "}
                      {item.list}
                    </li>
                  ))}
                </ul>
                <div className="x-small">
                  <span className="font-semibold">Tip:</span> Whether you’re
                  just starting your journey to university or already planning
                  your move, keep in mind that your exact costs can vary. The
                  estimates here are based on average prices for catered and
                  non-catered accommodation. If you're considering living at
                  home or in private housing, these averages may not reflect
                  your actual expenses. You can come back and adjust these
                  figures whenever you need to!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[12px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
              How much would travel cost to visit family and friends?
                <span className="text-negative-default">*</span>
              </h4>
              <div className="grid grid-cols-1 items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <input
                    type="text"
                    id="inputId"
                    className="bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 text-grey500 px-[12px] py-[10px] w-[160px]"
                    placeholder="£0"
                  />
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

          <div className="border-l-[2px] border-primary-400 bg-grey-50 px-[16px] py-[10px]">
            <button
              className="flex items-center justify-between w-full font-semibold small"
              onClick={toggle}
            >
              How to answer this question
              <svg
                className={`${isOpen ? "rotate-180" : ""}`}
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
              <div className="flex flex-col gap-[4px] mt-[10px]">
                <div className="x-small font-semibold">Housing</div>
                <ul className=" pl-[16px]">
                  {transportqus.map((item, index) => (
                    <li className="x-small list-disc mb-[10px] last:mb-0">
                      <span className="font-semibold">{item.name}</span>{" "}
                      {item.list}
                    </li>
                  ))}
                </ul>
                <div className="x-small">
                  <span className="font-semibold">Tip:</span> Whether you’re
                  just starting your journey to university or already planning
                  your move, keep in mind that your exact costs can vary. The
                  estimates here are based on average prices for catered and
                  non-catered accommodation. If you're considering living at
                  home or in private housing, these averages may not reflect
                  your actual expenses. You can come back and adjust these
                  figures whenever you need to!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;

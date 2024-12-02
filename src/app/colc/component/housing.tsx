"use client";
import React, { useState } from "react";
import Image from "next/image";

const Housing = () => {
  const housing = [
    "At home",
    "University halls",
    "Shared house (private)",
    "Live alone (private)",
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
  const housingqus = [
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
  const [isLivingDropdownOpened, SetIsLivingDropdownOpened] = useState(false);
  const CostDropdownClicked = (dropdownType: string) => {
    if (dropdownType == "COST") {
      SetIsCostDropdownOpened(!isCostDropdownOpened);
      SetIsLivingDropdownOpened(false);
    } else if (dropdownType == "LIVING") {
      SetIsCostDropdownOpened(false);
      SetIsLivingDropdownOpened(!isLivingDropdownOpened);
    }
  };
  const dropdown = ["Monthly", "Weekly", "Yearly"];
  const livingdropdown = [
    "At home",
    "University halls",
    "Shared house (private)",
    "Live alone (private)",
  ];
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="bg-blue-200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
            <Image
              src="/assets/icons/colc/housing.svg"
              alt="Housing"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-heading4"> Housing</h2>
        </div>
        <p className="small">
          Accommodation costs vary based on location, type and availability.
          These are average estimates for catered and non-catered options.
        </p>
        <div className="border-l-[8px] border-grey-200">
          <div className="ml-[16px]">
            <h4 className="text-para-lg font-medium mb-[8px]">
              Where do you plan on living while at university?
              <span className="text-negative-default">*</span>
            </h4>
            <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
              Choose One
            </p>
            <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
              {housing.map((item, index) => (
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
              I already know my housing costs
            </label>
          </div>
          <div
            className={`transition-all duration-300 ${
              isChecked ? "block" : "hidden"
            }`}
          >
            <div className="border-t border-grey-300 pt-[12px] mt-[12px] grid grid-cols-2 items-center justify-between gap-[24px]">
              <div>
                <label
                  htmlFor="inputId"
                  className="block font-semibold mb-[8px]"
                >
                  What are your housing costs?
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
              <div>
                <label
                  htmlFor="inputId"
                  className="block font-semibold mb-[8px]"
                >
                  I’ll be living...
                </label>
                <div className="relative">
                  <button
                    onClick={() => CostDropdownClicked("LIVING")}
                    className="flex items-center justify-between gap-[4px] bg-white border border-gray-500 rounded-[4px] shadow-custom-2 focus:outline-none focus:ring-primary-400 focus:border-primary-400 px-[12px] py-[10px] w-full font-semibold"
                    type="button"
                  >
                    Please choose
                    <Image
                      src="/assets/icons/arrow_down_black.svg"
                      width="20"
                      height="20"
                      alt="Down Arrow"
                    />
                  </button>
                  {isLivingDropdownOpened && (
                    <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute top-[46px] overflow-hidden">
                      <ul>
                        {livingdropdown.map((item, index) => (
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              <ul>
                {housingqus.map((item, index) => (
                  <li className="x-small list-disc ml-[22px] mb-[10px] last:mb-0">
                    <span className="font-semibold">{item.name}</span>
                    {item.list}
                  </li>
                ))}
              </ul>
              <div className="x-small">
                <span className="font-semibold">Tip:</span> Whether you’re just
                starting your journey to university or already planning your
                move, keep in mind that your exact costs can vary. The estimates
                here are based on average prices for catered and non-catered
                accommodation. If you're considering living at home or in
                private housing, these averages may not reflect your actual
                expenses. You can come back and adjust these figures whenever
                you need to!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Housing;

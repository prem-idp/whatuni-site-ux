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
          <h2 className="text-heading5 md:text-heading4">Housing</h2>
        </div>
        <p className="small">
          Accommodation costs vary based on location, type and availability.
          These are average estimates for catered and non-catered options.
        </p>
        <div className="border-l-[8px] border-grey-200">
          <div className="ml-[16px]">
            <h3 className="text-para-lg font-medium mb-[8px]">
              Where do you plan on living while at university?
              <span className="text-negative-default">*</span>
            </h3>
            <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
              Choose One
            </p>
            <div className="flex flex-row flex-wrap gap-[8px]">
              {housing.map((item, index) => (
                <div className="form_radio flex relative" key={index}>
                  <input
                    defaultValue={"At home"}
                    type="radio"
                    name="uni"
                    className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                    id={item}
                  />
                  <label htmlFor={item} className="btn btn-primary-outline">
                    {item}
                  </label>
                </div>
              ))}
            </div>
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
              I already know my housing costs
            </label>
          </div>
          <div
            className={`transition-all duration-300 ${
              isChecked ? "block" : "hidden"
            }`}
          >
            <div className="border-t border-grey-300 pt-[12px] mt-[12px] grid grid-cols-1 items-center justify-between gap-[12px] md:grid-cols-2">
              <div>
                <label
                  htmlFor="inputId"
                  className="block font-semibold mb-[8px]"
                >
                  What are your housing costs?
                </label>
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <input
                      type="text"
                      id="inputId"
                      className="colc-input w-[160px]"
                      placeholder="0"
                    />
                    <div className="colc-dollar">
                      <span className="text-grey500">£</span>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => CostDropdownClicked("COST")}
                      className="colc-select w-[111px]"
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
                    className="colc-select w-full"
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
          Please enter your housing costs
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
            className={`transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-[4px] mt-[10px] x-small">
              <div className="font-semibold">Housing</div>
              <ul>
                {housingqus.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc ml-[22px] mb-[10px] last:mb-0"
                  >
                    <span className="font-semibold">{item.name}</span>
                    {item.list}
                  </li>
                ))}
              </ul>
              <div>
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

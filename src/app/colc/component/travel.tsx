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

  //dropdowns
  const [isCostDropdownOpened, setIsCostDropdownOpened] = useState(false);
  const CostDropdownClicked = (dropdownType: string) => {
    if (dropdownType == "COST") {
      setIsCostDropdownOpened(!isCostDropdownOpened);
    }
  };
  const dropdown = ["Monthly", "Weekly", "Yearly"];
  //vehicle
  const [isYesSelected, setIsYesSelected] = useState(false);
  const vehicle = ["No", "Yes"];

  return (
    <>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <div className="border-b-[2px] border-grey-200"></div>
          <div className="flex items-center gap-[12px]">
            <div className="bg-tertiary-200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
              <Image
                src="/assets/icons/colc/travel.svg"
                alt="Travel"
                width={24}
                height={24}
              />
            </div>
            <h2 className="text-heading5 md:text-heading4">Travel</h2>
          </div>
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                How often will you use public transport?
                <span className="text-negative-default">*</span>
              </h3>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {travel.map((item, index) => (
                  <li
                    key={index}
                    className="btn btn-primary-outline"
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
                aria-label="checkbox"
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
                    htmlFor="costs"
                    className="block font-semibold mb-[8px]"
                  >
                    What are your public transport costs?
                  </label>
                  <div className="flex items-center gap-[8px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="costs"
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
                        className="colc-select w-full"
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
            Please enter your public transport costs
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
                <div className="font-semibold">Public transport</div>
                <div>
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
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                Do you have a vehicle?
                <span className="text-negative-default">*</span>
              </h3>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                <li
                  className={`btn btn-primary-outline ${
                    !isYesSelected
                      ? "bg-primary-500 border-primary-500 text-white"
                      : ""
                  }`}
                  onClick={() => setIsYesSelected(false)}
                >
                  No
                </li>

                <li
                  className={`btn btn-primary-outline ${
                    isYesSelected
                      ? "bg-primary-500 border-primary-500 text-white"
                      : ""
                  }`}
                  onClick={() => setIsYesSelected(true)}
                >
                  Yes
                </li>
              </ul>
            </div>
          </div>
          {isYesSelected && (
            <div className="bg-grey-50 border border-grey-300 rounded-[4px] p-[16px] flex flex-col text-neutral900">
              <div className="font-semibold mb-[8px]">
                Input costs of: Insurance, Fuel and Road Tax
              </div>
              <div className="grid grid-cols-1 items-center justify-between gap-[16px] md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="Insurance"
                    className="block font-semibold mb-[8px]"
                  >
                    Insurance
                  </label>
                  <div className="flex items-center gap-[8px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="Insurance"
                        className="colc-input w-full md:w-[127px]"
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
                    htmlFor="Petrol"
                    className="block font-semibold mb-[8px]"
                  >
                    Petrol
                  </label>
                  <div className="flex items-center gap-[8px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="Petrol"
                        className="colc-input w-full md:w-[127px]"
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
                    htmlFor="Road tax"
                    className="block font-semibold mb-[8px]"
                  >
                    Road tax
                  </label>
                  <div className="flex items-center gap-[8px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="Road tax"
                        className="colc-input w-full md:w-[127px]"
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
              </div>
            </div>
          )}

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
            Please enter your vehicle costs
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
                <div className="font-semibold">
                Vehicles
                </div>
                <div>
                If you'll own/drive a car, moped, motorcycle or any vehicle while at uni that requires fuel, insurance and tax, enter the monthly amounts in the boxes provided.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                How much would travel cost to visit family and friends?
                <span className="text-negative-default">*</span>
              </h3>
              <div className="grid grid-cols-1 items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <input
                      type="text"
                      id="friends"
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
                      className="colc-select w-full"
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
            Please enter your travel costs for visits
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
                <div className="font-semibold">
                  Travel to family and friends
                </div>
                <div>
                  Enter what you think it will cost to travel to see your
                  friends and family. Select from the drop down if you will
                  travel weekly, monthly or quarterly (in uni holidays only).
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

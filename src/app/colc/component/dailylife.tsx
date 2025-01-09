"use client";
import React, { useState } from "react";
import Image from "next/image";

const DailyLife = () => {
  const dailyLife = [
    "Never",
    "Once a month",
    "Occassionally",
    "Once a week",
    "More and once a week",
  ];
  const apps = [
    "Amazon Prime",
    "Apple Music",
    "Apple TV+",
    "Audible",
    "BBC TV License",
    "Disney+",
    "Duolingo",
    "Calm",
    "Headspace",
    "Hulu",
    "Netflix",
    "Peloton",
    "Spotify",
    "VPN service",
    "Youtube premium",
    "I won’t pay for streaming",
  ];
  const sports = [
    "Team sports",
    "Classes",
    "Gym",
    "At home / free",
    "No exercise",
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

  //dropdowns
  const [isCostDropdownOpened, setIsCostDropdownOpened] = useState(false);
  const CostDropdownClicked = (dropdownType: string) => {
    if (dropdownType == "COST") {
      setIsCostDropdownOpened(!isCostDropdownOpened);
    }
  };
  const dropdown = ["Monthly", "Weekly", "Yearly"];

  return (
    <>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[16px]">
          <div className="border-b-[2px] border-grey-200"></div>
          <div className="flex items-center gap-[12px]">
            <div className="bg-green200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
              <Image
                src="/assets/icons/colc/dailylife.svg"
                alt="Travel"
                width={24}
                height={24}
              />
            </div>
            <h2 className="text-heading5 md:text-heading4">Daily life</h2>
          </div>

          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                How often do you go out to socialise?
                <span className="text-negative-default">*</span>
              </h3>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {dailyLife.map((item, index) => (
                  <li key={index} className="btn btn-primary-outline">
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
                    What are your socialising costs?
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
                        className="colc-select"
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
            Please enter your socialising costs
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
                <div className="font-semibold">Socialising</div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    Estimate how much you are likely to go out, your totally
                    will then be calculated on an average for the area. If you
                    already know how much you spend on going out, please enter
                    your budget by ticking the box next to 'I already how much I
                    spend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                Which paid streaming services and apps would you use?
                <span className="text-negative-default">*</span>
              </h3>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <div className="flex flex-row flex-wrap gap-[8px]">
                {apps.map((item, index) => (
                  <div className="form_check flex relative" key={index}>
                    <input
                      defaultValue={"Amazon Prime"}
                      type="checkbox"
                      className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id={item}
                    />
                    <label htmlFor={item} className="btn btn-primary-outline">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-[4px] mt-[8px] py-[6px] small font-semibold text-primary-400 cursor-pointer hover:underline">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5.5V15.5M15 10.5L5 10.5"
                    stroke="#4664DC"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add option
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
                    What are your streaming and app costs?
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
                        className="colc-select"
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
            Please enter your streaming services and apps costs
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
                  Streaming services and app subscriptions
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    If you already know how much you will pay in total for your
                    monthly subscriptions, please tick 'I already know the cost'
                    and enter the amount in the box provided.
                  </div>
                  <div>
                    If not please select all the apps and streaming services
                    you'll be paying for in or enter your own if there are any
                    we haven't covered by typing the name, adding the cost and
                    selecting the payment frequency from the drop down menu.
                  </div>
                  <div>
                    Subscriptions selected form the buttons provided will be
                    calculated on either the average subscription cost or the
                    student discounted rate, so if you know for sure how much
                    you pay, please enter your subscription cost manually in the
                    section provided for the most accurate cost for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                Mobile phone costs
                <span className="text-negative-default">*</span>
              </h3>
              <div className="grid grid-cols-1 items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <input
                      type="text"
                      id="Mobile"
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
                      className="colc-select"
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
            Please enter your mobile phone costs
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
                <div className="font-semibold">Mobile phone</div>
                <div>
                  Enter the cost of your monthly contract including any add ons.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                What type of sport / exercise do you prefer?
                <span className="text-negative-default">*</span>
              </h3>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE ONE OR MORE
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {sports.map((item, index) => (
                  <li key={index} className="btn btn-primary-outline">
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
                    htmlFor="inputId"
                    className="block font-semibold mb-[8px]"
                  >
                    What are your sport / exercise costs?
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
                        className="colc-select"
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
            Please enter your sport / excercise costs
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
                <div className="font-semibold">Sport / exercise</div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    If you choose to select one of the activities above the
                    calculator will estimate monthly costs based on the average
                    for your area.
                  </div>
                  <div>
                    If you already know how much you will spend, please tick the
                    box next to 'I already know the cost' and enter the amount
                    you spend per month on sport/exercise.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200">
            <div className="ml-[16px]">
              <h3 className="text-para-lg font-medium mb-[8px]">
                Are there any other costs you would like to add?
                <span className="text-small font-inter font-normal text-grey500">
                  &nbsp;(optional)
                </span>
                <span className="text-negative-default">*</span>
              </h3>

              <div className="flex flex-col gap-[4px] md:flex-row">
                <div className="grow">
                  <label
                    htmlFor="Name"
                    className="block font-semibold mb-[8px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="colc-input w-full !pl-[12px]"
                    placeholder="Please enter"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Cost"
                    className="block font-semibold mb-[8px]"
                  >
                    Cost
                  </label>
                  <div className="flex items-center gap-[4px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="Cost"
                        className="colc-input w-[100px] md:w-[64px]"
                        placeholder="0"
                      />
                      <div className="colc-dollar">
                        <span className="text-grey500">£</span>
                      </div>
                    </div>

                    <div className="relative w-full">
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
              <div className="flex items-center gap-[4px] mt-[8px] py-[6px] small font-semibold text-primary-400 cursor-pointer hover:underline">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5.5V15.5M15 10.5L5 10.5"
                    stroke="#4664DC"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add option
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
            Please enter your mobile phone costs
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
                <div className="font-semibold">Mobile phone</div>
                <div>
                  Enter the cost of your monthly contract including any add ons.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyLife;

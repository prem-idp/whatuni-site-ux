"use client";
import React, { useState } from "react";
import Image from "next/image";

const Food = ({ title, content }: any) => {
  const food = [
    "£ - Budget restaurants",
    "££ - Mid-range restaurants",
    "£££ - High end restaurants",
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
  const eatoutqus = [
    {
      name: "£ - Budget restaurants:",
      list: "Places like McDonald's and Greggs for those quick meals.",
    },
    {
      name: "££ - Mid-Range:",
      list: "Casula spots like Nando's and Byron Burger for when you're in the mood for something a bit nicer.",
    },
    {
      name: "£££ - High-End:",
      list: "For those fancier nights out, think Flat Iron steak and Nobu!",
    },
  ];
  const groceryqus = [
    {
      name: "Discount stores:",
      list: "Think Aldi, Lidl for those budget-friendly finds.",
    },
    {
      name: "Mainstream supermarkets:",
      list: "You might hit up Sainsbury's or Tesco for your weekly shop",
    },
    {
      name: "Premium grocers:",
      list: "For those times you want to splurge, there's Waitrose of M&S Food.",
    },
  ];
  const productsqus = [
    {
      list: "Have a think about your regularly used items (e.g. shower gel, shampoo, deodorant, toothpaste, etc.)",
    },
    {
      list: "Consider how often you typically replace each of them",
    },
    {
      list: "Get the costs for these products from your preferred supermarket/store and total them up.",
    },
    {
      list: "Enter the amount into the field above.",
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

  //eat out
  const eating = ["Breakfast", "Lunch", "Dinner"];

  // count actions
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //Grocery
  const grocery = [
    "£ - Budget supermarket",
    "££ - Mid-range supermarket",
    "£££ - High end supermarket",
  ];
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="bg-green200 rounded-tl-[24px] rounded-br-[24px] p-[12px] w-[48px] h-[48px] flex items-center justify-center">
            <Image
              src="/assets/icons/colc/food.svg"
              alt="Food"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-heading4">Food and shopping</h2>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[8px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                Where will you eat out / order takeaways from?
                <span className="text-negative-default">*</span>
              </h4>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {food.map((item, index) => (
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

          <div className="border-l-[8px] border-grey-200 mt-[8px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                How many days a week will you eat out / order takeaways?
                <span className="text-negative-default">*</span>
              </h4>
              <div className="flex items-center justify-between gap-[32px] flex-wrap pl-[8px]">
                {eating.map((item, index) => (
                  <div
                    key={index + 1}
                    className="inline-flex items-center gap-[8px]"
                  >
                    <label
                      htmlFor="grade"
                      className="min-w-[24px] font-semibold block text-grey300"
                    >
                      {item}
                    </label>
                    <button
                      aria-label="decrement"
                      onClick={decrement}
                      className={`${
                        count ? "decrease cursor-pointer" : "cursor-not-allowed"
                      }`}
                    >
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
                    <span className="text-grey300 min-w-[24px] block text-center">
                      {count}
                    </span>
                    <button
                      aria-label="increment"
                      onClick={increment}
                      className={`${
                        count ? "increase cursor-pointer" : "cursor-not-allowed"
                      }`}
                    >
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
                    What are your eating out / takeaway costs?
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
                <div className="x-small font-semibold">
                  Eating out and takeaways
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="x-small">
                    <span className="font-semibold">First things first:</span>
                    How often do you expect to grab a bite out or order
                    takeaway? Select your frequency for breakfast, lunch and
                    dinner.
                  </div>
                  <ul>
                    <div className="x-small font-semibold">
                      Pick your spots:
                    </div>
                    {eatoutqus.map((item, index) => (
                      <li className="x-small list-disc ml-[22px] mb-[10px] last:mb-0">
                        <span className="font-semibold">{item.name}</span>
                        {item.list}
                      </li>
                    ))}
                  </ul>
                  <div className="x-small">
                    If you know your spending already, just tick the box and
                    enter the amount.
                  </div>
                  <div className="x-small">
                    <span className="font-semibold">Remember:</span> Breakfast
                    could be a quick coffee or pastry, lunch might be snacks
                    between classes and dinner could mean social outings or a
                    late-night delivery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[8px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                Where will you do your food / grocery shopping?
                <span className="text-negative-default">*</span>
              </h4>
              <p className="uppercase text-grey-700 mb-[4px] xs-small font-semibold">
                CHOOSE an option
              </p>
              <ul className="flex flex-row flex-wrap gap-[8px] w-fit">
                {grocery.map((item, index) => (
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
                    What are your food shopping costs?
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
                <div className="x-small font-semibold">
                  Food / grocery shopping
                </div>
                <div className="flex flex-col gap-[16px]">
                  <ul>
                    <div className="x-small mb-[16px]">
                      First, have a think about where you plan to do most of our
                      food or grocery shopping.
                    </div>
                    {groceryqus.map((item, index) => (
                      <li className="x-small list-disc ml-[22px] mb-[10px] last:mb-0">
                        <span className="font-semibold">{item.name}</span>
                        {item.list}
                      </li>
                    ))}
                  </ul>
                  <div className="x-small">
                    If you already know how much you typically spend each month,
                    just tick the box and enter the amount.
                  </div>
                  <div className="x-small">
                    <span className="font-semibold">Tip:</span> All stores often
                    have discounted own-brand options - so consider your
                    shopping style. Pick the option that feels right for where
                    you'll be doing most of your grocery runs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="border-l-[8px] border-grey-200 mt-[8px]">
            <div className="ml-[16px]">
              <h4 className="text-para-lg font-medium mb-[8px]">
                How much do you expect to spend on hygiene and personal care
                products?
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
                <div className="x-small font-semibold">
                  Hygiene and personal care products
                </div>
                <div className="flex flex-col gap-[16px]">
                  <ul>
                    <div className="x-small mb-[16px]">
                      To estimate your monthly expenses for hygiene and personal
                      care:
                    </div>
                    {productsqus.map((item, index) => (
                      <li className="x-small list-disc ml-[22px] mb-[10px] last:mb-0">
                        {item.list}
                      </li>
                    ))}
                  </ul>

                  <div className="x-small">
                    <span className="font-semibold">Tip:</span>Remember to
                    include items specific to your personal routine, health
                    requirements, or preferences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
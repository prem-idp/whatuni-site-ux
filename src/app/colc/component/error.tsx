"use client";
import Link from "next/link";
import React from "react";

const ErrorList = () => {
  const errors = [
    {
      name: "Please enter your",
      link: "housing costs",
    },
    {
      name: "Please enter your",
      link: "food shopping costs",
    },
    {
      name: "Please enter your",
      link: "eating out costs",
    },

    {
      name: "Please enter your",
      link: "public transport costs",
    },
    {
      name: "Please enter your",
      link: "vehicle costs",
    },
    {
      name: "Please enter your",
      link: "food shopping costs",
    },
    {
      name: "Please enter your",
      link: "socialising costs",
    },
    {
      name: "Please enter your",
      link: "phone contract costs",
    },
    {
      name: "Please enter your",
      link: "sport / exercise costs",
    },
    {
      name: "Please enter your",
      link: "clothing costs",
    },
    {
      name: "Please enter your",
      link: "how often you buy clothing",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[8px] p-[16px] rounded-[6px] font-semibold border border-negative-default bg-negative-light text-negative-dark">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6.8805V8.00017M8 10.2395H8.0056M4.12134 12.4789H11.8787C12.7406 12.4789 13.2793 11.5458 12.8483 10.7994L8.96966 4.08132C8.5387 3.33487 7.4613 3.33487 7.03034 4.08132L3.15168 10.7994C2.72072 11.5458 3.25942 12.4789 4.12134 12.4789Z"
              stroke="#800101"
              strokeWidth="1.13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          There are XX errors
        </div>
        <ul>
          {errors.map((item, index) => (
            <li
              key={index}
              className="text-negative-default list-disc ml-[22px] mb-[10px] last:mb-0 small"
            >
              {item.name} &nbsp;
              <Link href="#" className="underline">
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-b-[2px] border-grey-200 pt-[24px]"></div>
      </div>
    </>
  );
};

export default ErrorList;

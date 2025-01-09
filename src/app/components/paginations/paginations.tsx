import Link from "next/link";
import React from "react";

const Paginations = () => {
  return (
    <>
      <nav aria-label="navigation">
        <ul className="pagination flex justify-center items-center gap-[8px]">
          <li className="page-item">
            <Link
              className="page-link flex items-center justify-center px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]"
              href="#"
              title=""
              aria-label="Previous"
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11L1 6L6 1"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="page-item active">
            <a
              className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link hidden md:block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              4
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link hidden md:block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              5
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link flex items-center justify-center small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]"
              href="#"
            >
              ...
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link block small font-normal text-grey300 px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50"
              href="#"
            >
              25
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link flex items-center justify-center px-[14px] py-[8px] rounded-[4px] hover:bg-primary-50 w-[36px] h-[36px]"
              href="#"
              title=""
              aria-label="Next"
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#333F48"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginations;

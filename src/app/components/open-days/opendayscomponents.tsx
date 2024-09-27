import React from "react";

const OpenDays = () => {
  return (
    <>
      <section className="bg-success-500 text-white text-small font-bold pt-[12px] pb-[13px] leading-[20px]">
        <a className="flex items-center justify-center gap-[7px] cursor-pointer">
          Check upcoming open days and book your place
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2797 4.55566L17.7241 10.0001M17.7241 10.0001L12.2797 15.4446M17.7241 10.0001L3.72412 10.0001"
              stroke="white"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
    </>
  );
};

export default OpenDays;

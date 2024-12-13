import React from "react";
import Image from "next/image";
import Housing from "./component/housing";
import Food from "./component/food";
import Travel from "./component/travel";
import Clothing from "./component/clothing";
import DailyLife from "./component/dailylife";
import Income from "./component/income";
import ErrorList from "./component/error";
import Faqcomponents from "../components/faq/faqcomponents";
import ColcBanner from "../components/colc-banner/colc-banner";

const Colc = () => {
  return (
    <>
      <ColcBanner/>
      <section className="bg-white px-[16px] py-[32px] md:py-[64px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col gap-[16px] justify-between lg:flex-row">
            <div className="flex flex-col gap-[40px] w-full grow">
              <Housing />
              <Food />
              <Travel />
              <Clothing />
              <DailyLife />
              <Income />
              <ErrorList />
              <div className="flex items-center justify-center gap-[6px] font-semibold btn btn-primary py-[10px] cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50033 6.33333H12.5003M12.5003 14.6667V12.1667M10.0003 14.6667H10.0087M7.50033 14.6667H7.50866M7.50033 12.1667H7.50866M10.0003 12.1667H10.0087M12.5003 9.66667H12.5087M10.0003 9.66667H10.0087M7.50033 9.66667H7.50866M5.83366 18H14.167C15.0875 18 15.8337 17.2538 15.8337 16.3333V4.66667C15.8337 3.74619 15.0875 3 14.167 3H5.83366C4.91318 3 4.16699 3.74619 4.16699 4.66667V16.3333C4.16699 17.2538 4.91318 18 5.83366 18Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Calculate my results
              </div>
            </div>
            <div className="flex flex-col p-[16px] shrink-0 w-full bg-grey300 rounded-0 text-white fixed bottom-0 mx-[-16px] md:items-center lg:items-start lg:p-[24px] lg:mx-0 lg:self-start lg:rounded-[8px] lg:sticky lg:top-[40px] lg:w-[392px]">
              <div className="small font-semibold">Monthly living costs</div>
              <div className="text-heading4 font-bold font-farro md:text-heading1">£0</div>
            </div>
          </div>
        </div>
      </section>
      <Faqcomponents />
    </>
  );
};

export default Colc;

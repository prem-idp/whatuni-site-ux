import React from "react";
import Image from "next/image";
import Housing from "./component/housing";
import Food from "./component/food";
import Travel from "./component/travel";

const Colc = ({ title, content }: any) => {
  return (
    <>
      <section className="bg-blue-100 min-h-[194px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between gap-[16px]">
            <div className="flex flex-col gap-[4px] self-center">
              <h1 className="text-heading-xl">
                Student cost of living calculator
              </h1>
              <p className="small">
                Answer the questions below to get an idea of your monthly spend
                at university
              </p>
            </div>
            <div className="flex self-end justify-center shrink-0 md:w-[392px]">
              <Image
                src="/assets/images/colc-banner.png"
                width={146}
                height={185}
                priority
                alt="Here Banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-[64px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between gap-[16px]">
            <div className="flex flex-col gap-[46px]">
              <Housing />
              <Food />
              <Travel />
            </div>
            <div className="shrink-0 md:w-[392px] bg-black rounded-[8px] text-white p-[24px] sticky top-[40px] h-[121px]">
              <div className="small font-semibold">Monthly living costs</div>
              <p className="text-heading1 font-bold">£0</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Colc;

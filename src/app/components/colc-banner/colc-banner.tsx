import React from "react";
import Image from "next/image";

const ColcBanner = () => {
  return (
    <>
      <section className="bg-blue-100">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] p-[16px] pb-[24px] md:pb-[16px] lg:py-0 xl:px-0 min-h-[194px]">
            <div className="flex flex-col gap-[4px] self-center md:self-end lg:p-[16px_0_38px]">
              <h1 className="text-heading1 md:text-heading-xl">
                Student cost of living calculator
              </h1>
              <p className="small">
                Answer the questions below to get an idea of your monthly spend
                at university
              </p>
            </div>
            <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px]">
              <Image
                src="/assets/images/colc/colc-banner.png"
                width={146}
                height={185}
                priority
                alt="Colc Banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColcBanner;

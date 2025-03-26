import React from "react";
import Link from "next/link";
import Image from "next/image";
import Visitwebsite from "../interaction-button/visitwebsite";
import RequestInfo from "../interaction-button/requestinfo";

const Scholarshipunicard = ({
  scholarshipURL,
}: {
  scholarshipURL: boolean;
}) => {
  return (
    <>
      {scholarshipURL ? (
        <>
          <div className="card flex flex-col bg-white border border-grey-200 rounded-[8px] shadow-custom-2 overflow-hidden">
            <div className="card-header relative min-h-[190px] bg-grey-200">
              <Image
                src="/assets/images/article_image1.jpg"
                width="392"
                height="221"
                className="block w-full h-auto min-h-[185px]"
                alt="Article_image"
              />
              <div className="absolute z-0 top-[16px] shadow-custom-1 left-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/assets/images/uni_logo_tile1.jpg"
                  width="64"
                  height="64"
                  alt="University logo"
                />
              </div>
            </div>
            <div className="p-[16px] flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <div className="text-para-lg font-farro font-bold">Scholarship name</div>
                <p>University of Kent</p>
                <ul className="grid grid-cols-2 gap-x-[16px] gap-y-[8px] text-grey500">
                  <li>
                    <label className="text-x-smal font-semibold">Award criteria: </label>
                    <p className="text-x-small">Academic excellence</p>
                  </li>
                  <li>
                    <label className="x-smal font-semibold">Funding amount: </label>
                    <p className="text-x-small">Tuition fees</p>
                  </li>
                  <li>
                    <label className="x-smal font-semibold">Deadline:</label>
                    <p className="text-x-small">??????</p>
                  </li>
                </ul>
              </div>
              <div className="flex gap-[8px]">
                <RequestInfo />
                <Visitwebsite />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            href=""
            className="card flex flex-col bg-white border border-grey-200 lg:hover:border-primary-400 rounded-[8px] shadow-custom-2 overflow-hidden"
          >
            <div className="card-header relative min-h-[190px] bg-grey-200">
              <Image
                src="/assets/images/article_image1.jpg"
                width="392"
                height="221"
                className="block w-full h-auto min-h-[185px]"
                alt="Article_image"
              />
              <div className="absolute z-0 top-[16px] left-[16px] rounded-[8px] overflow-hidden">
                <Image
                  src="/assets/images/uni_logo_tile1.jpg"
                  width="64"
                  height="64"
                  alt="University logo"
                />
              </div>
            </div>

            <div className="card-body flex flex-col justify-between gap-[30px] p-[16px] min-h-[106px]">
              <div className="flex flex-col gap-[8px] w-full">
                <div className="card-title font-farro para-lg font-bold text-grey300 line-clamp-1">
                  Uni name
                </div>
                <div className="rating-pod flex items-center gap-[8px]">
                  <div className="rating-card flex items-center gap-[4px]">
                    <Image
                      src="/assets/icons/blue-star-icon.svg"
                      width="24"
                      height="24"
                      alt="Rating icon"
                    />
                    <span className="font-normal small text-grey300">4.6</span>
                  </div>
                  <span className="reviewLink block font-normal small text-primary-400 hover:text-primary-500 hover:underline">
                    400 reviews
                  </span>
                </div>
              </div>
              <p className="card-date font-normal small text-grey-700">
                00 Scholarships
              </p>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Scholarshipunicard;

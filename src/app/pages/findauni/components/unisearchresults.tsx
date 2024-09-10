import Countries from "@/app/common/countries/countries";
import Getprospectus from "@/app/common/interaction-button/getprospectus";
import Viewprofile from "@/app/common/interaction-button/viewprofile";
import React from "react";

const Unisearchresults = () => {
  return (
    <div className="uniresults-inner-container flex flex-col px-[16px] md:px-[24px] mt-[12px] mb-[24px] gap-[8px]">
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-t-[8px] md:rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px] w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px]w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px]w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px]w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px]w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
      {/* Uni results list */}
      <div className="uniresults-inner-wrap flex flex-col md:flex-row shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px]">
        <div className="uniresults-left relative rounded-s-[8px] overflow-hidden">
          <img
            className="block w-full"
            src="/assets/images/uni_tile1.jpg"
            alt="university thumb"
          ></img>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-gradientBlack opacity-[30%]"></div>
          <div className="absolute top-[8px] left-[8px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/uni_logo_tile1.jpg"
              alt="university logo"
            ></img>
          </div>
        </div>
        <div className="uniresults-right flex flex-col justify-between p-[16px] w-full md:w-[calc(100%_-_200px)] gap-[16px] md:flex-row">
          <div className="uniresults-content-left flex flex-col gap-[3px]w-full md:w-[calc(100%_-_334px)]">
            <a
              href="#"
              className="block font-semibold para text-secondary-500 hover:text-secondary-600 hover:underline"
            >
              <span className="line-clamp-2">University of Kent</span>
            </a>
            <div className="rating-pod flex items-center gap-[8px]">
              <div className="rating-card flex items-center">
                <img src="/assets/icons/blue-star-icon.svg" alt="" />
                <span className="font-normal small text-secondary-500">
                  4.6
                </span>
              </div>
              <a
                href="#"
                className="reviewLink block font-normal small text-secondary-500 hover:text-secondary-600 underline"
              >
                400 reviews
              </a>
            </div>
            <div className="font-normal small text-neutral-900">
              WUSCA ranking:&nbsp;88th
            </div>
          </div>
          <div className="uniresults-content-right flex items-end">
            <div className="btn-pod flex gap-[8px]">
              <Getprospectus />
              <Viewprofile />
            </div>
          </div>
        </div>
      </div>
      {/* Uni results list */}
    </div>
  );
};

export default Unisearchresults;

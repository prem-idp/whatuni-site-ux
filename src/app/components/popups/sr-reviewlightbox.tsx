"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Reviewdetailcommentscomponents from "../reviewdetail-comments/reviewdetailcommentscomponents";


const SearchResultReviewLightBox = ({ onClose }: any) => {
  return (
    <>
      <AnimatePresence>
        <div className="modal modal-container relative top-0 right-0 bottom-0 z-[5]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white"
          ></motion.div>
          <motion.div
            initial={{ y: "100px" }}
            animate={{ y: 0 }}
            exit={{ y: "-100px" }}
            transition={{ stiffness: 70, duration: 0.3 }}
            className="modal-box shadow-custom-6 w-full md:w-[720px] lg:w-[790 px] p-[0] md:p-[20px] lg:p-[24px] bg-white md:rounded-[8px] fixed top-0 md:top-[60px] left-0 right-0 mx-auto h-[100vh] md:h-[calc(100vh-120px)]"
          >
            <div
              onClick={onClose}
              className="modal_close flex items-center justify-center absolute top-[24px] right-[16px] lg:right-[20px] z-[1] cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-grey-600"
                  d="M1 13L13 1M1 1L13 13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="review-modal-container flex flex-col gap-[16px]">
              <div className="review-modal-card flex flex-col lg:flex-row gap-[16px] md:gap-[20px] max-md:pr-[0] max-md:h-[calc(100vh-24px)] max-lg:pr-[20px] max-lg:custom-scrollbar-2 max-lg:overflow-y-auto max-lg:h-[calc(100vh-168px)]  lg:h-[auto]">
                <div className="review-gallery-scroll flex flex-1 px-[16px] md:px-[0] max-md:mr-[16px] max-md:custom-scrollbar-2 max-md:overflow-y-auto max-md:h-[calc(100vh-212px)] lg:custom-scrollbar-2 lg:overflow-y-auto lg:h-[calc(100vh-168px)] lg:pr-[16px]">
                  <Reviewdetailcommentscomponents />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default SearchResultReviewLightBox;

import Carousel from "@/app/components/carousel";
import CourseFinder from "@/app/components/course-finder/coursefindercomponents";
import AdviceCourseSlider from "@/app/components/slider/advicecourseslidercomponents";
import React from "react";
import {destinationItems} from "@/app/services/carouselContents";
import Subjectareas from "./components/subjectareas";

const Findcourse = () => {
  return (
    <>
      <div className="find_a_course">
        <CourseFinder />
        <div className="findcourse-container pt-[108px] pb-[40px]">
          <div className="max-w-container mx-auto">
            <div className="content-card-container px-[16px] md:px-[24px] xl2:px-[0] mt-[24px] mb-[38px]">
              <div className="content-card w-full lg:w-[780px]">
                <div className="card-body flex flex-col gap-[8px]">
                  <h4 className="card-title font-bold text-neutral-900">
                    What will you study at uni?
                  </h4>
                  <p className="card-text font-normal small text-neutral-700">
                    With loads of unis and undergraduate courses in the UK,
                    finding your perfect course can be a hassle. Luckily, we've
                    got plenty of ways to help you in your search to find a
                    university course
                  </p>
                  <a
                    className="w-fit link font-normal small text-secondary-500 hover:underline hover:text-secondary-600"
                    href="#"
                  >
                    <span>+</span> Read more
                  </a>
                </div>
              </div>
            </div>
            <Subjectareas />
            <Carousel items={destinationItems} />
            <AdviceCourseSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Findcourse;

/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { CarouselItem } from "@/app/types/types";
import PictureCard from "../cards/pictureCard";
import CourseCard from "../cards/course-card";
import ArticleCard from "../cards/articleCard";

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 309;
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  // current scroll position
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsPrevVisible(scrollLeft > 0);
      setIsNextVisible(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // next
  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  // prev
  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  // video functionality
  const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement | null>(
    null
  );
  const handlePlay = (videoRef: HTMLVideoElement) => {
    if (currentVideo && currentVideo !== videoRef) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    setCurrentVideo(videoRef);
  };

  // function renderCard: renders the type of card
  const renderCard = (
    item: CarouselItem,
    index: number
  ): JSX.Element | null => {
    switch (item.type) {
      case "courseCard":
        return (
          <div
            className={`min-w-[289px] relative border shadow-custom-sm overflow-hidden rounded-[4px] me-[20px] last:me-0 course-card-wrapper`}
          >
            <CourseCard
              key={index}
              courseTitle={item.courseTitle || ""}
              uniLogo={item.uniLogo || ""}
              courseuniName={item.courseuniName || ""}
              countryName={item.countryName || ""}
              degreeType={item.degreeType || ""}
              years={item.years || ""}
              fees={item.fees || ""}
              isFastlaneTag={item.isFastlaneTag}
            />
          </div>
        );
      case "pictureCard":
        return (
          <div
            className={`min-w-[167px] lg:min-w-[289px]  max-lg:h-[167px] relative overflow-hidden rounded-[4px] lg:me-[20px] me-[8px] last:me-0 `}
          >
            <PictureCard
              key={index}
              imgSrc={item.src || ""}
              text={item.alt || ""}
              link={"/"}
            />
          </div>
        );
      case "videoCard":
        return (
          <div
            className={`min-w-[204px] lg:min-w-[289px] relative flex flex-col
             overflow-hidden rounded-[8px] lg:me-[20px] me-[8px] last:me-0`}
          >
            {/* <VideoCard
              key={index}
              thumbnailImg={item.thumbnailImg || ""}
              videoTitle={item.videoTitle || ""}
              authorName={item.authorName || ""}
              subText={item.subText || ""}
              onPlay={handlePlay}
            /> */}
          </div>
        );
      case "articleCard":
        return (
          <div
            className={`min-w-[245px] lg:min-w-[392px] relative overflow-hidden rounded-[4px] me-[20px] last:me-0`}
          >
            <ArticleCard
              key={index}
              articleImg={item.articleImg || "/images/article.jpg"}
              articleTitle={item.articleTitle || ""}
              articleContent={item.articleContent || ""}
              articlePostedDate={item.articlePostedDate || ""}
            />
          </div>
        );
      default:
        return null;
    }
  };
  const getButtonTopPosition = (cardType: CarouselItem["type"]) => {
    switch (cardType) {
      case "articleCard":
      case "videoCard":
      case "pictureCard":
        return "41.5%";

      default:
        return "50%";
    }
  };
  return (
    <section className="relative">
      <div
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hidden px-[16px] xl:px-[0px] pb-[2px]"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <>{renderCard(item, index)}</>
        ))}
      </div>

      {isPrevVisible && (
        <button
          onClick={scrollPrev}
          className="hidden xl:flex rotate-180 justify-center items-center absolute z-10 -left-8 top-[50%] transform -translate-y-1/2 border border-grey500 hover:border hover:border-white group bg-white shadow-custom-sm p-[10px] rounded-[28px] w-[40px] h-[40px] hover:bg-primary500 "
          style={{ top: getButtonTopPosition(items[0].type) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 7 13"
            fill="none"
            className="transition-colors duration-200"
            style={{ stroke: "#5C656E" }}
          >
            <path
              d="M1 1.5L6 6.5L1 11.5"
              className="group-hover:stroke-white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
      {isNextVisible && (
        <button
          onClick={scrollNext}
          className="hidden xl:flex justify-center items-center absolute z-10 -right-8 top-[50%] bg-white transform -translate-y-1/2 border border-grey500 hover:border hover:border-white shadow-custom-sm p-[10px] rounded-[28px]  w-[40px] h-[40px] hover:bg-[#0657AD] group"
          style={{ top: getButtonTopPosition(items[0].type) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 7 13"
            fill="none"
            className="transition-colors duration-200"
            style={{ stroke: "#5C656E" }}
          >
            <path
              d="M1 1.5L6 6.5L1 11.5"
              className="group-hover:stroke-white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Carousel;

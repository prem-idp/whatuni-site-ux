import Image from "next/image";
import Link from "next/link";
import Herocomponents from "./home/herocomponents";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import Carousel from "./components/carousel";
import { articleItems } from "@/app/services/carouselContents";
import Testimonialcomponents from "./home/testimonials/testimonialcomponents";
import Reviewscomponents from "./home/reviews/reviewscomponents";
import { Logoslider } from "./components/our-partners";
import { logoImgArray } from "@/app/services/contents";

export default function Home() {
  return (
    <>
      <Herocomponents />
      <Wuscascomponents />
      <Discovercomponents />
      {/* article section */}
      <section className="w-full max-w-container mx-auto py-[32px] lg:py-[64px]">
          <h3 className="text-darkGrey h3 font-bold mb-[16px] lg:mb-[32px] ps-[16px] xl:ps-0">
            Latest advice
          </h3>
          <Carousel items={articleItems} />
          <div className="flex items-center justify-center mt-[16px] py-[8px]">
            <Link
              href="/"
              className="group text-primary-400 hover:text-primary-500 flex items-center gap-[6px] font-semibold text-small "
            >
              View more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9812 5.31445L17.1663 10.4996M17.1663 10.4996L11.9812 15.6848M17.1663 10.4996L3.83301 10.4996"
                  className="group-hover:stroke-primary500"
                  stroke="#4664DC"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
      </section>
      <Testimonialcomponents />
      <Reviewscomponents />
       {/* our partner section */}
       <section className="w-full max-w-container mx-auto pt-[32px] lg:pt-[64px] lg:pb-[39px]">
          <h3 className="text-darkGrey text-center h3 font-bold mb-[25px] ps-[16px] xl:ps-0">
          Partnered with over 100 universities
          </h3>
          <Logoslider imgSrc={logoImgArray} />
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Herocomponents from "./home/hero/herocomponents";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import Carousel from "./components/carousel/carouselcomponent";
import { articleItems } from "@/app/services/carouselContents";
import Testimonialcomponents from "./home/testimonials/testimonialcomponents";
import Reviewscomponents from "./home/reviews/reviewscomponents";
import { Logoslider } from "./components/our-partners/ourpartnercomponent";
import { logoImgArray } from "@/app/services/contents";
import Advicecomponents from "./home/advice/advicecomponents";

export default function Home() {
  return (
    <>
      <Herocomponents />
      <Wuscascomponents />
      <Discovercomponents />
      <Advicecomponents />
      <Testimonialcomponents />
      <Reviewscomponents />
      {/* our partner section */}
      <section className="w-full max-w-container mx-auto pt-[32px] lg:pt-[64px] lg:pb-[39px]">
        <h2 className="text-center font-bold md:mb-[25px] px-[16px] xl:px-0">
          Partnered with over 100 universities
        </h2>
        <Logoslider imgSrc={logoImgArray} />
      </section>
    </>
  );
}

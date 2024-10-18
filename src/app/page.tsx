import Image from "next/image";
import Link from "next/link";
import HeroSliderComponent from "./home/hero/heroslidercomponent";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import Testimonialcomponents from "./home/testimonials/testimonialcomponents";
import Reviewscomponents from "./home/reviews/reviewscomponents";
import Advicecomponents from "./home/advice/advicecomponents";
import OurPartnerComponent from "./components/our-partners/ourpartnercomponent";

export default function Home() {
  return (
    <>
      <HeroSliderComponent/>
      <Wuscascomponents />
      <Discovercomponents />
      <Advicecomponents />
      <Testimonialcomponents />
      <Reviewscomponents />
      <OurPartnerComponent/>
    </>
  );
}

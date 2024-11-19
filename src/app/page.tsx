import HeroSliderComponent from "./home/hero/heroslidercomponent";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import Testimonialcomponents from "./home/testimonials/testimonialcomponents";
import Reviewscomponents from "./home/reviews/reviewscomponents";
import Advicecomponents from "./home/advice/advicecomponents";
import OurPartnerComponent from "./components/slider/ourpartnercomponent";
import Wuscacomponentskeleton from "./components/skeleton/wuscacomponentskeleton";
import Testimonialcardskeleton from "./components/skeleton/testimonialcardskeleton";
import Tagcloudcardskeleton from "./components/skeleton/tagcloudcardskeleton";
import Discovercardskeleton from "./components/skeleton/discovercardskeleton";
import Tagcloudcomponents from "./home/tag-cloud/tagcloudcomponents";

export default function Home() {
  return (
    <>
      <HeroSliderComponent />
      <Wuscascomponents />
      <Wuscacomponentskeleton />
      <Discovercomponents />
      <Tagcloudcomponents />
      {/* <Discovercardskeleton /> */}
      <Advicecomponents />
      <Testimonialcomponents />
      <Testimonialcardskeleton />
      <Reviewscomponents />
      <OurPartnerComponent />
    </>
  );
}

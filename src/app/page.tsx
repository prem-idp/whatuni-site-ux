import HeroSliderComponent from "./home/hero/heroslidercomponent";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import Testimonialcomponents from "./home/testimonials/testimonialcomponents";
import Reviewscomponents from "./home/reviews/reviewscomponents";
import Advicecomponents from "./home/advice/advicecomponents";
import OurPartnerComponent from "./components/our-partners/ourpartnercomponent";
// import UAParser from "ua-parser-js";
import { headers } from "next/headers";
import Tagcloudcomponents from "./home/tag-cloud/tagcloudcomponents";

export default function Home() {

  // const { get } = headers()
  // const ua = get('user-agent')

  // const device = new UAParser(ua || '').getDevice();
  // const isMobile = device.type
    
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

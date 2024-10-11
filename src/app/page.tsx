import Image from "next/image";
import Herocomponents from "./home/herocomponents";
import Wuscascomponents from "./home/wuscas/wuscascomponents";
import Discovercomponents from "./home/discover/discovercomponents";
import ArticleComponent from "./home/articleComponent";


export default function Home() {
  return (
   <>
    <Herocomponents />
    <Wuscascomponents />
    <Discovercomponents />
    <ArticleComponent />
   </>
  );
}

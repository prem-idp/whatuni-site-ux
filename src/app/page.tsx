import Image from "next/image";
import AdviceCourseCardSkeleton from "./components/skeleton/advicecoursecardskeleton";

export default function Home() {
  return (
   <div>
    <AdviceCourseCardSkeleton></AdviceCourseCardSkeleton>
    <p>hello</p>

   </div>
  );
}

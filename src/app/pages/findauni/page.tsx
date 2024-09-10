import React from "react";
import UniversityFinder from "@/app/common/university-finder/universityfinder";
import Countries from "@/app/common/countries/countries";
import AlphabetsCard from "@/app/common/alphabets-card/alphabetscard";
import Unisearchresults from "@/app/pages/findauni/components/unisearchresults";

const Findcourse = () => {
  return (
    <>
      <div className="find_a_uni">
        <UniversityFinder />
        <div className="uniresults-container pt-[108px] xl2:px-[0]">
          <div className="max-w-container mx-auto">
            <Countries />
            <AlphabetsCard />
            <Unisearchresults />
          </div>
        </div>
      </div>
    </>
  );
};

export default Findcourse;

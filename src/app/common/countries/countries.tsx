import React from "react";

const Countries = () => {
  return (
    <>
      <ul className="flex items-center flex-wrap gap-x-[4px] gap-y-[8px] overflow-x-auto snap-x snap-mandatory scroll-px-[24px] px-[24px] lg:px-0">
        <li className="btn btn-neutral-outline cursor-pointer">All England</li>
        <li className="btn btn-neutral-outline cursor-pointer">Scotland</li>
        <li className="btn btn-neutral-outline cursor-pointer">Wales</li>
        <li className="btn btn-neutral-outline cursor-pointer">Northern Ireland</li>
        <li className="btn btn-neutral-outline cursor-pointer">South West England</li>
        <li className="btn btn-neutral-outline cursor-pointer">South East England</li>
        <li className="btn btn-neutral-outline cursor-pointer">Greater London</li>
        <li className="btn btn-neutral-outline cursor-pointer">Eastern England</li>
        <li className="btn btn-neutral-outline cursor-pointer">Central England</li>
        <li className="btn btn-neutral-outline cursor-pointer">Northern England</li>
      </ul>
    </>
  );
};

export default Countries;

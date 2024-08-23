import React from "react";

const Countries = () => {
  return (
    <>
      <div className="flex items-center gap-[4px] overflow-x-auto snap-x snap-mandatory scroll-px-[24px] px-[24px] lg:px-0">
        <div className="btn btn-neutral-outline">All England</div>
        <div className="btn btn-neutral-outline">Scotland</div>
        <div className="btn btn-neutral-outline">Wales</div>
        <div className="btn btn-neutral-outline">Northern Ireland</div>
        <div className="btn btn-neutral-outline">South West England</div>
        <div className="btn btn-neutral-outline">South East England</div>
        <div className="btn btn-neutral-outline">Greater London</div>
        <div className="btn btn-neutral-outline">Eastern England</div>
        <div className="btn btn-neutral-outline">Central England</div>
        <div className="btn btn-neutral-outline">Northern England</div>
      </div>
    </>
  );
};

export default Countries;

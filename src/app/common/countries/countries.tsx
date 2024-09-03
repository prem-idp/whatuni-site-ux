import React from "react";

const Countries = () => {
  return (
    <>
    <div className='countryList my-[16px]'>
      <div className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-px-[24px] px-[24px] pb-[16px] lg:px-0">
        <div className="flex items-center gap-x-[4px] gap-y-[8px] lg:flex-wrap">
          <div className="btn btn-neutral-outline cursor-pointer">All England</div>
          <div className="btn btn-neutral-outline cursor-pointer">Scotland</div>
          <div className="btn btn-neutral-outline cursor-pointer">Wales</div>
          <div className="btn btn-neutral-outline cursor-pointer">Northern Ireland</div>
          <div className="btn btn-neutral-outline cursor-pointer">South West England</div>
          <div className="btn btn-neutral-outline cursor-pointer">South East England</div>
          <div className="btn btn-neutral-outline cursor-pointer">Greater London</div>
          <div className="btn btn-neutral-outline cursor-pointer">Eastern England</div>
          <div className="btn btn-neutral-outline cursor-pointer">Central England</div>
          <div className="btn btn-neutral-outline cursor-pointer">Northern England</div>
        </div>
      </div>
    </div> 
    </>
  );
};

export default Countries;

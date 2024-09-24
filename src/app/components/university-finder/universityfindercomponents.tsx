import React from "react";
import BreadCrumbs from "@/app/components/breadcrumb/breadcrumbcomponents";
import Image from "next/image";

const UniversityFinder = () => {
  return (
    <div className="find-card-container bg-primary-500 p-[16px] md:p-[24px] lg:py-[36px] xl2:px-[0]">
      <div className="max-w-container mx-auto">
        <div className="find-card-inner w-full md:w-[568px] p-[16px] lg:p-[24px] flex flex-col gap-[8px] shadow-custom-1 bg-white -mb-[128px]">
          <BreadCrumbs />
          <div className="findbar-card-container flex flex-col">
            <h3 className="findbar-card-title font-bold text-neutral-900">
              University finder
            </h3>
            <p className="font-normal para text-neutral-900 mb-[8px]">
              Know which uni you’re looking for?
            </p>
            <div className="findbar-card-body rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px]  bg-white hover:border-secondary-500 shadow-custom-1">
              <div className="findbar-card-input-group flex items-center justify-between">
                <div className="findbar-card-input flex justify-between w-[100%] relative">
                  <div className="flex items-center w-[calc(100%-44px)]">
                    <input
                      type="text"
                      className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]"
                      aria-label=""
                      placeholder="Enter uni name"
                    />
                  </div>
                  <div className="search-btn w-[44px] h-[44px]">
                    <button
                      type="submit"
                      className="btn btn-primary w-full h-[100%] flex items-center justify-center p-[12px]"
                    >
                      <Image src="/assets/icons/search_icon.svg" width="18" height="18" alt="Search icon" />
                    </button>
                  </div>
                  <div className='dropdown-menu flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] left-[-8px] top-[53px] overflow-hidden hidden'>
                    <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">UNIVERSITIES</div>
                      <ul className='custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]'>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">University of Law</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">University of Manchester</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">University of Liverpool</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">University of Barnsley</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">University of Burnley</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">Bristol, University of the West of England</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">INTO Manchester (The University of Manchester)</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">Courtauld Institute of Art, University of London</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">Cardiff Metropolitan University</a></li>
                          <li className="px-[16px] py-[10px]"><a className="dropdown-item w-fit block small font-normal text-neutral-900 hover:underline" href="#">Institute of Advanced Legal Studies, School of Advanced Study, University of London</a></li>                        
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='validation-card error'>
              <p className='text-small font-normal mt-[16px]'>Please enter a valid subject</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityFinder;

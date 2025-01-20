const ColcBannerSkeleton = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] p-[16px] md:p-[0_20px_26px_20px] lg:py-0 xl:px-0 min-h-[194px]">
            <div className="w-full flex flex-col flex-grow gap-[16px] self-center md:self-end lg:p-[16px_0_38px]">
              <div className="flex flex-col gap-[4px]">
                <div className="skeleton skeleton-text-animated large_heading !mb-[4px]"></div>
                <div className="skeleton skeleton-text-animated descript"></div>
              </div>
              {/* <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                <div className="flex flex-col items-center gap-x-[10px] justify-between md:flex-row">
                  <div className="skeleton skeleton-text-animated descript !m-0"></div>
                  <div className="pt-[16px] md:pt-[0]">
                    <div className="skeleton skeleton_btn skeleton-text-animated w-full px-[24px] py-[10px]  !m-0 md:w-[114px]"></div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] pt-[12px]">
              <div className="skeleton skeleton-square-img skeleton-text-animated !w-[205px] !h-[260px] !rounded-none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColcBannerSkeleton;

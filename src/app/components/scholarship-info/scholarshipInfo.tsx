import React from 'react'
import Image from 'next/image'
import Visitwebsite from '../cards/interaction-button/visitwebsite'
import RequestInfo from '../cards/interaction-button/requestinfo'

const ScholarshipInfo = ({ moreDetails }: {moreDetails:boolean}) => {
  return (
    <>
       <div className={`${moreDetails ? "" : "hidden xl:block"} relative` }>
          <div className={`${moreDetails ? "w-full" : "sticky top-[20px] mb-[20px] w-[289px] max-w-[100%]"}shadow-custom-1 border border-grey-200 rounded-[8px] p-[16px] gap-[16px] flex flex-col` }>
              <div className="flex flex-col gap-[4px]">
          <div className={ `${moreDetails ? "grid-auto-cols md:grid-cols-[1fr_64px] grid-auto-rows gap-x-[16px] gap-y-[8px]": "grid-cols-[1fr_48px] grid-auto-rows gap-x-[16px] gap-y-[4px]"} grid`}>
          <div className="h6">Need more information? Visit the [Institution name]</div>
                      {moreDetails ? (<span className='p-[4px] row-start-1 row-end-3 col-start-2 col-end-3 bg-white rounded-[8px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px]'>
                        <Image
            alt="info"
            src="/assets/icons/search-result/kent.png"
            width="64"
            height="64"
                      />
                      </span>) : ( <Image
                        alt="info"
                        src="/assets/icons/scholarship/info-bulb.svg"
                        width="48"
                        height="48"
                                  />)}
         
            <p className={`${moreDetails ? "" : "row-start-2 row-end-3 col-start-1 col-end-3"} small text-grey500`}>
          Head over to the [Institution name] for more details on
          the scholarship and application guidelines
        </p> 
                  </div>
             
        {/* <div className="flex gap-[16px] items-start">
          <div className="h6">
            Need more information? Visit the [Institution name]
          </div>
          <Image
            alt="info"
            src="/assets/icons/scholarship/info-bulb.svg"
            width="48"
            height="48"
          />
                  </div>
                  <p>
          Head over to the [Institution name] for more details on
          the scholarship and application guidelines
        </p> */}
                  {/* { !moreDetails ?  (<p>
          Head over to the [Institution name] for more details on
          the scholarship and application guidelines
        </p>) : null} */}
       
      </div>

              <div className={`${moreDetails ? "flex-row-reverse" : "flex-col"} flex gap-[8px]`}>
        <Visitwebsite />
        <RequestInfo />
      </div>
    </div>
      </div>
      {!moreDetails ? (
        <>
           <div className="bg-white shadow-custom-13 z-[5] flex gap-[8px] p-[8px] fixed w-full left-[0] bottom-[0] lg:hidden">
     <Visitwebsite />
     <RequestInfo />
   </div>
        </>
      ) : null}
    
    </>
   
  )
}

export default ScholarshipInfo
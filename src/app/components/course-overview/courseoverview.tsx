import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const CourseOverview = ({ data, noBorder } : {data:any, noBorder:boolean }) => { 
  return (
    <>
      <div className={`${noBorder ? "" : "border-b-[1px] border-neutral300"} py-[40px] flex flex-col gap-[16px]`}>
        {data.map((data:any) => (
          <>
           <div className="flex flex-col gap-[4px]">
              <div className="h5 heading5">{data.title}</div>
              {data.description ? <p className='para'>{ data.description }</p> : null }
              
            </div>
            {data.details ? <p className='para'>{data.details}</p> : null}       
            {data.otherLabel ? (
              <>
                <div className="flex flex-col gap-[4px]">
                  <div className="para-lg font-semibold">{data.otherLabel}</div>
                  { data.otherdescription ?  <p className='para'>{ data.otherdescription }</p> : null }                  
              </div>
              </>
            ) : null }
        <div className="grid grid-cols-2 gap-[16px]">
          {data.cardGrid.map((cardList: any, index:number) => (
            <div key={index} className="flex gap-[4px] flex-col">
              <Image src={cardList.cardIcon} alt={cardList.cardImgname } width="32" height="32" />
              <div className="para-lg font-semibold">{cardList.cardTitle}</div>
              <p className='para'>{cardList.cardDetails}</p>
          </div>
          ))}          
            </div>
            {data.requirements ? (
              <div className="flex flex-col gap-[4px] pt-[16px]">
              <div className="para-lg font-semibold">Additional eligibility requirements:</div>
              <p className='para'>{ data.requirements }</p>
            </div>
            ) : null }
          
          
            {data.degress ? (
                <div className="flex flex-col gap-[4px]">
                <div className="para-lg font-semibold">Eligible Degrees</div>
                <ul className='list-disc pl-[40px] flex flex-col gap-[12px]'>
                  
                    {data.degress.map((items:any, index:number) => (
                      <li key={index} className='para'>{ items }</li>
                    ))}
                  
                  </ul>
                  </div>
                ) : null}
            
            
                {data.criteria ? (
                
                     <div className="flex flex-col gap-[4px]">
              <div className="para-lg font-semibold">Eligibility Criteria</div>
              <ul className='list-disc pl-[40px] flex flex-col gap-[12px]'>
                    {data.criteria.map((items:any) => (
                      <li className='para'>{ items }</li>
                    ))}
                    
                    </ul>
            </div>
                ) : null}
             
            
            {data.discover ? (
              <div className="flex flex-col gap-[8px]">
              <div className="para-lg font-semibold">Discover other courses eligible for this [scholarship name]/scholarship</div>
                <div className="flex flex-col gap-[8px]">
                  {data.discover.map((cardItems: any) => (
                      <div className="border shadow-custom-1 border-grey-200 rounded-[8px] p-[16px]">
                      <div className="flex gap-[4px]">
                        <span className='para font-semibold whitespace-nowrap'>Subject area(s)*</span>
                        <p className='para truncate'>{ cardItems.area }</p>                     
                      </div>
                      <div className="flex gap-[4px]">
                        <span className='para font-semibold whitespace-nowrap'>Study level:</span>
                        <p className='para truncate'>{ cardItems.level }</p>                     
                      </div>
                      <Link href="#" className='flex gap-[4px] small font-semibold text-blue-400'>View related courses
                      <Image src="/assets/icons/scholarship/arrow-right-blue.svg" className='mt-[2px]' alt='right arrow' width="18" height="18" />
                      </Link>
                    </div>
                  )) }
                
                </div>
                 </div>
              ) : null }
              
           
          </>
        ))}
       
    </div>
    </>
  )
}


export default CourseOverview ;  
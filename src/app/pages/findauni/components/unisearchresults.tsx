import Findauniresultscard from '@/app/components/cards/find-a-uni-results/findauniresultscard'
import Findauniresultsskeleton from '@/app/components/skeleton/findauniresultsskeleton';
import React from 'react'

const Unisearchresults = () => {
  return (
        <div className='uniresults-inner-container flex flex-col px-[16px] md:px-[24px] xl2:px-[0] mt-[12px] mb-[24px] gap-[8px]'>
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultsskeleton />
          <Findauniresultscard />                                  
        </div>
  )
}

export default Unisearchresults;

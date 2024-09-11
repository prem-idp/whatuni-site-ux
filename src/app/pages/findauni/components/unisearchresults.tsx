import Findauniresultscard from '@/app/common/find-a-uni-results-card/findauniresultscard'
import React from 'react'

const Unisearchresults = () => {
  return (
        <div className='uniresults-inner-container flex flex-col px-[16px] md:px-[24px] xl2:px-[0] mt-[12px] mb-[24px] gap-[8px]'>
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />
          <Findauniresultscard />                                  
        </div>
  )
}

export default Unisearchresults;

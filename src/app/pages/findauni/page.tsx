
import React from 'react';
import Unisearchresults from './components/unisearchresults';
import Countries from '@/app/common/countries-card/countriescard';
import AlphabetsCard from '@/app/common/alphabets-card/alphabetscard';
import UniversityFinder from '@/app/common/university-finder-card/universityfindercard';

const Findcourse = () => {
  return (
    <>
    <div className='find_a_uni'>
    <UniversityFinder/>
      <div className='uniresults-container pt-[108px] xl2:px-[0]'>
        <div className="max-w-container mx-auto">
          <Countries/>
          <AlphabetsCard/>
          <Unisearchresults />
        </div>
      </div> 
    </div>
    </>
  )
}

export default Findcourse
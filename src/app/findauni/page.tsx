
import React from 'react';
import Countries from '@/app/components/countries/countriescomponents';
import AlphabetsCard from '@/app/components/alphabets/alphabetscomponents';
import UniversityFinder from '@/app/components/university-finder/universityfindercomponents';
import Unisearchresults from './components/unisearchresults';

const Findcourse = () => {
  return (
    <>
      <div className="find_a_uni">
        <UniversityFinder />
        <div className="uniresults-container pt-[108px] xl2:px-[0]">
          <div className="max-w-container mx-auto">
            <Countries />
            <AlphabetsCard />
            <Unisearchresults />
          </div>
        </div>
      </div>
    </>
  );
};

export default Findcourse;

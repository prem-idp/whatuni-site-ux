import React from 'react'
import Pullquote from '../pull-quote/pull-quote';
import Ctabanner from '../cta-banner/cta-banner';

const Skiplinkdetails = () => {
    const skiplinkLabel = ['Heading skip link', 'Heading skip link', 'Heading skip link', 'Heading skip link'];
    const skiplinklabellisting = skiplinkLabel.map((skiplinkLabel, index) => (
        <li className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal ${index == 0 ? 'border-blue-400 text-blue-400' : 'border-grey-300 text-grey300' }`} key={`${skiplinkLabel}-${index + 1}`}>
            <a href={`#skiplink-${index + 1}`}>{skiplinkLabel} {index + 1}</a>
        </li>
    ));
  return (
      <>
          <div className="flex flex- col lg:flex-row gap-[20px]">
              <div className="min-w-[289px] flex flex-col lg:gap-[8px] max-w-[100%]">
                  <h2 className='text-black para font-semibold font-inter'>On this page</h2>
                  <ul>
                    {skiplinklabellisting}
                  </ul>
              </div>
              <div className="w-full">
                  <div id="skiplink-1">
                      <section className='pb-[40px]'>
                      <Ctabanner />
                    </section>
                      <section className='pb-[16px]'>
                      <Pullquote />
                     </section>
                  
                  </div>
                  <div id="skiplink-2"></div>
                  <div id="skiplink-3"></div>
                  <div id="skiplink-4"></div>                
                  <p></p>
              </div>
        </div>
      </>
  )
}

export default Skiplinkdetails;
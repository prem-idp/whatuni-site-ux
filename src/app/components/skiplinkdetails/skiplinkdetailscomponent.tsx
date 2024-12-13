import React from 'react'

const Skiplinkdetails = () => {
    const skiplinkLabel = ['Heading skip link', 'Heading skip link', 'Heading skip link', 'Heading skip link'];
    const skiplinklabellisting = skiplinkLabel.map((skiplinkLabel, index) => (
        <li className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal ${index == 0 ? 'border-blue-400 text-blue-400' : 'border-grey-300 text-grey300' }`} key={skiplinkLabel}>
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
                  <div id="skiplink-1"></div>
                  <div id="skiplink-2"></div>
                  <div id="skiplink-3"></div>
                  <div id="skiplink-4"></div>
                  <h1>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra posuere ligula, eget commodo turpis semper a. Phasellus t</h1>
                  <p></p>
              </div>
        </div>
      </>
  )
}

export default Skiplinkdetails;
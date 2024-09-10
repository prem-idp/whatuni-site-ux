import React from 'react'

const UniversityFinder = () => {
  return (
    <div className='find-card-container bg-primary-500 p-[16px] md:p-[24px] lg:py-[36px] xl2:px-[0]'>
        <div className="max-w-container mx-auto">
            <div className='find-card-inner w-full md:w-[568px] p-[16px] lg:p-[24px] flex flex-col gap-[8px] shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] bg-white -mb-[128px]'>
                <nav className='hidden lg:block' aria-label="breadcrumb">
                    <ol className="breadcrumb flex items-center gap-[10px]">
                        <li className="breadcrumb-item"><a href="#"><img src='/assets/icons/breadcrumbs-home-icon.svg' alt='home icon' /></a>
                        </li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900'>/</a></li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900 hover:text-secondary-600'>Find a uni</a></li>
                    </ol>
                </nav>
                <div className='findbar-card-container flex flex-col'>
                <h3 className='findbar-card-title font-bold text-neutral-900'>University finder</h3>
                <p className='font-normal para text-neutral-900 mb-[8px]'>Know which uni you’re looking for?</p>
                    <div className='findbar-card-body rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px]  bg-white hover:border-secondary-500 shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)]'>                        
                        <div className='findbar-card-input-group flex items-center justify-between'>
                        <div className='findbar-card-input flex justify-between w-[100%]'>              
                                <div className='flex items-center w-[calc(100%-44px)]'>
                                    <input type="text" className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]" aria-label="" placeholder='Enter uni name' />
                                </div>
                                <div className='search-btn w-[44px] h-[44px]'>
                                    <button type='submit' className='btn btn-primary w-full h-[100%] flex items-center justify-center p-[12px]'><img src='/assets/icons/search_icon.svg' alt="search icon" /></button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>   
    </div>
  )
}

export default UniversityFinder
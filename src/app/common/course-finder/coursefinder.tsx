import React from 'react'

const CourseFinder = () => {
  return (
    <div className='find-card-container bg-primary-500 p-[16px] md:p-[24px] lg:py-[36px] xl2:px-[0]'>
        <div className="max-w-container mx-auto">
            <div className='find-card-inner w-full md:w-[568px] p-[16px] lg:p-[24px] flex flex-col gap-[8px] shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] bg-white -mb-[128px]'>
                <nav className='hidden lg:block' aria-label="breadcrumb">
                    <ol className="breadcrumb flex items-center gap-[10px]">
                        <li className="breadcrumb-item"><a href="#"><img src='/assets/icons/breadcrumbs-home-icon.svg' alt='home icon' /></a>
                        </li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900'>/</a></li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900 hover:text-secondary-600'>Find a course</a></li>
                    </ol>
                </nav>
                <div className='findbar-card-container'>
                <h3 className='findbar-card-title font-bold text-neutral-900 mb-[4px]'>Find a course</h3>
                    <div className='findbar-card-body rounded-[32px] border-[1px] border-solid border-neutral-300 p-[16px]  bg-white hover:border-secondary-500 shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] md:p-[8px]'>                        
                        <div className='findbar-card-input-group flex flex-col items-start justify-between md:flex-row md:items-center divide-y md:divide-y-0 md:divide-x divide-neutral-200'>
                            <div className='findbar-card-dropdown w-full md:w-fit md:mr-[16px] mb-[14px] md:mb-[0]'>
                                <button className="btn btn-outline-secondary w-full font-normal small text-neutral-900 text-left bg-[url('/assets/icons/arrow_down_black.svg')] bg-no-repeat bg-right pl-[0px] md:pl-[20px]" type="button">Undergraduate</button>
                                {/* <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"></li> 
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul> */}
                            </div>
                            <div className='findbar-card-input flex flex-col justify-between w-[100%] md:flex-row divide-y md:divide-y-0 divide-neutral-20'>              
                                <div className='flex items-center w-full md:w-[calc(100%-114px)] my-[12px] md:my-[0]'>
                                    <input type="text" className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]" aria-label="" placeholder='Enter subject' />
                                </div>
                                <div className='search-btn pt-[24px] md:pt-[0]'>
                                    <button type='submit' className='btn btn-primary w-full flex items-center justify-center gap-[6px] py-[12px]'><img src='/assets/icons/search_icon.svg' alt="search icon" />Search</button>
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

export default CourseFinder
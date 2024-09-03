import React from 'react'

const Findbarcard = () => {
  return (
    <div className='find-card-container bg-primary-500 px-[24px] py-[36px] xl2:px-[0]'>
        <div className="max-w-container mx-auto">
            <div className='find-card-inner w-[568px] p-[24px] flex flex-col gap-[8px] shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] bg-white -mb-[128px]'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb flex items-center gap-[10px]">
                        <li className="breadcrumb-item"><a href="#"><img src='/assets/icons/breadcrumbs-home-icon.svg' alt='home icon' /></a>
                        </li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900'>/</a></li>
                        <li className="breadcrumb-item"><a href="#" className='font-normal x-small text-neutral-900 hover:text-secondary-600'>Find a course</a></li>
                    </ol>
                </nav>
                <div className='findbar-card-container'>
                <h3 className='findbar-card-title font-bold text-neutral-900'>Find a course</h3>
                    <div className='findbar-card-body rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px]  bg-white hover:border-secondary-500 shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)]'>                        
                        <div className='findbar-card-input-group flex items-center justify-between'>
                        <div className='findbar-card-dropdown'>
                            <button className="btn btn-outline-secondary font-normal small text-neutral-900 bg-[url('/assets/icons/arrow_down_black.svg')] bg-no-repeat bg-right" type="button">Undergraduate</button>
                            {/* <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul> */}
                        </div>
                        {/* <div className='w-[2px] h-[100%] divide-x-[10px] divide-neutral-200 divide-solid'></div> */}
                        <div className='findbar-card-input flex gap-[8px] justify-between w-[100%]'>              
                            <input type="text" className="form-control w-[calc(100%-114px)] focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500" aria-label="" placeholder='Enter subject' />
                            <button type='submit' className='btn btn-primary flex items-center gap-[6px] py-[12px]'><img src='/assets/icons/search_icon.svg' alt="search icon" />Search</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>   
    </div>
  )
}

export default Findbarcard
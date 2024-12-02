import React from 'react';
import Image from 'next/image';

const Testimonialcomponents = () => {
  return (
        <div className='testimonials-container bg-white'> 
            <div className="max-w-container mx-auto"> 
                <div className='testimonials-card-container px-[16px] md:px-[20px] py-[34px] md:py-[64px] xl:px-[0]'>
                    <div className='testimonials-header mb-[26px] md:mb-[32px]'>
                        <h2 className='font-bold'>Testimonials</h2>
                        <p className='font-normal small mt-[8px]'>Subheading</p>
                    </div>
                    <div className='testimonials-inner-wrap grid grid-cols-1 lg:grid-cols-2 gap-[16px]'>
                        <div className='video-container flex justify-center items-center lg:items-start xl:items-center rounded-[8px] overflow-hidden relative'>
                            <div className='video w-full'>
                                <video className="w-full" src="https://videos.ctfassets.net/szez98lehkfm/55B87nXDB6elXrfpVzAN2f/cb43e059d141307aed6dd617a202a86f/wuscas_2024_video.mp4" width="600" height="316"  controls
                                ></video>
                            </div>
                            <div className='block'>
                                <img className='block w-full'  src='/assets/images/testimonials/video_thumb_img.jpg' alt="video thumbnail image" width={600} height={316} />
                                <div className='video-play-icon absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer'>
                                    <Image src="/assets/icons/video_play_icon.svg" width="52" height="52" alt="" />                                                           
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card grid content-between p-[24px] rounded-[8px] gap-[16px] bg-primary-500'>
                            <h5 className='font-medium para-lg md:text-heading5 md:head text-white'>“Whatuni has really supported me from the moment I started thinking about university. I started scanning reviews of universities I like and it lead me to a course and university I did not expect! “</h5>
                            <div className='testimonial-footer'>
                                <div className='author-name font-semibold small text-white'>Nikki</div>
                                <p className='small text-white'>Criminology Bsc (Hons) Northumbria University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
  )
}

export default Testimonialcomponents
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dontmissout = () => {
  return (
    <div className="bg-blue-100 p-[16px] md:p-[24px] flex flex-col gap-[16px] rounded-[8px]">
      <div className="">
        <div className="h4">Don't miss out!</div>
        <span className="small font-inter font-normal text-grey300">
          Receive a monthly newsletter packed with useful tips and updates to
          help you find the right uni.
        </span>
      </div>
      {/* Successfull message  */}
      <div className="rounded-[6px] p-[16px] bg-positive-light flex justify-between border border-positive-default">
        <span className="flex items-center gap-[11px] text-positive-dark small font-inter font-semibold">
          <span>
            <Image
              alt="tick icon"
              width="14"
              height="10"
              src="assets/icons/green_tick.svg"
            />
          </span>
          Thanks, we’ll be in touch soon
        </span>
        <span className="cursor-pointer">
          <Image
            alt="close icon"
            width="20"
            height="20"
            src="assets/icons/green-closeicon.svg"
          />
        </span>
      </div>

      {/* Successfull message END */}

      <div className="">
        <form action="" className="flex flex-col gap-[16px]">
          {/* input  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              <input
                type="text"
                required
                placeholder="First name*"
                className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-negative-default rounded-[4px] outline-none shadow-custom-2"
              />
              <span className="x-small font-normal text-negative-default">
              Please enter your first name
              </span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <input
                type="text"
                required
                placeholder="Last name*"
                className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              />
              <span className="x-small font-normal text-negative-default">
              Please enter your last name
              </span>
            </div>
            <div className="md:col-span-2 lg:col-span-1 grid gap-[4px]">
              <input
                type="email"
                required
                placeholder="Email address*"
                className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              />
              <span className="x-small font-normal text-negative-default">
              Please enter your email address
              </span>
            </div>
          </div>
          {/* radio box  */}
          <div className="flex flex-col gap-[4px]">
            <label className="small font-semibold font-inter text-grey300">When would you like to start?*</label>
            <div className="flex gap-[16px] md:gap-[24px]">
              <div className="flex gap-[4px] md:gap-[16px] items-center">
                <input type="radio" className="w-[16px] h-[16px]" name="newsletter-starting" id="2025" />
                <label className="select-none cursor-pointer" htmlFor="2025">2025</label>
              </div>
              <div className="flex gap-[4px] md:gap-[16px] items-center">
                <input type="radio" className="w-[16px] h-[16px]" name="newsletter-starting" id="2026" />
                <label className="select-none cursor-pointer" htmlFor="2026">2026</label>
              </div>
              <div className="flex gap-[4px] md:gap-[16px] items-center">
                <input type="radio" className="w-[16px] h-[16px]" name="newsletter-starting" id="2027" />
                <label className="select-none cursor-pointer" htmlFor="2027">2027</label>
              </div>
              <div className="flex gap-[4px] md:gap-[16px] items-center">
                <input type="radio" className="w-[16px] h-[16px]" name="newsletter-starting" id="2028" />
                <label className="select-none cursor-pointer" htmlFor="2028">2028</label>
              </div>
            </div>           
          </div>
          {/* terms and condition  */}
          <div className="form_check flex flex-col gap-[4px]">
            <div className="form-check-group flex flex-col gap-[8px]">
              <div className="col flex items-start gap-[12px] relative">
                <div className="checkbox_card">
                  <input
                    type="checkbox"
                    className="form-checkbox hidden"
                    id="newsletters"
                  />
                  <label
                    htmlFor="newsletters"
                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] bg-white border border-grey-400 my-[6px]"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <label
                  htmlFor="newsletters"
                  className="select-none check-label small font-semibold w-[calc(100%_-_28px)]"
                >
                  <p className="select-none small font-normal text-grey-600">
                    I confirm I’m over 13 and agree to the
                    <Link
                      className="text-primary-500 underline pl-[4px]"
                      href="#"
                    >
                      terms and conditions    
                    </Link> 
                    &nbsp;and
                    <Link
                      className="text-primary-500 underline pl-[4px]"
                      href="#"
                    >
                      privacy notice
                    </Link>
                    , and agree to become a member of the
                    <Link
                      className="text-primary-500 underline pl-[4px]"
                      href="#"
                    >
                      Whatuni community
                    </Link>
                    *
                  </p>
                </label>
              </div>
              <span className="x-small font-normal text-negative-default">Please agree to our terms and conditions and privacy notice</span>
            </div>
          
          </div>
          <div className="flex justify-end">
            <button className="btn btn-primary h-[41px] px-[20px] py-[10px] flex justify-end gap-[10px] items-center">
              Get free newsletters
              <Image
                src="/assets/icons/arrow-right-white.svg"
                width="13"
                height="10"
                alt="arrow"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dontmissout;

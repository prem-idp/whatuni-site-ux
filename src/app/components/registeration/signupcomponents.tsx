"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Signupcomponents = () => {
  useEffect(() => {
    const body = document.body;
    body.classList.add("overflow-y-hidden");
  }, []);
  return (
    <div className="registeration-container flex flex-col md:flex-row h-[100vh] overflow-auto md:h-[100%]">
      <div className="regist-col min-w-[309px] w-full md:w-[309px]  flex flex-col justify-center gap-[20px] md:gap-[24px]  px-[24px] py-[24px] md:py-[45px] bg-blue-200 hidden md:flex">
        <div className="flex justify-start md:justify-center gap-[12px]">
          <Image
            className="block"
            src="/assets/images/registeration/regist_hero_image.png"
            width="97"
            height="129"
            alt="hero image"
          />
          <h5 className="self-center text-left text-[24px] leading-[31px] block md:hidden">
            Why create an account?
          </h5>
        </div>
        <div className="flex flex-col gap-[8px] md:px-[8px]">
          <h5 className="text-center hidden md:block">
            Why create an account?
          </h5>
          <ul className="flex flex-col gap-[16px]">
            <li className="flex flex-row items-start justify-start">
              <div className="min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]"></div>
              <div>
                <div className="small font-semibold text-grey300 line-clamp-1">
                  Save your results:
                </div>
                <div className="small font-normal text-grey300 line-clamp-2">
                  Keep your cost of living estimates so you can check them
                  anytime
                </div>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start">
              <div className="min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]"></div>
              <div>
                <div className="small font-semibold text-grey300 line-clamp-1">
                  Build your shortlist:
                </div>
                <div className="small font-normal text-grey300 line-clamp-2">
                  Add universities to your favourites, making it easy to compare
                </div>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start">
              <div className="min-w-[5px] w-[5px] h-[5px] bg-grey300 rounded-[50%] mx-[10px] my-[8px] ml-[0]"></div>
              <div>
                <div className="small font-semibold text-grey300 line-clamp-1">
                  Unlock insights:
                </div>
                <div className="small font-normal text-grey300 line-clamp-2">
                  Quickly view costs by university, city, and region
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="regist-col w-full flex items-center relative">
        {/* <Signupcomponents /> */}
        <div className="signup w-full flex flex-col self-start px-[16px] md:px-[24px] md:pr-0 py-[16px] md:py-[40px] gap-[16px]">
          <h6 className="text-grey300">Sign up with email</h6>
          <div className="small font-semibold text-grey300 text-center">
            Already have an account?{" "}
            <Link
              href="/registeration/signin"
              className="text-primary-400 hover:text-primary-500 hover:underline"
            >
              Sign in
            </Link>{" "}
          </div>
          <form className="signup_form w-full h-full">
            <div className="form_container flex flex-col gap-[16px] pb-[160px] md:pb-[70px] md:pr-[24px] md:custom-scrollbar-2 md:max-h-[345px] md:overflow-y-auto">
              <div className="form_group flex flex-col md:flex-row gap-[8px]">
                <div className="col flex flex-col basis-full md:basis-6/12 gap-[4px]">
                  <label
                    htmlFor="firstName"
                    className="form-label small font-semibold text-grey300"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                    id="firstName"
                    defaultValue="Neil"
                  />
                  <div className="success_msg">
                    <p className="x-small font-normal text-positive-default">
                      Nice to meet you
                    </p>
                  </div>
                  <div className="err_msg">
                    <p className="x-small font-normal text-negative-default">
                      We still don’t know your name, Remind us?
                    </p>
                  </div>
                </div>
                <div className="col  flex flex-col basis-6/12 gap-[4px]">
                  <label
                    htmlFor="lastName"
                    className="form-label small font-semibold text-grey300"
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                    id="lastName"
                    defaultValue="Burgess"
                  />
                  <div className="err_msg">
                    <p className="x-small font-normal text-negative-default">
                      We still don’t know your name, Remind us?
                    </p>
                  </div>
                </div>
              </div>
              <div className="form_field">
                <div className="col flex flex-col basis-full gap-[4px] error">
                  <label
                    htmlFor="emailAddress"
                    className="form-label small font-semibold text-grey300"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                    id="emailAddress"
                    defaultValue="neil.burgess@idp.com"
                  />
                  <div className="err_msg">
                    <p className="x-small font-normal text-negative-default">
                      Please enter a valid email address
                    </p>
                  </div>
                </div>
              </div>
              <div className="form_field">
                <div className="col flex flex-col basis-full gap-[4px]">
                  <label
                    htmlFor="password"
                    className="form-label small font-semibold text-grey300"
                  >
                    Password*
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                      id="password"
                    />
                    <div className="err_msg">
                      <p className="x-small font-normal text-negative-default">
                        We still don’t know your password. Remind us?
                      </p>
                    </div>
                    <button
                      className="cursor-pointer absolute top-[12px] right-[11px] w-[20px] h-[20px] form-field__icon"
                      aria-label="hide password"
                      role="button"
                      type="button"
                    >
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.39742 0.897461L4.03037 3.53041M14.6019 14.102L11.9692 11.4693M9.37504 12.5061C8.92964 12.5906 8.46999 12.6348 8.00001 12.6348C4.71527 12.6348 1.93477 10.4759 1 7.49969C1.25448 6.68947 1.64574 5.93983 2.14672 5.27782M6.4435 5.94355C6.84176 5.54529 7.39195 5.29896 7.99967 5.29896C9.21511 5.29896 10.2004 6.28427 10.2004 7.49971C10.2004 8.10743 9.95409 8.65762 9.55584 9.05588M6.4435 5.94355L9.55584 9.05588M6.4435 5.94355L4.03037 3.53041M9.55584 9.05588L4.03037 3.53041M9.55584 9.05588L11.9692 11.4693M4.03037 3.53041C5.17463 2.79271 6.53732 2.36463 7.99999 2.36463C11.2847 2.36463 14.0652 4.5235 15 7.49974C14.4814 9.15081 13.3948 10.5503 11.9692 11.4693"
                          stroke="#5C656E"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className="hidden"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2004 6.50032C10.2004 7.71576 9.21511 8.70107 7.99967 8.70107C6.78423 8.70107 5.79892 7.71576 5.79892 6.50032C5.79892 5.28488 6.78423 4.29957 7.99967 4.29957C9.21511 4.29957 10.2004 5.28488 10.2004 6.50032Z"
                          stroke="#5C656E"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 6.5003C1.93479 3.52408 4.71528 1.36523 7.99999 1.36523C11.2847 1.36523 14.0652 3.52411 15 6.50035C14.0652 9.47656 11.2847 11.6354 8.00001 11.6354C4.71527 11.6354 1.93477 9.47654 1 6.5003Z"
                          stroke="#5C656E"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="form_group flex flex-row gap-[8px]">
                <div className="col flex flex-col basis-6/12 gap-[4px] error">
                  <label
                    htmlFor="postcode"
                    className="form-label small font-semibold text-grey300"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                    id="postcode"
                    value="EH16DJ"
                  />
                </div>
                <div className="col  flex flex-col basis-6/12 justify-end gap-[4px]">
                  <div className="postalcode hints">
                    <Link
                      href=""
                      className="tooltip group/item relative small font-normal text-primary-400 underline"
                    >
                      Why do we need your postcode?
                      <div
                        className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[3px] absolute right-[-76px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[60%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                      >
                        <span className="font-semibold tooltip-head">
                          Why do we need your postcode?
                        </span>
                        <p className="x-small">
                          We use this information to help assess the reach of
                          our products. This is completely optional.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="form_radio flex flex-col gap-[4px]">
                <label className="check-label small font-semibold text-grey300">
                  When do you plan to start uni?
                </label>
                <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
                  <div className="col flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2025"
                    />
                    <label
                      htmlFor="2025"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2025
                    </label>
                  </div>
                  <div className="col flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2026"
                    />
                    <label
                      htmlFor="2026"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2026
                    </label>
                  </div>
                  <div className="col flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2027"
                    />
                    <label
                      htmlFor="2027"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2027
                    </label>
                  </div>
                  <div className="col flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2028"
                    />
                    <label
                      htmlFor="2028"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2028
                    </label>
                  </div>
                </div>
                <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
                  <div className="col flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="col flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="col flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="col flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                </div>
              </div>
              <div className="form_check flex flex-col gap-[4px]">
                <label className="check-label small font-semibold text-grey300">
                  Stay up to date via email{" "}
                  <span className="x-small font-normal text-grey-700">
                    (optional)
                  </span>
                </label>
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
                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                      className="check-label small font-semibold w-[calc(100%_-_28px)]"
                    >
                      <span className="x-small font-semibold text-grey-600">
                        Newsletters and uni updates{" "}
                        <span className="x-small font-normal text-grey-700">
                          (tick to opt in)
                        </span>
                      </span>
                      <p className="x-small font-normal text-grey-600">
                        Emails from us and our carefully selected third party
                        providers providing you with the latest uni news, tips
                        and guides.
                      </p>
                    </label>
                  </div>
                  <div className="col flex items-start gap-[12px] relative">
                    <div className="checkbox_card">
                      <input
                        type="checkbox"
                        className="form-checkbox hidden"
                        id="Surveys"
                      />
                      <label
                        htmlFor="Surveys"
                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                      htmlFor="Surveys"
                      className="check-label small font-semibold w-[calc(100%_-_28px)]"
                    >
                      <span className="x-small font-semibold text-grey-600">
                        Surveys{" "}
                        <span className="x-small font-normal text-grey-700">
                          (tick to opt in)
                        </span>
                      </span>
                      <p className="x-small font-normal text-grey-600">
                        Have your say on important education issues and the
                        services you recieve from us and our partners
                      </p>
                    </label>
                  </div>
                  <div className="col privacy_notice flex items-start gap-[12px] relative pt-[16px] mt-[7px] border-t border-t-grey-200">
                    <div className="checkbox_card">
                      <input
                        type="checkbox"
                        className="form-checkbox hidden"
                        id="privacy"
                      />
                      <label
                        htmlFor="privacy"
                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[3px]"
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                      htmlFor="privacy"
                      className="check-label small font-semibold w-[calc(100%_-_28px)]"
                    >
                      <p className="x-small font-normal text-grey-600">
                        I confirm I’m over 13 and agree to the{" "}
                        <Link
                          href=""
                          className="text-primary-400 hover:text-primary-500 hover:underline"
                        >
                          terms and conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href=""
                          className="text-primary-400 hover:text-primary-500 hover:underline"
                        >
                          privacy notice
                        </Link>
                        , and to become a member of the Whatuni community*
                      </p>
                    </label>
                  </div>
                  <div className="err_msg">
                    <p className="x-small font-normal text-negative-default">
                      Please agree to our terms and conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup_btn px-[16px] md:px-[24px] py-[16px] w-full fixed md:absolute bottom-0 left-0 z-[2] border-t border-t-grey-200 bg-white">
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
              >
                Sign up{" "}
                <Image
                  src="/assets/icons/right_white_arrow.svg"
                  width="17"
                  height="14"
                  alt="arrow icon"
                />
              </button>
            </div>
          </form>
        </div>
        {/* <Signupcomponents /> */}
      </div>
    </div>
  );
};

export default Signupcomponents;

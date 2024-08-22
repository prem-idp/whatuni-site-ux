import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="bg-success-300">
        <div className="px-[16px] lg-px[0] lg:py-[12px] border-b border-neutral-900">
          <div className="max-w-container mx-auto flex justify-between items-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              className="block lg:hidden"
              aria-label="Mobile navigation"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="1" width="20" height="2" rx="1" fill="#1C1F2A"></rect>
              <rect y="8" width="20" height="2" rx="1" fill="#1C1F2A"></rect>
              <rect y="15" width="20" height="2" rx="1" fill="#1C1F2A"></rect>
            </svg>
            <a href="#" className="flex items-center">
              <Image
                width={70}
                height={76}
                src="assets/images/whatuni-logo.svg"
                className="w-full"
                alt="Whatuni Logo"
              />
            </a>
            <div>
              <div className="flex items-center gap-[16px]">
                <a href="#" className="btn-secondary-outline">
                  Signin
                </a>
                <a href="#" className="relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                        fill="#00BBFD"
                        stroke="#3460DC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="absolute inline-flex items-center justify-center w-[16px] h-[16px] rounded-[20px] top-0 bg-success-500 text-neutral-900">
                      20
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-warning-200 px-[16px] lg-px[0] lg:pt-[10px] lg:pb-[6px]">
          <div className="flex justify-center">
            <ul className="flex flex-row">
              <li>
                <a href="#" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <h1 className="font-regular">h1</h1>

      <h2 className="font-semibold">h1</h2>

      <h3 className="font-bold">h1</h3>


      <h1 className="font-poppins font-normal">h1</h1>

      <h2 className="font-poppins font-semibold	">h1</h2>

      <h3 className="font-poppins font-bold	">h1</h3> 
    </>
  );
};

export default Header;

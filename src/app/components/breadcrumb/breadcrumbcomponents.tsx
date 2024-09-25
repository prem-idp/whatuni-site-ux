import React from "react";
import Image from "next/image";

const BreadCrumbs = () => {
  return (
    <>
      <nav className="hidden lg:block" aria-label="breadcrumb">
        <ol className="breadcrumb flex items-center gap-[10px]">
          <li className="breadcrumb-item">
            <a href="#">
              <Image src="/assets/icons/breadcrumbs-home-icon.svg" width="17" height="18" alt="home icon" />
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="font-normal x-small text-neutral-900">
              /
            </a>
          </li>
          <li className="breadcrumb-item">
            <a
              href="#"
              className="font-normal x-small text-neutral-900 hover:text-secondary-600"
            >
              Find a uni
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumbs;

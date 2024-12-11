import React from "react";
import Link from "next/link";

const Breadcrumblayoutcomponent = ({ data }) => {

  const breadcrumbList = data.map((breadcrumbData:any) => (
    <li className="inter small" key={breadcrumbData.label}>
      {breadcrumbData.url ? (
        <Link
          className='text-primary-400 hover:underline after:absolute after:content-["/"] after:w-[20px] after:h-[20px] after:text-center after:text-grey-300'
          href={breadcrumbData.url}
        >
          {breadcrumbData.label}
        </Link>
      ) : (
        <span className="text-grey-400">{breadcrumbData.label}</span>
      )}
    </li>
  ));

  return (    
    <nav aria-label="breadcrumb" className="px-[16px] lg:px-[0]">
      <ul className="flex flex-wrap gap-[20px]">{breadcrumbList}</ul>
    </nav>
);
};

export default Breadcrumblayoutcomponent;

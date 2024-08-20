import React from "react";
import classes from "./breadcrumb.module.css";
import Link from "next/link";
interface BreadcrumbItem {
  data: [{ name: string; url: string }];
}

const Breadcrumb = ({ data }: BreadcrumbItem) => {
  return (
    <div>
      <ul className={classes.bread_crumb}>
        {data.map((item, index) => (
          <li key={index} className={classes.breadcrumb_item}>
            {index === data.length - 1 ? (
              <span>{item.name}</span>
            ) : (
              <Link href={item.url} prefetch={false}>
                {item.name}
              </Link>
            )}
            {index < data.length - 1 && " / "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;

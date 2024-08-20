"use client";
import React, { useState } from "react";
import classes from "./navbar.module.css";
interface propstype {
  data: [
    {
      headerMenuLink: string;
      headerMenuName: string;
      childMenu: [{ headerChildMenuLink: string; headerChildMenuName: string }];
    }
  ];
}
export default function Navbar({ data }: propstype) {
  const [hoveredItem, setHoveredItem] = useState<number>();

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };
  const handleMouseLeave = () => {
    setHoveredItem(0);
  };

  return (
    <>
      <ul className={classes.nav_bar}>
        {data.map((item, index) => (
          <li
            key={index}
            className={classes.headerMenuName}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.headerMenuLink}>{item.headerMenuName}</a>
            {item.childMenu && index === hoveredItem && (
              <ul className={classes.childheadername}>
                {item.childMenu.map((childItem, childIndex) => (
                  <li key={childIndex} className={classes.headerChildMenuName}>
                    <a href={childItem.headerChildMenuLink}>
                      {childItem.headerChildMenuName}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

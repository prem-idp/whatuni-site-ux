"use client";
import React from "react";
import classes from "./stickbanner.module.css";
interface propstypes {
  data: {
    title: string;
    description: string;
    ctaUrl: string;
    ctaTitle: string;
  };
}
export default function Sticky({ data }: propstypes) {
  return (
    <div className={classes.banner}>
      <div className={classes.part1}>
        <img src="/bulb-blue-icon.svg" alt="iconsofbulb" />
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div className={classes.part2}>
        <a href={data.ctaUrl}>
          <button>{data.ctaTitle}</button>
        </a>
      </div>
    </div>
  );
}

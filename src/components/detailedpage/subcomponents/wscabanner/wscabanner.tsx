"use client";
import React from "react";
import classes from "./wscabanner.module.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
interface propstypes {
  data: {
    title: string;
    description: string;
    ctaUrl: string;
    ctaName: string;
    desktopImage: string;
  };
}
export default function Banner({ data }: propstypes) {
  return (
    <>
      <div className={classes.p_div}>
        <div className={classes.c1_div}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div>
            <a href={data.ctaUrl}>
              {data.ctaName} <EastOutlinedIcon />
            </a>
          </div>
        </div>
        <div className={classes.dummy}></div>
        <div className={classes.c2_div}>
          <img
            height={200}
            width={300}
            src={data.desktopImage}
            alt="wscabanner"
          />
        </div>
      </div>
      <hr></hr>
    </>
  );
}

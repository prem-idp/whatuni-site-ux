"use client";
import React, { useState, useEffect } from "react";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import classes from "./moersubject.module.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Link from "next/link";
interface propstype {
  data: {
    moreSubjectGuide: [
      {
        title: string;
        subjectGuideUrl: string;
        imageUrl: string;
        label: string;
      }
    ];
    title: string;
    moreLinkTitle: string;
    moreLinkUrl: string;
  };
}
interface moresubject {
  title: string;
  subjectGuideUrl: string;
  imageUrl: string;
  label: string;
}
export default function MoreSubject({ data }: propstype) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataOfThree, setDataOfThree] = useState<moresubject[]>([]);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const len: number = data.moreSubjectGuide.length;

    const one: number = currentIndex % len;
    const two: number = (currentIndex + 1) % len;
    const three: number = (currentIndex + 2) % len;

    const newDataOfThree = [
      data.moreSubjectGuide[one],
      data.moreSubjectGuide[two],
      data.moreSubjectGuide[three],
    ];

    setDataOfThree(newDataOfThree);
    setKey((prevKey) => prevKey + 1);
  }, [currentIndex, data.moreSubjectGuide]);

  const previousImage = () => {
    const newIndex: number =
      currentIndex === 0 ? data.moreSubjectGuide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex: number =
      currentIndex === data.moreSubjectGuide.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={classes.subjectsparent}>
        <h2>{data.title}</h2>
        <div className={classes.sidebar}>
          <div className={classes.leftArrow} onClick={previousImage}>
            <ArrowCircleLeftRoundedIcon
              sx={{ color: "white", padding: "0px", fontSize: "50px" }}
              data-testid="left-arrow"
            />
          </div>
          <div className={classes.img_bar}>
            {dataOfThree.map((items) => (
              <Link
                className={classes.subjects_div}
                key={`${items.title}-${key}`}
                href={items.subjectGuideUrl.split("/").slice(3).join("/")}
                data-testid="subject-item"
              >
                <img
                  src={items.imageUrl}
                  alt={items.title}
                  className={classes.subjects_image}
                />
                <p>{items.label}</p>
                <h4>{items.title}</h4>
              </Link>
            ))}
          </div>
          <div className={classes.rightArrow} onClick={nextImage}>
            <ArrowCircleRightRoundedIcon
              sx={{ color: "white", padding: "0px", fontSize: "50px" }}
              data-testid="right-arrow"
            />
          </div>
        </div>
      </div>
      <div className={classes.moresubject}>
        <center>
          <Link href="/">
            {data.moreLinkTitle} <EastOutlinedIcon />
          </Link>
        </center>
      </div>
    </>
  );
}

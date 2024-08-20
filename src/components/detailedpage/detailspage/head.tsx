"use client";
import React from "react";
import Detaildata from "./fom-and-cfd";
import BreadCrumb from "../../breadcrumb/breadcrumb";
import classes from "./detailspage.module.css";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Sticky from "../subcomponents/stickybanner/stickbanner";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface propstypes {
  sgdata: {
    typeOfDegrees: {
      typeOfDegrees: { richContentTitle: string; richContent: Document };
      findOutMore: {
        title: string;
        findOutMoreList: [{ url: string; title: string }];
      };
    };
    entryRequirements: {
      sectionDetails: { richContentTitle: string; richContent: Document };
      findOutMore: {
        title: string;
        findOutMoreList: [{ url: string; title: string }];
      };
    };
    whatSubject: {
      whatSubject: { richContentTitle: string; richContent: Document };
      findOutMore: {
        title: string;
        findOutMoreList: [{ url: string; title: string }];
      };
    };
    specialization: {
      specialization: { richContentTitle: string; richContent: Document };
      findOutMore: {
        title: string;
        findOutMoreList: [{ url: string; title: string }];
      };
    };
    typicalTopics: {
      typicalTopics: { richContentTitle: string; richContent: Document };
    };
    whatWillYouLearn: {
      whatWillYouLearn: { richContentTitle: string; richContent: Document };
    };
    professionalAccreditations: {
      professionalAccreditations: {
        richContentTitle: string;
        richContent: Document;
      };
    };

    alternative: {
      alternative: { richContentTitle: string; richContent: Document };
    };
    careers: {
      firstPara: { richContentTitle: string; richContent: Document };
      findOutMore: {
        title: string;
        findOutMoreList: [{ url: string; title: string }];
      };
    };
    wuscaBanner: {
      title: string;
      description: string;
      ctaUrl: string;
      ctaName: string;
      desktopImage: string;
    };
    heroImageDesktop: string;
    breadcrumb: [{ name: string; url: string }];
    pageTitle: string;
    description: string;
    skipLink: {
      sectionTitle: string;
      sectionContent: [{ innerlinkText: string; id: number }];
    };
    stickyBanner: {
      title: string;
      description: string;
      ctaUrl: string;
      ctaTitle: string;
    };
  };
}
const Head = ({ sgdata }: propstypes) => {
  return (
    <div>
      <div className={classes.heroimage}>
        <Image
          src={`https:${sgdata.heroImageDesktop}`}
          width={1440}
          height={400}
          alt="hero "
          priority
        />
      </div>
      <div className={classes.stick_div}>
        <div className={classes.detail_div}>
          <div className={classes.breadcrumb}>
            <BreadCrumb data={sgdata.breadcrumb} />
          </div>

          <h1 className={classes.h1_tag}>{sgdata.pageTitle}</h1>

          <p className={classes.p_tag}>{sgdata.description}</p>

          <div className={classes.icons}>
            <FacebookOutlinedIcon
              sx={{ color: "#3460dc", fontSize: "40px", marginLeft: "5px" }}
            />
            <TwitterIcon
              sx={{
                color: "white",
                fontSize: "35px",
                backgroundColor: "#00bbfd",
                borderRadius: "20px",
                marginLeft: "5px",
              }}
            />
            <PinterestIcon
              sx={{
                fontSize: "40px",
                color: "red",
                marginLeft: "5px",
              }}
            />
          </div>
          <h5 className={classes.h5_tag}>{sgdata.skipLink.sectionTitle}</h5>
          <div>
            {sgdata.skipLink.sectionContent.map((item) => (
              <div className={classes.a_div} key={item.id}>
                <h2>-</h2>
                <p>{item.innerlinkText}</p>
              </div>
            ))}
          </div>
          <div className={classes.horizontal_line}></div>
          <Detaildata sgdata={sgdata} />
        </div>
        <div className={classes.stickyBanner}>
          <Sticky data={sgdata.stickyBanner} />
        </div>
      </div>
    </div>
  );
};

export default Head;

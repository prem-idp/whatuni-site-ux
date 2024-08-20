"use client";
import React from "react";
import classes from "./detailspage.module.css";
import FindOutMore from "../subcomponents/fom/fom";
import Banner from "../subcomponents/wscabanner/wscabanner";
import ContentFull from "../subcomponents/contentfull/contentfull";
import { Document } from "@contentful/rich-text-types";
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
  };
}
const Detaildata = ({ sgdata }: propstypes) => {
  return (
    <>
      <ContentFull data={sgdata.typeOfDegrees.typeOfDegrees} />
      <FindOutMore data={sgdata.typeOfDegrees.findOutMore} />
      <div className={classes.tables}>
        <ContentFull data={sgdata.entryRequirements.sectionDetails} />
      </div>
      <FindOutMore data={sgdata.entryRequirements.findOutMore} />
      <ContentFull data={sgdata.whatSubject.whatSubject} />
      <FindOutMore data={sgdata.whatSubject.findOutMore} />
      <Banner data={sgdata.wuscaBanner} />
      <ContentFull data={sgdata.specialization.specialization} />
      <FindOutMore data={sgdata.specialization.findOutMore} />
      <ContentFull data={sgdata.typicalTopics.typicalTopics} />
      <ContentFull data={sgdata.whatWillYouLearn.whatWillYouLearn} />
      <ContentFull
        data={sgdata.professionalAccreditations.professionalAccreditations}
      />
      <ContentFull data={sgdata.alternative.alternative} />
      <ContentFull data={sgdata.careers.firstPara} />
      <FindOutMore data={sgdata.careers.findOutMore} />
    </>
  );
};
export default Detaildata;

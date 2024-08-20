"use server";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import classes from "../../../../components/detailedpage/detailspage/detailspage.module.css";
import MoreSubject from "../../../../components/detailedpage/subcomponents/moresubject/moresubject";
import Head from "@/components/detailedpage/detailspage/head";
import FetchData from "../fetch-data";
import { Metadata } from "next";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const inputdata: { affiliateId: string } = { affiliateId: "220703" };
  const initend: string = process.env.API_URL_DETAILPAGE!;
  const endpoint: string = `${initend}${params.slug}?affiliateId=${inputdata.affiliateId}`;
  const data = await FetchData(endpoint);
  return {
    title: data.seoDetails.metaTitle,
    description: data.seoDetails.metaDescription,
    keywords: data.seoDetails.metaKeywords,
    robots: data.seoDetails.metaRobots,
  };
}
interface propstype {
  params: {
    slug: string;
  };
}
export default async function Details({ params }: propstype) {
  const subjectGuide: string = params.slug;
  const inputdata: { affiliateId: string } = { affiliateId: "220703" };
  const initend: any = process.env.API_URL_DETAILPAGE;
  const endpoint: string = `${initend}${subjectGuide}?affiliateId=${inputdata.affiliateId}`;
  const data = await FetchData(endpoint);

  return (
    <>
      <Header />
      {data && data.headerAndFooterMenu?.headerMenu && (
        <Navbar data={data.headerAndFooterMenu.headerMenu} />
      )}
      {data && <Head sgdata={data} />}
      <div className={classes.horizontal_line}></div>
      {data && data.moreSubjectGuides && (
        <MoreSubject data={data.moreSubjectGuides} />
      )}
      {data && data.headerAndFooterMenu?.footerMenu && (
        <Footer footerMenu={data.headerAndFooterMenu.footerMenu} />
      )}
    </>
  );
}

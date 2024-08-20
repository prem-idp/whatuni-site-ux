"use server";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Navbar from "@/components/navbar/navbar";
import SearchSubject from "@/components/search/search";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import FetchData from "./fetch-data";
import { Metadata } from "next";
interface propstype {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export async function generateMetadata({
  params,
  searchParams,
}: propstype): Promise<Metadata> {
  const endpoint: any = process.env.API_URL_HOME;
  var queryParams: { [key: string]: string | number } = {
    affiliateId: 220703,
    sort: "A-Z",
    pageNo: "1",
  };
  if (searchParams) {
    queryParams = {
      ...searchParams,
      affiliateId: 220703,
    };
  }
  const url = new URL(endpoint);
  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key].toString())
  );
  const data = await FetchData(url.toString());
  return {
    title: data.seoDetails.metaTitle,
    description: data.seoDetails.metaDescription,
    keywords: data.seoDetails.metaKeywords,
    robots: data.seoDetails.metaRobots,
  };
}

export default async function Home(NextPageContext: propstype) {
  const searchParams = NextPageContext.searchParams;
  const endpoint: any = process.env.API_URL_HOME;
  var queryParams: { [key: string]: string | number } = {
    affiliateId: 220703,
    sort: "A-Z",
    pageNo: "1",
  };
  if (searchParams) {
    queryParams = {
      ...searchParams,
      affiliateId: 220703,
    };
  }
  const url = new URL(endpoint);
  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key].toString())
  );
  const data = await FetchData(url.toString());

  return (
    <>
      <Header />
      {data?.headerAndFooterMenu?.headerMenu && (
        <Navbar data={data.headerAndFooterMenu.headerMenu} />
      )}
      {data?.breadcrumb && <Breadcrumb data={data.breadcrumb} />}
      {data?.breadcrumb && <SearchSubject />}
      {data?.sujectGuides?.subjectGuideList &&
        data?.totalResultText &&
        data?.sortBy && (
          <Card
            data={data.sujectGuides.subjectGuideList}
            totalresult={data.totalResultText}
          />
        )}
      {data?.headerAndFooterMenu?.footerMenu && (
        <Footer footerMenu={data.headerAndFooterMenu.footerMenu} />
      )}
    </>
  );
}

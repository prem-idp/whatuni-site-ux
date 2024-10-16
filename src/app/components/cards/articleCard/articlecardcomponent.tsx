import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CarouselItem } from "@/app/types/types";

const ArticleCardComponent = ({
  articleImg = "",
  articleTitle,
  articleContent,
  articlePostedDate,
}: Pick<
  CarouselItem,
  "articleImg" | "articleTitle" | "articleContent" | "articlePostedDate"
>) => {
  return (
    <Link href={"/"}>
      <div className="group">
        <Image
          src={articleImg}
          alt="article"
          width={392}
          height={221}
          className="group-hover:opacity-85"
        />
        <div className="p-[16px]">
          <p className="font-semibold font-farro para-lg mb-[8px] lg:group-hover:text-primary-400">
            {articleTitle}
          </p>
          <p className="line-clamp-2 mb-[16px] text-grey500">{articleContent}</p>
          <p>{articlePostedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCardComponent;

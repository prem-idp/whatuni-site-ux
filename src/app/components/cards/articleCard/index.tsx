import Image from "next/image"
import Link from "next/link"
import React from "react"
import { CarouselItem } from "@/app/types/types"

const ArticleCard = ({
  articleImg = "",
  articleTag,
  articleTitle,
  articleContent,
  articlePostedDate,
}: Pick<
  CarouselItem,
  | "articleImg"
  | "articleTag"
  | "articleTitle"
  | "articleContent"
  | "articlePostedDate"
>) => {
  return (
    <Link href={"/"}>
    <div className="group">
      <Image
        src={articleImg}
        alt="article"
        width={289}
        height={80}
        className="group-hover:opacity-85"
      />
     
        <div className="mt-[16px] mb-[8px]">
          <p className="text-grey500 text-x-small font-semibold uppercase tracking-[1px] mb-[4px]">
            {articleTag}
          </p>
          <p className="text-primary400 lg:text-grey600 font-semibold text-para-lg lg:group-hover:text-primary400">
            {articleTitle}
          </p>
        </div>

        <p className="line-clamp-2 mb-[16px] text-small text-grey700">
          {articleContent}
        </p>
        <p className="text-neutral500 text-x-small">{articlePostedDate}</p>
    </div>
    </Link>
  )
}

export default ArticleCard

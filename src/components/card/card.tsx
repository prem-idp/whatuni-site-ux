"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import classes from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

interface propstypes {
  data: [
    { sujectGuideUrl: string; imageUrl: string; title: string; label: string }
  ];
  totalresult: number;
}
export default function Card({ data, totalresult }: propstypes) {
  const router = useRouter();

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    console.log("window.location.href", window.location.href);
    console.log("searchParams", searchParams);
    const sortPara = searchParams.get("sort");
    console.log("sortParam", sortPara);
    if (sortPara) {
      setSortvalue(sortPara);
    }
  }, []);
  const [sortvalue, setSortvalue] = useState<string>("A-Z");
  function handleroute(event: any) {
    const value = event.target.value;
    console.log(value);
    setSortvalue(value);
    const queryParams = { param1: value };
    if (router) {
      router.push(`/?sort=${queryParams.param1}`, { scroll: false });
    }
  }

  return (
    <div className={classes.cards}>
      <div className={classes.head_cards}>
        <h4>{totalresult}</h4>
        <div className={classes.sortoptions}>
          <h4>sort by:</h4>
          <select value={sortvalue} onChange={handleroute}>
            <option value="A-Z">Name A-Z</option>
            <option value="Z-A">Name Z-A</option>
          </select>
        </div>
      </div>
      <div className={classes.subject_guide_container}>
        {data.map((subject, index) => (
          <Link
            href={`${subject.sujectGuideUrl}`}
            key={index}
            data-testid="img"
            className={classes.subject_guide_items}
          >
            <Image
              data-testid="logo-uni"
              src={`https:${subject.imageUrl}`}
              alt={subject.title}
              className={classes.subject_guide_image}
              height={200}
              width={200}
              priority
            />

            <p className={classes.cardp}>{subject.label}</p>
            <h3 className={classes.cardh3}>{subject.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

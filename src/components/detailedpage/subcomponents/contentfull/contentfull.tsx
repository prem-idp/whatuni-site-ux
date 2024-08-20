import React from "react";
import classes from "./contentfull.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
interface propstype {
  data: { richContentTitle: string; richContent: Document };
}
export default function ContentFull({ data }: propstype) {
  return (
    <div className={classes.ContentFull}>
      <h2>{data.richContentTitle}</h2>
      {documentToReactComponents(data.richContent, {})}
    </div>
  );
}

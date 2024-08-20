import React from "react";
import classes from "./fom.module.css";
interface propstypes {
  data: { title: string; findOutMoreList: [{ url: string; title: string }] };
}
export default function FindOutMore({ data }: propstypes) {
  return (
    <>
      <div className={classes.fom_div}>
        <h4>{data.title}</h4>
        <div>
          {data.findOutMoreList.map((item) => (
            <div key={item.url} className={classes.adiv}>
              <a href={item.url}>{item.title}</a>
              <br></br>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
    </>
  );
}

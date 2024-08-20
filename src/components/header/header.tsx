"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import classes from "./header.module.css";
import Image from "next/image";
import Popup from "../popup/popup";

import { BlockList } from "net";

export default function Header() {
  const [popup, setPopup] = useState<boolean>(false);

  const handlePopupChange = () => {
    setPopup((prev) => !prev);
  };
  return (
    <>
      {popup && <Popup callback={handlePopupChange} />}
      <div className={classes.header_comp}>
        <Image
          width={100}
          height={100}
          src="/whatunilogo.jpg"
          alt="logo"
          data-testid="whatuni-logo"
          className={classes.whatuni_logo}
        />
        <div className={classes.input_div} onClick={handlePopupChange}>
          <p>Search for courses,universities</p>
          <SearchIcon
            sx={{
              borderRadius: "100px",
              backgroundColor: "#173EAD",
              color: "white",
              padding: "10px",
              fontSize: "large",
            }}
            data-testid="search-icon"
          />
        </div>
        <div className={classes.like_btn}>
          <button>Sign in</button>
          <FavoriteBorderIcon />
        </div>
      </div>
    </>
  );
}

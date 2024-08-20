"use client";
import React from "react";
import classes from "./footer.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteSharpIcon from "@mui/icons-material/MusicNoteSharp";
import Image from "next/image";
import Link from "next/link";
interface propstypes {
  footerMenu: {
    quickLinksLabel: string;
    quickLinks: [{ footerChildMenuLink: string; footerChildMenuName: string }];
    browseLabel: string;
    browse: [{ footerChildMenuLink: string; footerChildMenuName: string }];
    popularSubjectsLabel: string;
    popularSubjects: [
      { footerChildMenuLink: string; footerChildMenuName: string }
    ];
  };
}
const Footer = ({ footerMenu }: propstypes) => {
  return (
    <div className={classes.footerfull}>
      <div className={classes.horizontal_line}></div>
      <div className={classes.footer}>
        <div className={classes.footer_column}>
          <div className={classes.footer_column1}>
            <h4>connect</h4>
            <div className={classes.icons}>
              <FacebookRoundedIcon />
              <XIcon />
              <InstagramIcon />
              <MusicNoteSharpIcon />
            </div>

            <Image
              src="/applestore.svg"
              width={200}
              height={50}
              className={classes.image}
              alt="applestoreicon"
            />

            <Image
              src="/androidstore.svg"
              width={200}
              height={50}
              className={classes.image}
              alt="androidstore icon "
            />
          </div>
        </div>
        <div className={classes.footer_column}>
          <h4>{footerMenu.quickLinksLabel}</h4>
          <ul className={classes.footerul}>
            {footerMenu.quickLinks.map((link, index) => (
              <li key={index} className={classes.footerli}>
                <Link
                  className={classes.footera}
                  href={link.footerChildMenuLink}
                >
                  {link.footerChildMenuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer_column}>
          <h4>{footerMenu.browseLabel}</h4>
          <ul className={classes.footerul}>
            {footerMenu.browse.map((link, index) => (
              <li key={index} className={classes.footerli}>
                <Link
                  className={classes.footera}
                  href={link.footerChildMenuLink}
                >
                  {link.footerChildMenuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footer_column}>
          <h4>{footerMenu.popularSubjectsLabel}</h4>
          <ul className={classes.footerul}>
            {footerMenu.popularSubjects.map((link, index) => (
              <li key={index} className={classes.footerli}>
                <Link
                  className={classes.footera}
                  href={link.footerChildMenuLink}
                >
                  {link.footerChildMenuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

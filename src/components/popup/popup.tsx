"use client";
import React, { useState } from "react";
import classes from "./popup.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
interface Propstypes {
  callback: () => void;
}
export default function Popup({ callback }: Propstypes) {
  const [course, setCourse] = useState<boolean>(true);
  const [universities, setUniversities] = useState<boolean>(false);
  const [advice, setAdvice] = useState<boolean>(false);
  const handleCourseClick = () => {
    setCourse(true);
    setAdvice(false);
    setUniversities(false);
  };
  const handleuniversitiesClick = () => {
    setCourse(false);
    setAdvice(false);
    setUniversities(true);
  };
  const handleadviceClick = () => {
    setCourse(false);
    setAdvice(true);
    setUniversities(false);
  };
  return (
    <>
      <div className={classes.pop_background}></div>
      <div className={classes.pop_up}>
        <CloseIcon
          onClick={callback}
          data-testid="close-icon"
          sx={{
            position: "absolute",
            top: "0",
            right: "1px",
            fontSize: "40px",
          }}
        />
        <div className={classes.buttons_div}>
          <button
            className={
              course ? classes.active_button : classes.nonactive_button
            }
            onClick={handleCourseClick}
          >
            Courses
          </button>
          <button
            className={
              universities ? classes.active_button : classes.nonactive_button
            }
            onClick={handleuniversitiesClick}
          >
            Universities
          </button>
          <button
            className={
              advice ? classes.active_button : classes.nonactive_button
            }
            onClick={handleadviceClick}
          >
            Advice
          </button>
        </div>
        <div className={classes.search_input_bar}>
          <div className={classes.input_div}>
            {course && (
              <div className={classes.course_options}>
                <select>
                  <option>Undergraduate</option>
                  <option>b</option>
                  <option>c</option>
                </select>
                <input type="text" placeholder="Enter Subject"></input>
                <select>
                  <option>Select location (optional)</option>
                  <option>b</option>
                  <option>c</option>
                </select>
              </div>
            )}
            {universities && (
              <div className={classes.universities_options}>
                <input
                  type="text"
                  placeholder="Enter your Universityname"
                ></input>
              </div>
            )}
            {advice && (
              <div className={classes.advice_options}>
                <input type="text" placeholder="Enter Keyword"></input>
              </div>
            )}
          </div>
          <div className={classes.search_button_div}>
            <SearchIcon sx={{ color: "white" }} />
            <button>Search</button>
          </div>
        </div>
        <div className={classes.bottom_bar}>
          {course && (
            <a href="#" className={classes.bottom_link}>
              Advance Search
            </a>
          )}
          {universities && (
            <a href="#" className={classes.bottom_link}>
              Browse Units A-Z
            </a>
          )}
          {advice && (
            <a href="#" className={classes.bottom_link}>
              Browse advice
            </a>
          )}
          <EastIcon sx={{ color: "#1740b2", fontSize: "18px" }} />
        </div>
      </div>
    </>
  );
}

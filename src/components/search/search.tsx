"use client";
import React from "react";
import classes from "./search.module.css";
export default function SearchSubject() {
  return (
    <div className={classes.searchsubject}>
      <h1>Subject guides</h1>
      <p>Choose a subject to discover what it's like at degree level</p>
      <div className={classes.input_div}>
        <input type="text" placeholder="Find a Subject"></input>
        <button>Search</button>
      </div>
    </div>
  );
}

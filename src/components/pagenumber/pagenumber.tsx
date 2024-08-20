"use client";
import React, { useState } from "react";
import classes from "./pagenumber.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
interface Propstypes {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
}
const PageNavigation = ({
  totalPages,
  onPageChange,
  currentPage,
}: Propstypes) => {
  return (
    <div className={classes.page_navigation}>
      {currentPage !== 1 && (
        <ChevronLeftIcon
          onClick={() => onPageChange(currentPage - 1)}
          data-testid="left-icon"
          sx={{
            color: "#3460dc",
            padding: "6px 6px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: " #3d68dc40",
              padding: "6px 6px",
              borderRadius: "8px",
            },
          }}
        />
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={
            index + 1 === currentPage ? classes.activepage : classes.nonactive
          }
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {currentPage !== totalPages && (
        <ChevronRightIcon
          onClick={() => onPageChange(currentPage + 1)}
          data-testid="right-icon"
          sx={{
            color: "#3460dc",
            padding: "6px 6px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: " #3d68dc40",
              padding: "6px 6px",
              borderRadius: "8px",
            },
          }}
        />
      )}
    </div>
  );
};

export default PageNavigation;

import React from "react";
import Link from "next/link";
import "./globals.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;

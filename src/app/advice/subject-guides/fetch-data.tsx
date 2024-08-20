"use server";
import React from "react";

export default async function FetchData(url: string): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-API-Key": process.env.API_KEY || "",
  };
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Fetch error:", error);
    return "error";
  }
}

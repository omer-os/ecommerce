import React from "react";
import StNavbar from "../navbars/st-navbar";

export default function StLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StNavbar />
      {children}
    </>
  );
}

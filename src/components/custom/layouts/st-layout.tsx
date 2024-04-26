import React from "react";
import StNavbar from "../navbars/st-navbar";
import StFooter from "../footers/st-footer";

export default function StLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <StNavbar />
        {children}
      </div>
      <StFooter />
    </>
  );
}

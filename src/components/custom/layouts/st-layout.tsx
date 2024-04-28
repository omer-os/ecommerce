import React from "react";
import StNavbar from "../navbars/st-navbar";
import StFooter from "../footers/st-footer";
import { getStoreInformation } from "~/server/actions/store";

export default async function StLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeInfo = await getStoreInformation();
  return (
    <>
      <div className="min-h-screen">
        <StNavbar store={storeInfo[0]} />
        {children}
      </div>
      <StFooter />
    </>
  );
}

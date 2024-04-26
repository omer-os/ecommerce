import React from "react";
import DsSidebar from "../sidebars/ds-sidebar";
import DsNavbar from "../navbars/ds-navbar";

export default function DsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <DsSidebar />

      <div className="flex h-full flex-1 flex-col overflow-auto">
        <DsNavbar />

        {children}
      </div>
    </div>
  );
}

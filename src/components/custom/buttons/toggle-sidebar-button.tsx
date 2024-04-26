"use client";
import { useAtom } from "jotai";
import React from "react";
import { sidebaratom } from "~/lib/global-atoms";

export default function ToggleSidebarButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebaratom);

  return (
    <div
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}

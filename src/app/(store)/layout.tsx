import React from "react";
import StLayout from "~/components/custom/layouts/st-layout";

export default function layout({ children }: { children: React.ReactNode }) {
  return <StLayout>{children}</StLayout>;
}

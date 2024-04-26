import React from "react";
import DsLayout from "~/components/custom/layouts/ds-layout";

export default function layout({ children }: { children: React.ReactNode }) {
  return <DsLayout>{children}</DsLayout>;
}

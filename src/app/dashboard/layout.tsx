import { redirect } from "next/navigation";
import React from "react";
import DsLayout from "~/components/custom/layouts/ds-layout";
import { getServerAuthSession } from "~/server/auth";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session || session.user.role !== "ADMIN") {
    return redirect("/auth/login");
  }

  return <DsLayout>{children}</DsLayout>;
}

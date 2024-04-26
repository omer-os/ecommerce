"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function GobackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <span onClick={() => router.back()}>{children}</span>;
}

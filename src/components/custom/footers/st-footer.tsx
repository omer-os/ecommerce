import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function StFooter() {
  return (
    <div className="border-t bg-background">
      <footer className="container mx-auto flex w-full flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-2xl font-bold">Store Name</div>

        <div className="flex">
          {[
            { title: "Twitter", link: "https://x.com" },
            { title: "Facebook", link: "https://facebook.com" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-sm hover:underline"
            >
              <Button size={"sm"} variant={"ghost"}>
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

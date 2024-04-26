"use client";
import React from "react";
import {
  BarChartIcon,
  BellIcon,
  CreditCardIcon,
  DollarSignIcon,
  HomeIcon,
  SettingsIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

export default function DsSettingsMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard/settings" && pathname === "/dashboard/settings")
      return true;

    if (href !== "/dashboard/settings" && pathname.startsWith(href))
      return true;
  };

  return (
    <div className="grid items-start text-sm font-medium">
      {[
        {
          icon: SettingsIcon,
          label: "Profile",
          href: "/dashboard/settings",
        },
        {
          icon: SettingsIcon,
          label: "Store",
          href: "/dashboard/settings/store",
        },
        {
          icon: SettingsIcon,
          label: "theme",
          href: "/dashboard/settings/theme",
        },
      ].map((item, index) => (
        <Link
          key={index}
          className={cn(
            "hover:bg-secondary/80 text-muted-foreground hover:text-foreground flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
            {
              "bg-secondary/80": isActive(item.href),
              "!text-foreground": isActive(item.href),
            },
          )}
          href={item.href}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}

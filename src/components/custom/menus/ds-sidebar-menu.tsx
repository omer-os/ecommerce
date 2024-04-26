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

export default function DsSidebarMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;

    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
  };

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <div className="text-muted-foreground mb-2 text-sm capitalize">
        overview
      </div>
      {[
        {
          icon: HomeIcon,
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          icon: WalletIcon,
          label: "Products",
          href: "/dashboard/products",
        },
        {
          icon: BarChartIcon,
          label: "Admins",
          href: "/dashboard/admins",
        },
        {
          icon: CreditCardIcon,
          label: "Users",
          href: "/dashboard/users",
        },
        {
          icon: SettingsIcon,
          label: "Settings",
          href: "/dashboard/settings",
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
    </nav>
  );
}

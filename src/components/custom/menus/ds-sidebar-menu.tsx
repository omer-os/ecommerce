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
    href === "/dashboard" && pathname === "/dashboard" && true;

    return pathname.startsWith(href);
  };

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {[
        {
          icon: HomeIcon,
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          icon: WalletIcon,
          label: "Accounts",
          href: "/dashboard/accounts",
        },
        {
          icon: BarChartIcon,
          label: "Investments",
          href: "/dashboard/investments",
        },
        {
          icon: CreditCardIcon,
          label: "Transactions",
          href: "/dashboard/transactions",
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
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            {
              "bg-secondary/80": isActive(item.href),
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

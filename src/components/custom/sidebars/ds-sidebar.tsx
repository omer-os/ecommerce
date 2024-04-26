"use client";

import {
  BarChartIcon,
  BellIcon,
  CreditCardIcon,
  DollarSignIcon,
  HomeIcon,
  SettingsIcon,
  Sidebar,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DsSidebarMenu from "../menus/ds-sidebar-menu";
import ToggleSidebarButton from "../buttons/toggle-sidebar-button";
import { cn } from "~/lib/utils";
import { useAtom } from "jotai";
import { sidebaratom } from "~/lib/global-atoms";

export default function DsSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebaratom);

  return (
    <>
      <div
        className={cn(
          "lg:bg-secondary/40 bg-background fixed bottom-0 top-0 z-50 w-full border-r transition-all lg:static lg:block lg:w-[20em]",
          {
            "left-0": isSidebarOpen,
            "-left-full": !isSidebarOpen,
          },
        )}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-4">
            <Link
              className="flex flex-1 items-center gap-2 font-semibold"
              href="/dashboard"
            >
              <DollarSignIcon className="h-6 w-6" />
              <span className="">Fintech Dashboard</span>
            </Link>

            <ToggleSidebarButton>
              <Button
                className="h-8 w-8 lg:hidden"
                size="icon"
                variant="outline"
              >
                <Sidebar className="h-4 w-4" />
              </Button>
            </ToggleSidebarButton>
          </div>

          <div className="flex-1 overflow-auto py-2">
            <DsSidebarMenu />
          </div>

          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

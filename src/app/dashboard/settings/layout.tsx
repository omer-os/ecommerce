import React from "react";
import DsSettingsMenu from "~/components/custom/menus/ds-settings-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Settings Page</CardTitle>
          <CardDescription>
            Manage your dashboard and store settings here.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4 flex gap-4">
          <div className="w-[18em]">
            <DsSettingsMenu />
          </div>
          <div className="w-full overflow-auto lg:h-[70vh]">{children}</div>
        </CardContent>
      </Card>
    </div>
  );
}

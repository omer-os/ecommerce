import React from "react";
import DsSettingsMenu from "~/components/custom/menus/ds-settings-menu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <div className="text-3xl font-bold">Settings</div>
        <div className="text-gray-500">Manage your dashboard settings</div>
      </div>

      <div className="mt-2 flex gap-2 p-4">
        <div className="w-[20em]">
          <DsSettingsMenu />
        </div>
        {children}
      </div>
    </div>
  );
}

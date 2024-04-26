import { Sidebar } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import ToggleSidebarButton from "../buttons/toggle-sidebar-button";

export default function DsNavbar() {
  return (
    <div className="bg-secondary/40 flex h-[60px] items-center border-b">
      <span className="me-auto p-4 font-semibold">Fintech Dashboard</span>

      <ToggleSidebarButton>
        <Button className="m-4 lg:hidden" variant={"outline"} size={"icon"}>
          <Sidebar className="h-4 w-4" />
        </Button>
      </ToggleSidebarButton>
    </div>
  );
}

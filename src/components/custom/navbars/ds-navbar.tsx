import { Search, Sidebar } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import ToggleSidebarButton from "../buttons/toggle-sidebar-button";
import MyUserAvatar from "../avatars/my-user-avatar";
import { getServerAuthSession } from "~/server/auth";
import { Input } from "~/components/ui/input";

export default async function DsNavbar() {
  const session = await getServerAuthSession();
  return (
    <div className="bg-secondary/40 flex h-[60px] items-center border-b">
      <div className="flex flex-1 items-center justify-between p-4">
        {/* <span className="font-semibold">Fintech Dashboard</span> */}
        <Input
          placeholder="Search"
          startIcon={<Search className="text-muted-foreground h-4 w-4" />}
          className="hidden w-[30em] lg:flex"
        />

        <>
          <MyUserAvatar session={session} />
        </>
      </div>

      <ToggleSidebarButton>
        <Button className="m-4 lg:hidden" variant={"outline"} size={"icon"}>
          <Sidebar className="h-4 w-4" />
        </Button>
      </ToggleSidebarButton>
    </div>
  );
}

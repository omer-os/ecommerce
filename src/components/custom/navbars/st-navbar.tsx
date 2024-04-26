import React from "react";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import LogoutButton from "../buttons/logout-button";
import LoginButton from "../buttons/login-button";
import MyUserAvatar from "../avatars/my-user-avatar";
import { LogIn } from "lucide-react";

export default async function StNavbar() {
  const session = await getServerAuthSession();

  return (
    <nav className="bg-secondary/40 sticky left-0 top-0 z-30 h-[60px] border-b backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className="text-xl font-semibold">Store Name</div>

        {session ? (
          <MyUserAvatar session={session} />
        ) : (
          <LoginButton>
            <Button>
              <LogIn size={16} />
              Login
            </Button>
          </LoginButton>
        )}
      </div>
    </nav>
  );
}

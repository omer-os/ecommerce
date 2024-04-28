import React from "react";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import LogoutButton from "../buttons/logout-button";
import LoginButton from "../buttons/login-button";
import MyUserAvatar from "../avatars/my-user-avatar";
import { LogIn, ShoppingBag } from "lucide-react";
import StCartSheet from "../sheets/st-cart-sheet";
import Link from "next/link";
import { Store } from "@prisma/client";

export default async function StNavbar({ store }: { store?: Store }) {
  const session = await getServerAuthSession();

  return (
    <nav className="sticky left-0 top-0 z-30 h-[60px] border-b bg-secondary/40 backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <div className="text-xl font-semibold">{store?.name || "Store"}</div>
        </Link>

        <div className="flex items-center gap-4">
          <StCartSheet>
            <Button size={"icon"} variant={"outline"}>
              <ShoppingBag size={16} />
            </Button>
          </StCartSheet>

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
      </div>
    </nav>
  );
}

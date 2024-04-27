import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import OrderSummary from "../other/order-summary";

export default function StCartSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex w-full flex-col bg-background/40 backdrop-blur-lg sm:w-[30em]">
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>

          <OrderSummary />

          <Link className="h-20 w-full" href="/checkout">
            <Button size={"lg"} className="h-full w-full">
              Checkout
            </Button>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
}

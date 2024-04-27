"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import StCartItemCart from "../cards/st-cart-item-cart";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function StCartSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col bg-background/40 backdrop-blur-lg">
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>

          <div className="flex h-full flex-col gap-2 pt-5">
            <ScrollArea className="h-[60vh]">
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
              <StCartItemCart />
            </ScrollArea>
          </div>

          <div className="flex flex-col justify-end py-4 text-sm text-muted-foreground">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p>Taxes</p>
              <p className="text-right text-base text-black dark:text-white">
                $0.00<span className="ml-1 inline">USD</span>
              </p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p>Shipping</p>
              <p className="text-right">Calculated at checkout</p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p>Total</p>
              <p className="text-right text-base text-black dark:text-white">
                $30.00<span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>

          <Button size={"lg"} className="h-20">
            Checkout
          </Button>
        </SheetContent>
      </Sheet>
    </>
  );
}

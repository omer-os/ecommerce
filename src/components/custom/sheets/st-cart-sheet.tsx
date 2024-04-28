"use client";
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
import { Badge } from "~/components/ui/badge";
import { ordersAtom } from "~/lib/global-atoms";
import { useAtom } from "jotai";

export default function StCartSheet({
  children,
  withCountBadge,
}: {
  children: React.ReactNode;
  withCountBadge?: boolean;
}) {
  const [orders, setOrders] = useAtom(ordersAtom);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <span className="relative">
            {withCountBadge && orders.products.length > 0 && (
              <Badge className="absolute right-0 top-1 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full font-semibold">
                {
                  orders.products.reduce(
                    (total, product) => total + product.quantity,
                    0,
                  ) ?? 0
                }
              </Badge>
            )}
            {children}
          </span>
        </SheetTrigger>
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

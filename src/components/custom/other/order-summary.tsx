"use client";
import React from "react";
import { useAtom } from "jotai";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ordersAtom } from "~/lib/global-atoms";
import StCartItemCart from "../cards/st-cart-item-cart";

export default function OrderSummary() {
  const [orders, setOrders] = useAtom(ordersAtom);

  return (
    <>
      <div className="flex h-full flex-col gap-2 pt-5">
        <ScrollArea className="h-full max-h-[60vh]">
          {orders.products.map((product) => (
            <StCartItemCart
              quantity={product.quantity}
              product={product}
              key={product.id}
            />
          ))}
        </ScrollArea>
      </div>

      <div className="flex flex-col justify-end py-4 text-sm text-muted-foreground">
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
          <p>Shipping</p>
          <p className="text-right">0 IQD</p>
        </div>
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
          <p>Total</p>
          <p className="text-right text-base text-black dark:text-white">
            {orders.products
              .reduce(
                (total, product) => total + product.price * product.quantity,
                0,
              )
              .toLocaleString()}{" "}
            IQD
          </p>
        </div>
      </div>
    </>
  );
}

"use client";
import { useAtom } from "jotai";
import React from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ordersAtom } from "~/lib/global-atoms";
import StCartItemCart from "../cards/st-cart-item-cart";

export default function OrderSummary() {
  const [orders, setOrders] = useAtom(ordersAtom);

  return (
    <>
      <div className="flex h-full flex-col gap-2 pt-5">
        <ScrollArea className="h-[60vh]">
          {Array.from(
            new Set(orders.products.map((product) => product.id)),
          ).map((productId) => {
            const product = orders.products.find((p) => p.id === productId);
            const quantity = orders.products.filter(
              (p) => p.id === productId,
            ).length;

            return (
              <StCartItemCart
                quantity={quantity}
                product={
                  product || {
                    id: "",
                    name: "",
                    description: null,
                    price: 0,
                    image: null,
                    categoryId: "",
                  }
                }
                key={productId}
              />
            );
          })}
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
              .map((p) => p.price)
              .reduce((prev, curr) => prev + curr, 0)
              .toLocaleString()}{" "}
            IQD
          </p>
        </div>
      </div>
    </>
  );
}

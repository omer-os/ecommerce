"use client";
import { Product } from "@prisma/client";
import { useAtom } from "jotai";
import React from "react";
import { ordersAtom } from "~/lib/global-atoms";

interface AddToCartButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product | null;
  children: React.ReactNode;
}

export default function AddToCartButton({
  product,
  children,
  ...props
}: AddToCartButtonProps) {
  const [orders, setOrders] = useAtom(ordersAtom);

  return (
    <div
      onClick={() => {
        if (product) {
          setOrders((prev) => {
            return {
              ...prev,
              products: [...prev.products, product],
            };
          });
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}

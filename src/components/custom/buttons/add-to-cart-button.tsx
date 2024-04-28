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
            const productIndex = prev.products.findIndex(
              (p) => p.id === product.id,
            );

            if (productIndex === -1) {
              return {
                ...prev,
                products: [...prev.products, { ...product, quantity: 1 }],
              };
            }

            return {
              ...prev,
              products: prev.products.map((p, i) =>
                i === productIndex ? { ...p, quantity: p.quantity + 1 } : p,
              ),
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

import React, { useEffect, useState } from "react";
import CounterButton from "../buttons/crounter-button";
import { Product } from "@prisma/client";
import { ordersAtom } from "~/lib/global-atoms";
import { useAtom } from "jotai";

export default function StCartItemCart({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const [count, setCount] = useState(quantity);
  const [orders, setOrders] = useAtom(ordersAtom);

  useEffect(() => {
    setOrders((prev) => {
      const updatedProducts = prev.products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: count,
          };
        }
        return p;
      });

      return {
        ...prev,
        products: updatedProducts,
      };
    });

    if (count === 0) {
      setOrders((prev) => {
        return {
          ...prev,
          products: prev.products.filter((p) => p.id !== product.id),
        };
      });
    }
  }, [count]);

  return (
    <div className="flex gap-3 border-b py-3">
      <div className="h-16 w-16 rounded-lg border bg-secondary/50">
        <img
          src={product.image ?? ""}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="font-bold">{product.name}</div>
        <div className="line-clamp-1 text-sm text-muted-foreground">
          {product.description}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="font-semibold">
          {product.price.toLocaleString()} IQD
        </div>

        <CounterButton value={count} setValue={setCount} />
      </div>
    </div>
  );
}

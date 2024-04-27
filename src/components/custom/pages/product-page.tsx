import React from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import AddToCartButton from "../buttons/add-to-cart-button";
import { Product } from "@prisma/client";

export default function ProductPage({ product }: { product: Product | null }) {
  return (
    <div className="pt-10">
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <div className="flex w-full gap-5 lg:w-max">
          <div className="flex flex-col gap-5">
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
          </div>

          <div className="h-[35em] flex-1 rounded border bg-card lg:w-[35em]"></div>
        </div>

        <div className="flex w-full flex-col">
          <div className="text-4xl font-bold">{product?.name}</div>
          <p className="text-muted-foreground">{product?.description}</p>
          <div className="mt-3 w-max rounded-full border bg-secondary p-2 px-6">
            {product?.price.toLocaleString()} IQD
          </div>

          <Separator className="my-5" />

          <AddToCartButton className="w-full" product={product}>
            <Button className="w-full rounded-full" size={"lg"}>
              Add to Cart
            </Button>
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

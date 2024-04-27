"use client";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import AddToCartButton from "../buttons/add-to-cart-button";
import { Product } from "@prisma/client";
import GobackButton from "../buttons/goback-button";
import { ChevronLeft } from "lucide-react";
import { cn } from "~/lib/utils";

export default function ProductPage({ product }: { product: Product | null }) {
  const [selectedImage, setselectedImage] = useState(0);
  return (
    <div className="pt-4">
      <GobackButton>
        <Button variant={"secondary"} className="mb-4">
          <ChevronLeft size={16} />
          Go Back
        </Button>
      </GobackButton>

      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <div className="flex w-full gap-5 lg:w-max">
          <div className="flex flex-col gap-5">
            {product?.imageUrls.slice(0, 3).map((url, index) => (
              <div
                key={index}
                className={cn(
                  "h-[10.8em] w-[10.8em] rounded border bg-card ring-0 transition-all",
                  {
                    "border-4 ring ": selectedImage === index,
                  },
                )}
                onClick={() => setselectedImage(index)}
              >
                <img
                  src={url}
                  alt="product"
                  className="h-full w-full rounded border bg-card"
                />
              </div>
            ))}
          </div>

          <div className="h-[35em] flex-1 rounded border bg-card lg:w-[35em]">
            <img
              src={product?.imageUrls[selectedImage]}
              alt="product"
              className="h-full w-full rounded border bg-card"
            />
          </div>
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

"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import CreateProductForm from "../forms/create-product-form";
import { Product } from "@prisma/client";
import UpdateProductForm from "../forms/update-product-form";

export default function UpdateProductSheet({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent className="w-full sm:w-[25em]">
          <SheetHeader>
            <SheetTitle>Create Product</SheetTitle>
            <SheetDescription>
              Create a new product for your category.
            </SheetDescription>
          </SheetHeader>

          <div className="pt-4">
            <UpdateProductForm product={product} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

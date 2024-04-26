"use client";
import { Product } from "@prisma/client";
import React from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { deleteProduct } from "~/server/actions/product";

export default function DsRemoveProductAlert({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) {
  const submitHandeler = async () => {
    const promise = async () => {
      await deleteProduct({ id: product.id });
      return product;
    };

    toast.promise(promise, {
      loading: "Removing Product...",
      success: (data) => {
        return `${data.name} Removed Successfully!`;
      },
      error: "Error Removing Product!",
    });
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this product?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button size={"sm"} variant={"outline"}>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                onClick={submitHandeler}
                size={"sm"}
                variant={"destructive"}
              >
                Remove
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

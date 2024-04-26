"use client";
import { Category, Product } from "@prisma/client";
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
import { deleteCategory } from "~/server/actions/category";

export default function DsRemoveCategoryAlert({
  children,
  category,
}: {
  children: React.ReactNode;
  category: Category;
}) {
  const submitHandeler = async () => {
    const promise = async () => {
      await deleteCategory({ id: category.id });
      return category;
    };

    toast.promise(promise, {
      loading: "Removing Category...",
      success: (data) => {
        return `${data.name} Removed Successfully!`;
      },
      error: "Error Removing Category!",
    });
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Category</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this Category?
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

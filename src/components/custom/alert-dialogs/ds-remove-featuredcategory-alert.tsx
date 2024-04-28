"use client";
import { FeaturedCategories } from "@prisma/client";
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
import { removeFeaturedCategory } from "~/server/actions/featured-categories";

export default function DsRemoveFeaturedCategoryAlert({
  children,
  category,
}: {
  children: React.ReactNode;
  category: FeaturedCategories;
}) {
  const submitHandeler = async () => {
    const promise = async () => {
      const res = await removeFeaturedCategory(category.id);
      return res;
    };

    toast.promise(promise, {
      loading: "Removing Featured Category...",
      success: (data) => {
        return `${data.title} Removed Successfully!`;
      },
      error: "Error Removing Featured Category!",
    });
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Featured Category</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this featured category?
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

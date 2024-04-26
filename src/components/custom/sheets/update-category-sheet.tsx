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
import { Category } from "@prisma/client";
import UpdateCategoryForm from "../forms/update-category-form";

export default function UpdateCategorySheet({
  category,
  children,
}: {
  category: Category;
  children: React.ReactNode;
}) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent className="w-full sm:w-[25em]">
          <SheetHeader>
            <SheetTitle>Update Category</SheetTitle>
            <SheetDescription>Update your category details.</SheetDescription>
          </SheetHeader>

          <div className="pt-4">
            <UpdateCategoryForm category={category} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

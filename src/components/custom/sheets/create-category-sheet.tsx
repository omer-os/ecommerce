import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import CreateCategoryForm from "../forms/create-category-form";

export default function CreateCategorySheet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent className="w-full sm:w-[25em]">
          <SheetHeader>
            <SheetTitle>Create Category</SheetTitle>
            <SheetDescription>
              Create a new category for your products.
            </SheetDescription>
          </SheetHeader>

          <div className="pt-4">
            <CreateCategoryForm />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

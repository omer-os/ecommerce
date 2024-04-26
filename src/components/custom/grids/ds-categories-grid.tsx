import React from "react";
import DsCategoriesCard from "../cards/ds-category-card";
import { Category } from "@prisma/client";
import CreateCategorySheet from "../sheets/create-category-sheet";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import { Plus } from "lucide-react";

export default function DsCategoriesGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, index) => (
        <DsCategoriesCard category={category} key={index} />
      ))}

      <CreateCategorySheet>
        <Card className="flex h-full min-h-[14em] scale-100 cursor-pointer flex-col items-center justify-center shadow-none transition-all hover:scale-[1.01] hover:shadow-lg">
          <Plus size={38} className="text-muted-foreground" />

          <CardTitle className="mt-2 text-center text-lg">
            Create Category
          </CardTitle>
          <CardDescription className="max-w-[15em] text-center text-sm">
            Create a new category for your products.
          </CardDescription>
        </Card>
      </CreateCategorySheet>
    </div>
  );
}

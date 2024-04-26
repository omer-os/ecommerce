import { Category } from "@prisma/client";
import React from "react";
import StCategoryCard from "../cards/st-category-card";

export default function StCategoriesGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, index) => (
        <StCategoryCard category={category} key={index} />
      ))}
    </div>
  );
}

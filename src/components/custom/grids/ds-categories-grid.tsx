import React from "react";
import DsCategoriesCard from "../cards/ds-categories-card";
import { Category } from "@prisma/client";

export default function DsCategoriesGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, index) => (
        <DsCategoriesCard
        category={category}
        key={index} />
      ))}
    </div>
  );
}

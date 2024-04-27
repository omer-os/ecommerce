import React from "react";
import DsCategoriesGrid from "~/components/custom/grids/ds-categories-grid";
import { getCategories } from "~/server/actions/category";

export default async function Page() {
  const categories = await getCategories();

  return (
    <div className="p-4">
      <div className="text-3xl font-bold">All Categories</div>
      <div className="mt-3">
        <DsCategoriesGrid categories={categories} />
      </div>
    </div>
  );
}

import React from "react";
import StCategoriesGrid from "~/components/custom/grids/st-categories-grid";
import { getCategories } from "~/server/actions/category";

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="container p-4">
      <h1 className="text-4xl font-bold">Categories</h1>
      <p className="text-gray-500">List of all categories</p>

      <div className="mt-4">
        <StCategoriesGrid categories={categories} />
      </div>
    </div>
  );
}

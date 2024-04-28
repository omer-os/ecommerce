import { ChevronLeft } from "lucide-react";
import React from "react";
import GobackButton from "~/components/custom/buttons/goback-button";
import DsProductsGrid from "~/components/custom/grids/ds-products-grid";
import { Button } from "~/components/ui/button";
import { getFeaturedCategories } from "~/server/actions/featured-categories";
import { getProducts } from "~/server/actions/product";

export default async function Page({
  params,
}: {
  params: {
    categoryId: string;
  };
}) {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const featuredCategories = await getFeaturedCategories();

  return (
    <div className="p-4">
      <GobackButton>
        <Button variant={"secondary"}>
          <ChevronLeft size={16} />
          Go Back
        </Button>
      </GobackButton>

      <h1 className="mt-4 text-3xl font-bold">Category Name</h1>
      <p className="mt-1 text-muted-foreground">Category Description</p>
      <div className="mt-3">
        <DsProductsGrid
          featuredCategories={featuredCategories}
          categoryId={params.categoryId}
          products={products}
        />
      </div>
    </div>
  );
}

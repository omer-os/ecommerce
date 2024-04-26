import { ChevronLeft } from "lucide-react";
import React from "react";
import GobackButton from "~/components/custom/buttons/goback-button";
import DsProductsGrid from "~/components/custom/grids/ds-products-grid";
import { Button } from "~/components/ui/button";
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

  return (
    <div className="p-4">
      <GobackButton>
        <Button variant={"secondary"}>
          <ChevronLeft size={16} />
          Go Back
        </Button>
      </GobackButton>

      <h1 className="mt-4 text-3xl font-bold">Category Name</h1>
      <p className="text-muted-foreground mt-1">Category Description</p>
      <div className="mt-3">
        <DsProductsGrid products={products} />
      </div>
    </div>
  );
}

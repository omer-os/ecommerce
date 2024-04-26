import { ChevronLeft } from "lucide-react";
import React from "react";
import GobackButton from "~/components/custom/buttons/goback-button";
import StProductsGrid from "~/components/custom/grids/st-products-grid";
import { Button } from "~/components/ui/button";
import { getProducts } from "~/server/actions/product";

export default async function Page({
  params,
}: {
  params: {
    categoryId: string;
  };
}) {
  const products = await getProducts({ categoryId: params.categoryId });

  return (
    <div className="container mx-auto p-4">
      <GobackButton>
        <Button variant={"secondary"}>
          <ChevronLeft size={16} />
          Go Back
        </Button>
      </GobackButton>

      <h1 className="mt-4 text-3xl font-bold">Products</h1>

      <div className="mt-4">
        <StProductsGrid products={products} />
      </div>
    </div>
  );
}

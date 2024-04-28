import React from "react";
import DsProductCard from "../cards/ds-product-card";
import { FeaturedCategories, Product } from "@prisma/client";
import CreateProductSheet from "../sheets/create-product-sheet";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import { Plus } from "lucide-react";

export default function DsProductsGrid({
  products,
  categoryId,
  featuredCategories,
}: {
  products: Product[];
  categoryId: string;
  featuredCategories: FeaturedCategories[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <DsProductCard product={product} key={index} />
      ))}

      <CreateProductSheet categoryId={categoryId}>
        <Card className="flex h-full min-h-[14em] scale-100 cursor-pointer flex-col items-center justify-center shadow-none transition-all hover:scale-[1.01] hover:shadow-lg">
          <Plus size={38} className="text-muted-foreground" />

          <CardTitle className="mt-2 text-center text-lg">
            Create Product
          </CardTitle>
          <CardDescription className="max-w-[15em] text-center text-sm">
            Create a new Product for your category.
          </CardDescription>
        </Card>
      </CreateProductSheet>
    </div>
  );
}

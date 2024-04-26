import React from "react";
import DsProductCard from "../cards/ds-product-card";
import { Product } from "@prisma/client";

export default function DsProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <DsProductCard product={product} key={index} />
      ))}
    </div>
  );
}

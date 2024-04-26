import { Product } from "@prisma/client";
import React from "react";
import StProductCard from "../cards/st-product-card";

export default function StProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <StProductCard product={product} key={index} />
      ))}
    </div>
  );
}

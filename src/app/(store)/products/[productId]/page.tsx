import React from "react";
import ProductPage from "~/components/custom/pages/product-page";
import { getProduct } from "~/server/actions/product";

export default async function Page({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const product = await getProduct({ id: params.productId });

  return (
    <div className="container mx-auto p-4">
      <ProductPage product={product} />
    </div>
  );
}

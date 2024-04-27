import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function StProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        <CardHeader className="p-0">
          <img
            src={product.imageUrls[0] || ""}
            alt="Product Image"
            className="h-[10em] w-full rounded-t-lg object-cover"
          />
        </CardHeader>

        <CardContent className="p-4">
          <div className="text-lg font-bold">{product.name}</div>
          <div className="line-clamp-2 text-sm">{product.description}</div>
          <div className="mt-2 text-lg font-bold">
            {product.price.toLocaleString()} IQD
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

import { Product } from "@prisma/client";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DsRemoveProductAlert from "../alert-dialogs/ds-remove-product-alert";

export default function DsProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative">
      <div className="absolute end-4 top-4">
        <Button size={"icon"} variant={"outline"}>
          <Edit size={16} />
        </Button>
      </div>

      <CardHeader className="p-2">
        <div className="h-[10em]">
          <img
            src={product.image ?? ""}
            alt="Product Image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-2 pt-1">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {product.description}
        </CardDescription>

        <div className="mt-3 text-lg font-bold">
          {product.price.toLocaleString()} IQD
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-2">
        <Link className="flex-1 text-xs" href={`/dashboard/products/`}>
          <Button className="w-full" variant={"default"} size={"sm"}>
            View Product
          </Button>
        </Link>
        <DsRemoveProductAlert product={product}>
          <Button
            variant={"destructive"}
            className="flex-1 text-xs"
            size={"sm"}
          >
            Remove Product
          </Button>
        </DsRemoveProductAlert>
      </CardFooter>
    </Card>
  );
}

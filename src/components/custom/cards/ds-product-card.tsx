"use client";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";

import { FeaturedCategories, Product } from "@prisma/client";
import { Edit } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import UpdateProductSheet from "../sheets/update-product-sheet";
import {
  addProductToFeaturedCategory,
  getFeaturedCategories,
} from "~/server/actions/featured-categories";
import { toast } from "sonner";

export default function DsProductCard({ product }: { product: Product }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="relative">
        <Card>
          <div className="absolute end-4 top-4">
            <UpdateProductSheet product={product}>
              <Button size={"icon"} variant={"outline"}>
                <Edit size={16} />
              </Button>
            </UpdateProductSheet>
          </div>

          <CardHeader className="p-2">
            <div className="h-[10em]">
              <img
                src={product.imageUrls[0] ?? ""}
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
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[10em]">
        <ContextMenuSub>
          <ContextMenuSubTrigger>Add to Featured</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <SubTestComponent product={product} />
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

const SubTestComponent = ({ product }: { product: Product }) => {
  const [featuredComs, setFeaturedComs] = useState<FeaturedCategories[]>([]);

  useEffect(() => {
    const fetchFeaturedComs = async () => {
      console.log("fetching featured categories");

      const res = await getFeaturedCategories();
      setFeaturedComs(res);
    };

    fetchFeaturedComs();
  }, []);

  const AddToFeaturedCategory =
    (productId: string, categoryId: string) => async () => {
      console.log("adding product to featured category");

      const res = await addProductToFeaturedCategory(productId, categoryId);
      if (res) {
        toast.success("Product added to featured category successfully!");
      }
    };

  return (
    <>
      {featuredComs.map((com, index) => (
        <ContextMenuItem
          onClick={AddToFeaturedCategory(product.id, com.id)}
          key={index}
        >
          {com.title}
        </ContextMenuItem>
      ))}
    </>
  );
};

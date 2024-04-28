import React from "react";
import DsProductCard from "~/components/custom/cards/ds-product-card";
import DsAddFeaturedCategoryDialog from "~/components/custom/dialogs/ds-add-featured-category-dialog";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  getFeaturedCategories,
  removeFeaturedCategory,
} from "~/server/actions/featured-categories";

export default async function Page() {
  const featuredCategories = await getFeaturedCategories();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Featured Categories</h1>
      <p className="text-muted-foreground">
        These are the featured categories that are displayed on the homepage.
      </p>

      <div className="grid gap-4 p-5">
        {featuredCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {category.products.map((product, index) => (
                  <DsProductCard key={index} product={product} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {/* <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const result = await removeFeaturedCategory(category.id);
                }}
              >
                <Button size={"sm"} variant={"destructive"}>
                  Remove Category
                </Button>
              </form> */}
            </CardFooter>
          </Card>
        ))}
      </div>

      <DsAddFeaturedCategoryDialog>
        <Button size={"sm"} variant={"secondary"}>
          Add Featured Category
        </Button>
      </DsAddFeaturedCategoryDialog>
    </div>
  );
}

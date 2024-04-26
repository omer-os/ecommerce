import { Category } from "@prisma/client";
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

export default function DsCategoriesCard({ category }: { category: Category }) {
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
            src={category.imageUrl || ""}
            alt="Category Image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-2 pt-1">
        <CardTitle className="text-lg">Category Name</CardTitle>
        <CardDescription className="line-clamp-1 text-xs">
          Category Description
        </CardDescription>
      </CardContent>

      <CardFooter className="flex gap-2 p-2">
        <Link
          className="flex-1 text-xs"
          href={`/dashboard/products/${category.id}`}
        >
          <Button className="w-full" variant={"default"} size={"sm"}>
            View Category
          </Button>
        </Link>
        <Button variant={"destructive"} className="flex-1 text-xs" size={"sm"}>
          Remove Category
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function StCategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card>
        <CardHeader className="p-0">
          <div className="h-[10em]">
            <img
              src={category.imageUrl || ""}
              alt="Category Image"
              className="h-full w-full rounded-t-lg object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <CardTitle>{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

"use client";
import { Product } from "@prisma/client";
import { ProductModel } from "prisma/zod";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import { updateProduct } from "~/server/actions/product";

const schema = ProductModel.omit({
  categoryId: true,
  id: true,
  createdAt: true,
  featuredCategoriesId: true,
  image: true,
});

export default function UpdateProductForm({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    const promise = async () => {
      const res = await updateProduct({
        ...data,
        categoryId: product.categoryId,
        id: product.id,
        createdAt: product.createdAt,
      });

      return res;
    };

    toast.promise(promise, {
      loading: "Updating product...",
      success: "Product updated successfully",
      error: "Failed to update product",
    });
  };
  return (
    <div>
      <AutoForm values={product} formSchema={schema} onSubmit={submitHandler}>
        <Button loading={loading}>Submit</Button>
      </AutoForm>
    </div>
  );
}

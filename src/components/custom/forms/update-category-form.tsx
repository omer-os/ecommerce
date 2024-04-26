"use client";
import { Category } from "@prisma/client";
import { CategoryModel } from "prisma/zod";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import { updateCategory } from "~/server/actions/category";

const schema = CategoryModel.omit({
  id: true,
});

export default function UpdateCategoryForm({
  category,
}: {
  category: Category;
}) {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    const promise = async () => {
      const res = await updateCategory({
        ...data,
        id: category.id,
      });

      return res;
    };

    toast.promise(promise, {
      loading: "Updating Category...",
      success: "Category updated successfully",
      error: "Failed to update Category",
    });
  };
  return (
    <div>
      <AutoForm values={category} formSchema={schema} onSubmit={submitHandler}>
        <Button loading={loading}>Update</Button>
      </AutoForm>
    </div>
  );
}

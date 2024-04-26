"use client";

import { CategoryModel } from "prisma/zod";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import { createCategory } from "~/server/actions/category";

const schema = CategoryModel.omit({ id: true });

export default function CreateCategoryForm() {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    const result = await createCategory(data);
    if (result) {
      setLoading(false);
      toast.success("Category created successfully");
    }
  };

  return (
    <>
      <AutoForm formSchema={schema} onSubmit={submitHandler}>
        <Button loading={loading}>Submit</Button>
      </AutoForm>
    </>
  );
}

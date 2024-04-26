"use client";

import { ProductModel } from "prisma/zod";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import { createProduct } from "~/server/actions/product";

const schema = ProductModel.omit({
  categoryId: true,
  id: true,
});

export default function CreateProductForm({
  categoryId,
}: {
  categoryId: string;
}) {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    const result = await createProduct({
      ...data,
      categoryId,
    });

    if (result) {
      setLoading(false);
      toast.success("Product created successfully");
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

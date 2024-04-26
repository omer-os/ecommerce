"use client";
import { Store } from "@prisma/client";
import { StoreModel } from "prisma/zod";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import { updateStore } from "~/server/actions/store";

const schema = StoreModel.omit({
  id: true,
});

export default function UpdateStoreForm({
  store,
}: {
  store: Store | undefined;
}) {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data: z.infer<typeof schema>) => {
    if (store) {
      setLoading(true);

      const promise = async () => {
        const res = await updateStore({
          ...data,
          id: store?.id,
        });

        return res;
      };

      toast.promise(promise, {
        loading: "Updating Store...",
        success: "Store updated successfully",
        error: "Failed to update the store",
      });

      setLoading(false);
    }
  };

  return (
    <div>
      <AutoForm values={store} formSchema={schema} onSubmit={submitHandler}>
        <Button loading={loading}>Save Changes</Button>
      </AutoForm>
    </div>
  );
}

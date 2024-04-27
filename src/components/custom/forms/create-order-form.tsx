"use client";

import { useAtom } from "jotai";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { ordersAtom } from "~/lib/global-atoms";
import { createOrder } from "~/server/actions/order";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string(),
});

export default function CreateOrderForm() {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [loading, setLoading] = useState(false);

  const SubmitHandeler = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    const res = await createOrder({
      products: [
        ...orders.products.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image,
          categoryId: product.categoryId,
          imageUrls: product.imageUrls,
        })),
      ],
    });

    if (res) {
      setOrders((prev) => {
        return {
          ...prev,
          products: [],
        };
      });

      toast.success("Order placed successfully");
    }

    setLoading(false);

    redirect("/");
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Enter your contact information</CardDescription>
        </CardHeader>

        <CardContent>
          <AutoForm formSchema={schema} onSubmit={SubmitHandeler}>
            <Button loading={loading} type="submit">
              Place Order
            </Button>
          </AutoForm>
        </CardContent>
      </Card>
    </>
  );
}

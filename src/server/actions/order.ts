"use server";

import { db } from "../db";
import { getServerAuthSession } from "../auth";
import { Product } from "@prisma/client";

// mutations
export const createOrder = async ({ products }: { products: Product[] }) => {
  const session = await getServerAuthSession();

  if (!session) throw new Error("Not authenticated");

  const order = await db.order.create({
    data: {
      createdAt: new Date(),
      status: "PENDING",
      total: products.reduce((acc, product) => acc + product.price, 0),
      User: {
        connect: {
          id: session.user.id,
        },
      },
      orderDate: new Date(),
      details: {
        createMany: {
          data: products.map((product) => ({
            productId: product.id,
            quantity: 1,
            price: product.price,
          })),
        },
      },
    },
  });

  return order;
};

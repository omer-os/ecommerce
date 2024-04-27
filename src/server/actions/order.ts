"use server";

import { db } from "../db";
import { getServerAuthSession } from "../auth";
import { Product } from "@prisma/client";

// queries
export const GetTotalOrdersNumber = async () => {
  const session = await getServerAuthSession();

  if (!session) throw new Error("Not authenticated");

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return orders.length;
};

export const getOrders = async () => {
  const session = await getServerAuthSession();

  if (!session) throw new Error("Not authenticated");

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      User: true,
    },
  });

  return orders;
};

// mutations
export const createOrder = async ({
  products,
  lat,
  lng,
}: {
  products: Product[];
  lat?: number;
  lng?: number;
}) => {
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
      latitude: lat,
      longitude: lng,
    },
  });

  return order;
};

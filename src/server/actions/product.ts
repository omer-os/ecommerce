"use server";

import { z } from "zod";
import { db } from "../db";
import { ProductModel } from "prisma/zod";
import { getServerAuthSession } from "../auth";

// queries
export const getProducts = async ({ categoryId }: { categoryId: string }) => {
  return db.product.findMany({
    where: {
      categoryId,
    },
  });
};

export const getProduct = async ({ id }: { id: string }) => {
  return db.product.findFirst({
    where: {
      id,
    },
  });
};

// mutations
export const createProduct = async (input: z.infer<typeof ProductModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return db.product.create({
    data: input,
  });
};

export const updateProduct = async (input: z.infer<typeof ProductModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return db.product.update({
    where: {
      id: input.id,
    },
    data: input,
  });
};

export const deleteProduct = async ({ id }: { id: string }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return db.product.delete({
    where: {
      id,
    },
  });
};

"use server";

import { z } from "zod";
import { db } from "../db";
import { ProductModel } from "prisma/zod";
import { getServerAuthSession } from "../auth";
import { revalidatePath } from "next/cache";

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

export const GetTotalProductsViews = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return db.productView.count();
};

// mutations
export const createProduct = async (input: z.infer<typeof ProductModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.product.create({
    data: input,
  });

  if (res) {
    revalidatePath(`/dashboard/products/${res.categoryId}`);
  }

  return res;
};

export const updateProduct = async (input: z.infer<typeof ProductModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.product.update({
    where: {
      id: input.id,
    },
    data: input,
  });

  if (res) {
    revalidatePath(`/dashboard/products/${res.categoryId}`);
  }

  return res;
};

export const deleteProduct = async ({ id }: { id: string }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.product.delete({
    where: {
      id,
    },
  });

  if (res) {
    console.log(res.categoryId);

    revalidatePath(`/dashboard/products/${res.categoryId}`);
  }

  return res;
};

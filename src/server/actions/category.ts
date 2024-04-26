"use server";

import { z } from "zod";
import { db } from "../db";
import { CategoryModel } from "prisma/zod";
import { getServerAuthSession } from "../auth";
import { revalidatePath } from "next/cache";

// queries
export const getCategories = async () => {
  return db.category.findMany();
};

export const getCategory = async ({ id }: { id: string }) => {
  return db.category.findFirst({
    where: {
      id,
    },
  });
};

// mutations
export const createCategory = async (input: z.infer<typeof CategoryModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  const res = await db.category.create({
    data: input,
  });

  if (res) {
    revalidatePath("/dashboard/categories");
  }

  return res;
};

export const updateCategory = async (input: z.infer<typeof CategoryModel>) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  const res = await db.category.update({
    where: {
      id: input.id,
    },
    data: input,
  });

  if (res) {
    revalidatePath("/dashboard/categories");
  }

  return res;
};

export const deleteCategory = async ({ id }: { id: string }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.category.delete({
    where: {
      id,
    },
  });

  if (res) {
    revalidatePath("/dashboard/categories");
  }

  return res;
};

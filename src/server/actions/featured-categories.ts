"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

// queries
export const getFeaturedCategories = async () => {
  return db.featuredCategories.findMany();
};

// mutations
export const addFeaturedCategory = async ({
  title,
  subtitle,
  categoryId,
}: {
  title: string;
  subtitle: string;
  categoryId: string;
}) => {
  const res = await db.featuredCategories.create({
    data: {
      title,
      subtitle,
    },
  });

  revalidatePath(`/dashboard/products/${categoryId}`);

  return res;
};

"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

// queries
export const getFeaturedCategories = async () => {
  return db.featuredCategories.findMany({
    include: {
      products: true,
    },
  });
};

// mutations
export const addFeaturedCategory = async ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const res = await db.featuredCategories.create({
    data: {
      title,
      subtitle,
    },
  });

  revalidatePath(`/dashboard/featured`);

  return res;
};

export const removeFeaturedCategory = async (id: string) => {
  const res = await db.featuredCategories.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/featured");

  return res;
};

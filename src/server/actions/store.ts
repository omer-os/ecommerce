"use server";

import { StoreModel } from "prisma/zod";
import { db } from "../db";
import { z } from "zod";
import { getServerAuthSession } from "../auth";
import { revalidatePath } from "next/cache";

// queries
export async function getStoreInformation() {
  const res = db.store.findMany();

  return res;
}

// mutations
export async function updateStore(input: z.infer<typeof StoreModel>) {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.store.update({
    where: {
      id: input.id,
    },
    data: input,
  });

  if (res) {
    revalidatePath(`/dashboard/settings/store`);
  }

  return res;
}

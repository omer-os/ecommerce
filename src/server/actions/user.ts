"use server";

import { revalidatePath } from "next/cache";
import { getServerAuthSession } from "../auth";
import { db } from "../db";

// queries
export const getAllAdmins = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return await db.user.findMany({
    where: {
      role: "ADMIN",
    },
  });
};

export const getAllUsers = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return await db.user.findMany();
};

export const getUser = async ({ id }: { id: string }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return await db.user.findFirst({
    where: {
      id,
    },
  });
};

export const getTotalUsersCount = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return db.user.count();
};

// mutations
export const removeAdmin = async ({ id }: { id: string }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const res = await db.user.update({
    where: {
      id,
    },
    data: {
      role: "USER",
    },
  });

  if (res) {
    revalidatePath("/dashboard/admins");
  }

  return res;
};

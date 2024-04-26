"use client";
import { User } from "@prisma/client";
import React from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { removeAdmin } from "~/server/actions/user";

export default function DsRemoveAdminAlert({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const submitHandeler = async () => {
    const promise = async () => {
      const res = await removeAdmin({ id: user.id });
      return user;
    };

    toast.promise(promise, {
      loading: "Removing Admin...",
      success: (data) => {
        return `${data.name} Removed Successfully!`;
      },
      error: "Error Removing Admin!",
    });
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Admin</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this admin? he will lose all his
              admin privileges and won't be able to access the admin dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button size={"sm"} variant={"outline"}>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                onClick={submitHandeler}
                size={"sm"}
                variant={"destructive"}
              >
                Remove
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

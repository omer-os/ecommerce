"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { addFeaturedCategory } from "~/server/actions/featured-categories";

export default function DsAddFeaturedCategoryDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const submitHandeler = async (formData: FormData) => {
    const name = formData.get("title");
    const subtitle = formData.get("subtitle");

    if (name) {
      setLoading(true);

      const result = await addFeaturedCategory({
        subtitle: subtitle?.toString() ?? "",
        title: name.toString(),
      });

      if (result) {
        toast.success("Featured category added successfully!");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Featured Category</DialogTitle>
            <DialogDescription>
              Add a new featured category to the list.
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-2" action={submitHandeler}>
            <Input required name="title" placeholder="Title" />
            <Input name="subtitle" placeholder="Subtitle" />

            <DialogFooter>
              <Button variant={"secondary"}>Cancel</Button>
              <Button loading={loading} type="submit">
                Add
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

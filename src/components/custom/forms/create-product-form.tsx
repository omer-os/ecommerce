"use client";

import { ProductModel } from "prisma/zod";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
import {
  UploadButton,
  UploadDropzone,
  useUploadThing,
} from "~/lib/uploadthing";
import { createProduct } from "~/server/actions/product";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

const schema = ProductModel.omit({
  categoryId: true,
  id: true,
  imageUrls: true,
  image: true,
  featuredCategoriesId: true,
  createdAt: true,
});

export default function CreateProductForm({
  categoryId,
}: {
  categoryId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      console.log("client upload complete", res);
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {},
  });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const submitHandler = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    const uploadedResPromises = files.map((file) => startUpload([file]));

    const uploadedRes = await Promise.all(uploadedResPromises);

    const allUploadedUrls = uploadedRes.flatMap((res) =>
      res?.map((r) => r.url),
    );

    // Filter out undefined values
    const filteredUrls = allUploadedUrls.filter(
      (url) => url !== undefined,
    ) as string[];

    if (uploadedRes) {
      const result = await createProduct({
        ...data,
        categoryId,
        imageUrls: filteredUrls,
        createdAt: new Date(),
      });

      if (result) {
        setLoading(false);
        toast.success("Product created successfully");
      } else {
        setLoading(false);
        toast.error("Failed to create product");
      }
    }

    setLoading(false);
  };
  return (
    <>
      <AutoForm formSchema={schema} onSubmit={submitHandler}>
        <div>
          <div
            className="flex h-[20em] flex-col items-center justify-center rounded border"
            {...getRootProps()}
          >
            <input required hidden {...getInputProps()} />
            Drop files here!
          </div>
        </div>
        <Button loading={loading}>Submit</Button>
      </AutoForm>
    </>
  );
}

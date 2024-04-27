import React from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function ProductPage() {
  return (
    <div className="pt-10">
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <div className="flex w-full gap-5 lg:w-max">
          <div className="flex flex-col gap-5">
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
            <div className="h-[10.8em] w-[10.8em] rounded border bg-card"></div>
          </div>

          <div className="h-[35em] flex-1 rounded border bg-card lg:w-[35em]"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-4xl font-bold">Acme Circles T-Shirt</div>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula, mauris et tincidunt aliquam, nunc risus ultricies nisi,
            nec fermentum nunc purus vel nunc.
          </p>
          <div className="mt-3 w-max rounded-full border bg-secondary p-2 px-6">
            3,000 IQD
          </div>

          <Separator className="my-5" />

          <Button className="rounded-full" size={"lg"}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

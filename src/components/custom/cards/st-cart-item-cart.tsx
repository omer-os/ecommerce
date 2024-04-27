import React from "react";
import CounterButton from "../buttons/crounter-button";

export default function StCartItemCart() {
  return (
    <div className="flex gap-3 border-b py-3">
      <div className="h-16 w-16 rounded-lg border bg-secondary/50">
        <img
          src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=128&q=75"
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="font-bold">Acme Product</div>
        <div className="text-sm text-muted-foreground">Category name</div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="font-semibold">9,000 IQD</div>

        <CounterButton />
      </div>
    </div>
  );
}

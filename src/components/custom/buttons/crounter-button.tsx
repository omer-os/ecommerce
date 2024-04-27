"use client";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";

export default function CounterButton({
  value,
  setValue,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full"
        onClick={() => setValue(value + 1)}
      >
        +
      </Button>
      <div>{value}</div>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full"
        onClick={() => setValue(value - 1)}
      >
        -
      </Button>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";

export default function CounterButton() {
  const [Number, setNumber] = useState(0);
  return (
    <div className="flex items-center gap-2 rounded-full border">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full"
        onClick={() => setNumber(Number + 1)}
      >
        +
      </Button>
      <div>{Number}</div>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full"
        onClick={() => setNumber(Number - 1)}
      >
        -
      </Button>
    </div>
  );
}

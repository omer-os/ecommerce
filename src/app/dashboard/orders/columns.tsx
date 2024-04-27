"use client";

import { $Enums, Order, User, orderStatus } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type OrderColType = {
  User: User;
} & Order;

export const columns: ColumnDef<OrderColType>[] = [
  {
    id: "userId",
    header: "User ID",
    accessorFn: (row) => row.userId,
  },
  {
    id: "orderId",
    header: "Order ID",
    accessorFn: (row) => row.id,

    cell: ({ row }) => {
      return (
        <>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(row.original.id);
              toast.success("Order ID copied to clipboard");
            }}
            variant={"ghost"}
          >
            <span className="max-w-[4em] truncate ">{row.original.id}</span>
          </Button>
        </>
      );
    },
  },
  {
    id: "email",
    header: "Email",
    accessorFn: (row) => row.User.email,
  },
  {
    id: "status",
    header: "Status",
    accessorFn: (row) => row.status,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage
            src={row.original.User.image ?? ""}
            alt={row.original.User.name ?? ""}
          />
          <AvatarFallback>{row.original.User.name ?? ""}</AvatarFallback>
        </Avatar>
      );
    },
  },
];

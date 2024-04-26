"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import React from "react";
import { Button } from "~/components/ui/button";
import { User } from "@prisma/client";
import DsRemoveAdminAlert from "../alert-dialogs/ds-remove-admin-alert";

export default function DsAdminsTable({ admins }: { admins: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>email</TableHead>
          <TableHead className="">actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins.map((admin) => (
          <TableRow key={admin.id}>
            <TableCell>{admin.name}</TableCell>
            <TableCell>{admin.email}</TableCell>
            <TableCell className="flex items-center gap-2">
              <DsRemoveAdminAlert user={admin}>
                <Button variant={"destructive"} size={"sm"}>
                  Remove Admin
                </Button>
              </DsRemoveAdminAlert>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

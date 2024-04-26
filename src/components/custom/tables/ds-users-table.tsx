import { User } from "@prisma/client";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function DsUsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>email</TableHead>
          <TableHead>role</TableHead>
          <TableHead>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="flex items-center gap-2">
              <Button variant={"destructive"} size={"sm"}>
                Remove User
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import React from "react";
import DsAdminsTable from "~/components/custom/tables/ds-admins-table";
import DsUsersTable from "~/components/custom/tables/ds-users-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getAllUsers } from "~/server/actions/user";

export default async function Page() {
  const users = await getAllUsers();

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Admins</CardTitle>
          <CardDescription>View a list of your admins.</CardDescription>
        </CardHeader>
        <CardContent>
          <DsUsersTable users={users} />
        </CardContent>
      </Card>
    </div>
  );
}

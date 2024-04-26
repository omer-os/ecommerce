import React from "react";
import DsAdminsTable from "~/components/custom/tables/ds-admins-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getAllAdmins } from "~/server/actions/user";

export default async function Page() {
  const admins = await getAllAdmins();

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Admins</CardTitle>
          <CardDescription>View a list of your admins.</CardDescription>
        </CardHeader>
        <CardContent>
          <DsAdminsTable admins={admins} />
        </CardContent>
      </Card>
    </div>
  );
}

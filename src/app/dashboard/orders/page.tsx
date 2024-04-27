import { getOrders } from "~/server/actions/order";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Order, User } from "@prisma/client";

export default async function DemoPage() {
  const orders = await getOrders();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={orders} />
    </div>
  );
}

import { DollarSign, User, View } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { GetTotalCategoriesViews } from "~/server/actions/category";
import { GetTotalProductsViews } from "~/server/actions/product";
import { getTotalUsersCount } from "~/server/actions/user";

export default async function Page() {
  const productsViews = await GetTotalProductsViews();
  const categoriesViews = await GetTotalCategoriesViews();
  const totalUsersCount = await getTotalUsersCount();

  return (
    <div className="p-4">
      <div className="text-3xl font-bold">Analytics</div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Sginups",
            value: `${totalUsersCount}`,
            icon: User,
            description: "includes users and admins.",
          },
          {
            title: "Total Views",
            value: `${productsViews + categoriesViews}`,
            icon: View,
            description: "includes categories and products views",
          },
          {
            title: "Total Users",
            value: "2000",
            icon: DollarSign,
            description: "includes users and admins.",
          },
          {
            title: "Total Users",
            value: "2000",
            icon: DollarSign,
            description: "includes users and admins.",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="relative p-4 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-md">{item.title}</CardTitle>
                <item.icon size={16} />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="text-xs text-muted-foreground">
                {item.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

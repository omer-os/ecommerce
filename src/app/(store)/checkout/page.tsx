import { ChevronLeft } from "lucide-react";
import React from "react";
import GobackButton from "~/components/custom/buttons/goback-button";
import CreateOrderForm from "~/components/custom/forms/create-order-form";
import OrderSummary from "~/components/custom/other/order-summary";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Page() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col gap-10 p-4">
      <div className="flex-1">
        <GobackButton>
          <Button variant={"secondary"} className="mb-4">
            <ChevronLeft size={16} />
            Go Back
          </Button>
        </GobackButton>

        <CreateOrderForm />
      </div>

      <div className="lg:w-[30em]">
        <Card>
          <CardHeader>
            <CardTitle>order summary</CardTitle>
            <CardDescription>Review your order</CardDescription>
          </CardHeader>
          <CardContent>
            <OrderSummary />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

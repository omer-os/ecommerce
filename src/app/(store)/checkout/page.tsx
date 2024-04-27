import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import GobackButton from "~/components/custom/buttons/goback-button";
import LoginButton from "~/components/custom/buttons/login-button";
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
import { getServerAuthSession } from "~/server/auth";

export default async function Page() {
  const session = await getServerAuthSession();
  return (
    <div className="container mx-auto flex flex-col gap-10 p-4 lg:flex-row">
      {session ? (
        <>
          <div className="flex-1">
            <Link href={"/"}>
              <Button variant={"secondary"} className="mb-4">
                <ChevronLeft size={16} />
                Go Back
              </Button>
            </Link>

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
        </>
      ) : (
        <>
          <Card className="flex h-[20em] w-full flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Not authenticated
              </CardTitle>
              <CardDescription className="text-center">
                You need to be authenticated to place an order
              </CardDescription>
            </CardHeader>

            <CardContent className="mx-auto w-max">
              <LoginButton>
                <Button>Log in to place an order</Button>
              </LoginButton>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

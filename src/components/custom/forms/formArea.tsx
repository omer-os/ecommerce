import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import CreateProductForm from "./create-product-form";
import CreateCategoryForm from "./create-category-form";

export default function FormArea() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create a new product</CardTitle>
        </CardHeader>
        <CardContent>{/* <CreateProductForm /> */}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create a new Category</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateCategoryForm />
        </CardContent>
      </Card>
    </div>
  );
}

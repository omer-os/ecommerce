import StCategoriesGrid from "~/components/custom/grids/st-categories-grid";
import { getCategories } from "~/server/actions/category";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Categories</h1>
      <p className="text-muted-foreground">
        Below is a list of categories we have available for you.
      </p>
      <div className="mt-4">
        <StCategoriesGrid categories={categories} />
      </div>
    </div>
  );
}

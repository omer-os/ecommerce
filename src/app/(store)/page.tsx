import StHeroCarousel from "~/components/custom/carousels/st-hero-carousel";
import StCategoriesGrid from "~/components/custom/grids/st-categories-grid";
import StProductsGrid from "~/components/custom/grids/st-products-grid";
import { getCategories } from "~/server/actions/category";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold">Categories</h1>
      <p className="text-muted-foreground">
        Below is a list of categories we have available for you.
      </p>
      <div className="mt-4">
        <StCategoriesGrid categories={categories} />
      </div> */}

      <StHeroCarousel
        images={[
          "https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg",
          "https://via.placeholder.com/1920x1080",
          "https://via.placeholder.com/1920x1080",
        ]}
      />

      <div className="mt-10 flex flex-col">
        <h1 className="text-3xl font-bold capitalize">something</h1>
        <p className="text-muted-foreground">
          something something something something something something something
        </p>

        {/* <StProductsGrid
          products={[
            {
              description: "something",
              name: "something",
              price: 100,
              createdAt: new Date(),
              imageUrls: ["https://via.placeholder.com/1920x1080"],
            },
          ]}
        /> */}
      </div>
    </div>
  );
}

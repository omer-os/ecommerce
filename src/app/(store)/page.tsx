import Link from "next/link";
import StHeroCarousel from "~/components/custom/carousels/st-hero-carousel";
import StCategoriesGrid from "~/components/custom/grids/st-categories-grid";
import StProductsGrid from "~/components/custom/grids/st-products-grid";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { getFeaturedCategories } from "~/server/actions/featured-categories";

export default async function HomePage() {
  const categories = await getFeaturedCategories();
  return (
    <div className="container mx-auto p-4">
      <StHeroCarousel
        images={[
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fmarketplace.canva.com%2FEAFOMzwkPtk%2F1%2F0%2F1600w%2Fcanva-chic-website-homepage-fashion-collage-banner-QtOtaBX5FCE.jpg&w=2048&q=75",
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fglobaltv.es%2Fwp-content%2Fuploads%2F2022%2F10%2Fbang-olufsen-salon.webp&w=2048&q=75",
          "https://store.accretence.com/_next/image?url=https%3A%2F%2Fmarketplace.canva.com%2FEAFhXw50O8Q%2F1%2F0%2F1600w%2Fcanva-beige-minimalist-fashion-collection-photo-collage-banner-VTuOcmKhSd4.jpg&w=2048&q=75",
        ]}
      />
      <Separator />
      <div className="mt-10 flex flex-col gap-10 divide-y">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold capitalize">
                  {category.title}
                </h1>
                <p className="text-muted-foreground">{category.subtitle}</p>
              </div>
              <Link href={`/categories`}>
                <Button variant={"secondary"}>View More</Button>
              </Link>
            </div>
            <div className="mt-4">
              <StProductsGrid products={category.products} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

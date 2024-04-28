import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const FeaturedCategoriesModel = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
})

export interface CompleteFeaturedCategories extends z.infer<typeof FeaturedCategoriesModel> {
  products: CompleteProduct[]
}

/**
 * RelatedFeaturedCategoriesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFeaturedCategoriesModel: z.ZodSchema<CompleteFeaturedCategories> = z.lazy(() => FeaturedCategoriesModel.extend({
  products: RelatedProductModel.array(),
}))

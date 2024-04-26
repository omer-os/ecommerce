import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const CategoryModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  Product: CompleteProduct[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  Product: RelatedProductModel.array(),
}))

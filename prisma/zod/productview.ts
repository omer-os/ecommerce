import * as z from "zod"
import { CompleteProduct, RelatedProductModel, CompleteUser, RelatedUserModel } from "./index"

export const ProductViewModel = z.object({
  id: z.string(),
  productId: z.string(),
  userId: z.string().nullish(),
  viewedAt: z.date(),
})

export interface CompleteProductView extends z.infer<typeof ProductViewModel> {
  Product: CompleteProduct
  User?: CompleteUser | null
}

/**
 * RelatedProductViewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductViewModel: z.ZodSchema<CompleteProductView> = z.lazy(() => ProductViewModel.extend({
  Product: RelatedProductModel,
  User: RelatedUserModel.nullish(),
}))

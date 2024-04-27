import * as z from "zod"
import { CompleteCategory, RelatedCategoryModel, CompleteProductView, RelatedProductViewModel, CompleteOrderDetail, RelatedOrderDetailModel } from "./index"

export const ProductModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  price: z.number(),
  image: z.string().nullish(),
  categoryId: z.string(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  Category: CompleteCategory
  ProductView: CompleteProductView[]
  OrderDetail: CompleteOrderDetail[]
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  Category: RelatedCategoryModel,
  ProductView: RelatedProductViewModel.array(),
  OrderDetail: RelatedOrderDetailModel.array(),
}))

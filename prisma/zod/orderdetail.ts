import * as z from "zod"
import { CompleteOrder, RelatedOrderModel, CompleteProduct, RelatedProductModel } from "./index"

export const OrderDetailModel = z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  price: z.number(),
})

export interface CompleteOrderDetail extends z.infer<typeof OrderDetailModel> {
  Order: CompleteOrder
  Product: CompleteProduct
}

/**
 * RelatedOrderDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderDetailModel: z.ZodSchema<CompleteOrderDetail> = z.lazy(() => OrderDetailModel.extend({
  Order: RelatedOrderModel,
  Product: RelatedProductModel,
}))

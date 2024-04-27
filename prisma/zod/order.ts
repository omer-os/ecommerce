import * as z from "zod"
import { orderStatus } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteOrderDetail, RelatedOrderDetailModel } from "./index"

export const OrderModel = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  orderDate: z.date().nullish(),
  status: z.nativeEnum(orderStatus),
  total: z.number(),
  latitude: z.number().nullish(),
  longitude: z.number().nullish(),
})

export interface CompleteOrder extends z.infer<typeof OrderModel> {
  User: CompleteUser
  details: CompleteOrderDetail[]
}

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderModel: z.ZodSchema<CompleteOrder> = z.lazy(() => OrderModel.extend({
  User: RelatedUserModel,
  details: RelatedOrderDetailModel.array(),
}))

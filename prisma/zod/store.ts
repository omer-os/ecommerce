import * as z from "zod"

export const StoreModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  logoUrl: z.string().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  website: z.string().nullish(),
})

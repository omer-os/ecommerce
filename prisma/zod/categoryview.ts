import * as z from "zod"
import { CompleteCategory, RelatedCategoryModel, CompleteUser, RelatedUserModel } from "./index"

export const CategoryViewModel = z.object({
  id: z.string(),
  categoryId: z.string(),
  userId: z.string().nullish(),
  viewedAt: z.date(),
})

export interface CompleteCategoryView extends z.infer<typeof CategoryViewModel> {
  Category: CompleteCategory
  User?: CompleteUser | null
}

/**
 * RelatedCategoryViewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryViewModel: z.ZodSchema<CompleteCategoryView> = z.lazy(() => CategoryViewModel.extend({
  Category: RelatedCategoryModel,
  User: RelatedUserModel.nullish(),
}))

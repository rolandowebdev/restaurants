import * as z from 'zod'

export const reviewSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: "Name can't be empty" }).min(2).max(50),
  review: z.string({ required_error: "Review can't be empty" }).min(10).max(500)
})

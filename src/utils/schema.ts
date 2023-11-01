import * as z from 'zod'

export const reviewSchema = z.object({
  id: z.string().optional(),
  name: z
    .string({
      required_error: 'Name is required'
    })
    .min(1, 'Name is required'),
  review: z
    .string({ required_error: 'Review is required' })
    .min(1, 'Review is required')
    .max(500, 'Review must be at most 500 characters')
})

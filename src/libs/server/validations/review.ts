import * as z from "zod"


export const reviewCreateSchema = z.object({
    title: z.string().max(50),
    content: z.string().optional(),
    rating: z.number().optional(),
    image: z.string().optional(),
    shopId: z.string().optional(),
  })
  
export const reviewPatchSchema = z.object({
    title: z.string().min(3).max(50).optional(),
    content: z.string().optional(),
    rating: z.number().optional(),
  })
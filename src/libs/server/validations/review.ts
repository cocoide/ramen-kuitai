import * as z from "zod"


export const reviewCreateSchema = z.object({
    title: z.string().max(50),
    description: z.string().optional(),
    valuation: z.number().optional(),
    image: z.string().optional(),
    shopId: z.string().optional(),
  })
  
export const reviewPatchSchema = z.object({
    title: z.string().min(3).max(50).optional(),
    description: z.string().optional(),
    valuation: z.number().optional(),
  })
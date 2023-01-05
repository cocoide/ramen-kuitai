import * as z from "zod"

export const shopQuerySchema = z.object({
    shopId: z.string(),
  });
  
  export const userQuerySchema = z.object({
    userId: z.string(),
  });
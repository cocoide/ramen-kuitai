import * as z from "zod"

export const shopQuerySchema = z.object({
    shopId: z.string(),
  });
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth/next"
import * as z from "zod"
import prisma from '../../client/prisma'
import { authOptions } from '../auth'


export const schema = z.object({
  reviewId: z.string(),
})

export function withReview(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const query = await schema.parse(req.query)
      const session = await unstable_getServerSession(req, res, authOptions)

      const count = await prisma.review.count({
        where: {
          id: query.reviewId,
          authorId: session.user.id,
        },
      })

      if (count < 1) {
        return res.status(403).end()
      }

      return handler(req, res)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(500).end()
    }
  }
}
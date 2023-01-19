import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth'

export function withAuthentication(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (session == null) {
      return res.status(403).json({error: "You are not authenticated"})
    }
    return handler(req, res)
  }
}
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

export function withMethods(methods: string[], handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!methods.includes(req.method as string)) {
      return res.status(405).json({ error: "This is wrong method"})
    }

    return handler(req, res)
  }
}
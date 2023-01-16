
import { NextApiRequest, NextApiResponse } from 'next';
import * as z from "zod"
import { db } from '../../../libs/client/prisma';
import { withMethods } from '../../../libs/server/middlewares/with-methods';
import { shopQuerySchema } from '../../../libs/server/validations/index';
  
 async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const query = shopQuerySchema.parse(req.query)
        try {
          const shopDetail = await db.ramenShop.findUnique({
            where: {
                id: query.shopId,
            },
            select: {
                id: true,
                name: true,
                image: true,
                address: true,
                category: true,
            }
          })
        return res.json(shopDetail);
        } 
        catch (e) {
            if (e instanceof z.ZodError) {
                return res.status(422).json(e.issues)
            };
          return res.status(500).end({e});
        }
      };
  };
  export default withMethods(["GET", "POST"], handler);
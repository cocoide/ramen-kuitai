import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../libs/client/prisma';
import { withMethods } from '../../../libs/server/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const ramens = await prisma.ramenShop.findMany({
                select: {
                    id:true,
                    name: true,
                    image: true,
                }
            })
            return res.json(ramens);
        }
        catch (e) {
            return res.status(500).end(e);
        }
    };
};
export default withMethods(["GET"], handler);

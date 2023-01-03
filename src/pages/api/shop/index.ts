import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../libs/client/prisma';
import { withMethods } from '../../../libs/server/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const ramens = await prisma.ramenShop.findMany({
                include: { category: true, }
            })
            return res.json(ramens);
        }
        catch (error) {
            return res.status(500).end();
        }
    };
};
export default withMethods(["GET", "POST"], handler);

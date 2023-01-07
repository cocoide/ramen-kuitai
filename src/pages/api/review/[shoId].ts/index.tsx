import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import prisma from '../../../../libs/client/prisma';
import { authOptions } from '../../../../libs/server/auth';
import { withMethods } from '../../../../libs/server/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {

    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).end();
    };


    if (req.method === "GET") {
        try {
            const posts = await prisma.ramenShop.findMany({
                where: {
                    id: req.query.shopId as string,
                },
                select: {
                    name: true,
                }
            })
            return res.json(posts);
        }
        catch (e) {
            return res.status(500).end(e);
        }
    };
}
export default withMethods(["GET", "POST"], handler);
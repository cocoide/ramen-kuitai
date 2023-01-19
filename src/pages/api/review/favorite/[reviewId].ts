import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { db } from '../../../../libs/client/prisma';
import { authOptions } from '../../../../libs/server/auth';
import { withMethods } from '../../../../libs/server/middlewares/with-methods';

async function handler(req: NextApiRequest, res: NextApiResponse) {

    const session = await unstable_getServerSession(req, res, authOptions);
    if (session == null) {
        return res.status(403).end();
    };


    if (req.method === "PATCH") {
        try {
            await db.review.update({
                where: {
                    id: req.query.reviewId as string,
                },
                data: {
                    favorited:{
                        connect:{
                            id: session?.user.id,
                        }
                    }
                }
            })
            return res.status(200).end();
        }
        catch (e) {
            return res.status(500).end(e);
        }
    };
}
export default withMethods(["GET", "PATCH"], handler);
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { NextApiRequest, NextApiResponse } from 'next';
import { shopQuerySchema } from '../../../../libs/server/validations';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../../../libs/server/auth';
import { withMethods } from '../../../../libs/server/middlewares/with-methods';
import { db } from '../../../../libs/client/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = shopQuerySchema.parse(req.query)
    const session = await unstable_getServerSession( req, res, authOptions);
    if (req.method === "PATCH") {
    try {
        await db.user.update({
            where: {
                id: session?.user.id,
            },
            data: {
                bookmark: {
                    connect: {
                        id: query.shopId
                    }
                }
            }
        });
        res.status(200).json({ success: `${session?.user.id} bookmarked ${query.shopId}`  });
    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
    if (req.method === "DELETE") {
    try {
        await db.user.update({
            where: {
                id: session?.user.id,
            },
            data: {
                bookmark: {
                    disconnect: {
                        id: query.shopId
                    }
                }
            }
        });
        res.status(200).json({ success: `${session?.user.id} deleted ${query.shopId}`  });
    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
};
export default withMethods(["DELETE", "PATCH"], handler)
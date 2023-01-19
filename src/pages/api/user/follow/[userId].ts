/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { db } from '../../../../libs/client/prisma';
import { authOptions } from '../../../../libs/server/auth';
import { withMethods } from '../../../../libs/server/middlewares/with-methods';
import { userQuerySchema } from '../../../../libs/server/validations';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = userQuerySchema.parse(req.query)
    const session = await unstable_getServerSession( req, res, authOptions);
    if (req.method === "PATCH") {
    try {
        await db.user.update({
            where: {
                id: session?.user.id,
            },
            data: {
                following: {
                    connect: {
                        id: query.userId
                    }
                }
            }
        });
res
  .status(200)
  .json({ success: `${session?.user.id} followed ${query.userId}` });

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
                following: {
                    disconnect: {
                        id: query.userId
                    }
                }
            }
        });

        res.status(200).json({ success: `${session?.user.id} unfolowed ${query.userId}`  });
    }
    catch (e) {
        return res.status(500).end({e});
    }
    };
};
export default withMethods(["DELETE", "PATCH"], handler)
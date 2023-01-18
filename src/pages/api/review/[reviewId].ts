import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "../../../libs/server/middlewares/with-methods";
// import { withReview } from '../../../libs/server/middlewares/with-review';
import { reviewPatchSchema } from "../../../libs/server/validations/review";
import * as z from "zod";
import { db } from "../../../libs/client/prisma";
// https://qiita.com/kurab/items/efce37b19f4484ae39bcs

export const querySchema = z.object({
  reviewId: z.string(),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      const query = querySchema.parse(req.query);
      await db.review.delete({
        where: {
          id: query.reviewId,
        },
      });
      return res.status(204).end();
    } catch (e) {
      return res.status(500).json({ e });
    }
  }

  if (req.method === "PATCH") {
    try {
      const query = querySchema.parse(req.query);
      const review = await db.review.findUnique({
        where: {
          id: query.reviewId,
        },
      });

      const body = reviewPatchSchema.parse(req.body);
      await db.review.update({
        where: {
          id: review?.id,
        },
        data: {
          title: body.title ?? review?.title,
          content: body.content,
          rating: body.rating,
        },
      });
      return res.end();
    } catch (e) {
      return res.status(500).json({ e });
    }
  }
}

export default withMethods(["DELETE", "PATCH"], handler);

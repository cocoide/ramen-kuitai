import { NextApiRequest, NextApiResponse } from "next"
// import prisma from '../../../libs/client/prisma'
// import { withMethods } from '../../../libs/server/middlewares/with-methods';
// // import { withReview } from '../../../libs/server/middlewares/with-review';
// import { reviewPatchSchema } from '../../../libs/server/validations/review';
// import * as z from "zod"
// // https://qiita.com/kurab/items/efce37b19f4484ae39bcs

// export const schema = z.object({
//   reviewId: z.string(),
// })

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "DELETE") {
//     try {
//       await prisma.review.delete({
//         where: {
//           id: req.query.reviewId as string,
//         },
//       })
//       return res.status(204).end()
//     } catch (error) {
//       return res.status(500).end()
//     }
//   };
  
//     if (req.method === "PATCH") {
//       try {
//          const query = await schema.parse(req.query)
//           const review = await prisma.review.findUnique({
//             where: {
//               id: req.query.reviewId as string,
//             },
//           })
//           const body = reviewPatchSchema.parse(req.body)
          
//           await prisma.review.update({
//             where: {
//               id: review.id,
//             },
//             data: {
//               title: body.title || review.title,
//               content: body.content,
//             },
//           })
//           return res.end()
//         }catch(e){
//           return res.status(500).end()
//         }
//         }
//         if (req.method === "GET") {
//           try {
//             const review = await prisma.review.findMany({
//               select: {
//                 id: true,
//                 title: true,
//                 createdAt: true,
//               },
//               where: {
//                 id: req.query.reviewId as string,
//               },
//             })
      
//             return res.json(review)
//           } catch (error) {
//             return res.status(500).end();
//           }
          
//         } else {
//           return res.status(405).end()
//         };
        
       
// }

// export default withMethods(["DELETE", "PATCH"], handler)
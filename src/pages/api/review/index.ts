import { unstable_getServerSession } from 'next-auth';

import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '../../../libs/server/auth';
import { withMethods } from '../../../libs/server/middlewares/with-methods';
import * as z from "zod"

import { reviewCreateSchema } from '../../../libs/server/validations/review';
import prisma from '../../../libs/client/prisma';
// https://github.com/AlterClassIO/supa-vacation/blob/main/pages/api/homes.js
// https://github.com/shadcn/taxonomy/blob/main/pages/api/posts/index.ts
// https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#connectorcreate

 export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    const session = await unstable_getServerSession( req, res, authOptions);
    if (!session) {
        return res.status(403).json({error: "You are not authenticated"})
      };
      
      if (req.method === "GET") {
        try {
          const posts = await prisma.review.findMany({
            where: {
              authorId: session.user.email,
            },
        })
        return res.json(posts)
        } 
        catch (error) {
          return res.status(500).end();
        }
      };
      
      if (req.method== 'POST') {
        try{
   
      // const reviews = reviewCreateSchema.parse(req.body)
      const { image, title, rating, content, shopId} =req.body;
        
        const review= await prisma.review.create({
        data: {
          image,
          title,
          rating,
          content,
          authorId: session.user.email,
          shopId,
        },
      })
        return res.status(201).json({review})
        
    }catch(e){
        if (e instanceof z.ZodError) {
            return res.status(422).json(e.issues)
        }
            }
            return res.status(500).json({error: "Server error"});
        }
    }
    // export default withMethods(["GET", "POST"], handler)
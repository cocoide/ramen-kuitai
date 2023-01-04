
import { User } from '@prisma/client';
import { cache } from 'react';
import prisma from '../../../libs/client/prisma';


const getReviewForUser = cache(async (userId: User["id"]) => {
  return await prisma.review.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      valuation: true,
    },
  })
});

export default async function PostedReview({ userId }: { userId: string }) {
  return (
    <div className="p-5 grid-cols-1 lg:grid-cols-2 gap-5">
      { }
    </div>
  )
}
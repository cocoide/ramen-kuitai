
import { User } from '@prisma/client';
import Image from 'next/image';
import { cache } from 'react';
import { asyncComponent } from '../../../../error/async-error';
import prisma from '../../../libs/client/prisma';

const getReviewOnUser = cache(async (userId: User["id"]) => {
  return await prisma.review.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      image: true,
      rating: true,
    },
  })
});

const PostedReview = asyncComponent(async ({ userId }: { userId: string }) => {
  const reviews = await getReviewOnUser(userId);
  return (
    <div className="p-3 grid-cols-1 lg:grid-cols-2 gap-5 w-screen screen-full space-y-3 overflow-y-auto">
      {reviews.map((review) => {
        return (
          <div className="shadow-natural rounded-md flex flex-col p-5 bg-white" key={review.id}>
            <h2>{review.title}</h2>
            {review.image && <Image src={review.image} alt={review.title} width={50} height={50} className="h-15 w-15 rounded-xl" />}
            <h2>{review.rating}</h2>
          </div>
        )
      })}
    </div>
  )
}
)
export default PostedReview

import { StarIcon } from '@heroicons/react/24/solid';
import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';
import { asyncComponent } from '../../../../../error/async-error';
import { db } from '../../../../libs/client/prisma';
import { cn } from '../../../../utils/cn'
import FavoriteButton from './FavoriteReviewButton';

const getReviewOnUser = cache(async (userId: User["id"]) => {
  return await db.review.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      image: true,
      rating: true,
      shop: {
        select: {
          name: true,
          id: true,
        }
      }
    },
  })
});

const PostedSection = asyncComponent(async ({ userId }: { userId: string }) => {
  const reviews = await getReviewOnUser(userId);
  return (
    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-3 w-screen screen-full overflow-y-auto
    items-start">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="flex justify-between bg-white p-5 rounded-md ">
            <div className="flex flex-col  " key={review.id}>
              <Link href={`/ramens/${review.shop?.id as string}`}>{review.shop?.name}</Link>
              <h2>{review.title}</h2>
              {(review.image != null) && <Image src={review.image} alt={review.title} width={50} height={50} className="h-15 w-15 rounded-xl" />}
              <h2 className="flex">{[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <div key={index}
                    className={cn(review.rating != null && index <= review.rating ? "text-yellow-300" : "text-gray-200")}
                  ><StarIcon className="h-6 w-6" />
                  </div>
                )
              })}</h2>
              {/* Star rating  */}
            </div>
            <div className="flex flex-col space-y-3">
              <FavoriteButton reviewId={review.id} />

              {/* {(user != null) && user?.id === userId &&
                <DeleteReviewButton reviewId={review.id} />
              } */}
            </div>
          </div>
        )
      })}
    </div>
  )
}
)
export default PostedSection
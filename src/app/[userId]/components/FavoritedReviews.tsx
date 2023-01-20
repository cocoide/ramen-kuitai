import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, ShareIcon, StarIcon } from "@heroicons/react/24/solid";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import { asyncComponent } from "../../../../error/async-error";
import { db } from "../../../libs/client/prisma";
import { cn } from "../../../utils/cn";

const getFavoritedReviews = cache(async (userId: string) => {
  const res = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      favorite: {
        select: {
          id: true,
          title: true,
          rating: true,
          image: true,
          author: {
            select: {
              id: true,
              image: true,
              name: true,
            },
          },
          shop: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });
  return res?.favorite;
});
const FavoritedReview = asyncComponent(
  async ({ userId }: { userId: User["id"] }) => {
    const favorites = await getFavoritedReviews(userId);
    return (
      <div className="flex flex-col mb-20  min-h-screen bg-gray-100 space-y-3 p-3">
        {favorites?.map((favorite) => {
          return (
            <div
              key={favorite.id}
              className="ring-1 ring-gray-200 rounded-md p-3 bg-white space-y-2"
            >
              <div className="flex justify-start items-center space-x-3">
                <Image
                  src={favorite.author?.image as string}
                  alt={favorite.author?.name as string}
                  width={100}
                  height={100}
                  className="h-8 w-8 rounded-full ring-primary ring-1 ring-offset-2"
                />
                <div className=""> {favorite.author?.name}</div>
              </div>

              <div className="flex justify-start items-center space-x-2">
                <Link
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  href={`/ramens/${favorite?.shop?.id}`}
                  className="text-[#167ac6]  border-b border-[#167ac6]"
                >
                  #{favorite.shop?.name}
                </Link>
                <h3 className="flex items-center">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <div
                        key={index}
                        className={cn(
                          favorite?.rating != null && index <= favorite?.rating
                            ? "text-yellow-300"
                            : "text-gray-200"
                        )}
                      >
                        <StarIcon className="h-5 w-5" />
                      </div>
                    );
                  })}
                </h3>
              </div>
              <h3 className="font-medium "> {favorite.title}</h3>

              <div className="flex justify-between px-5">
                <ShareIcon className="h-5 w-5 text-secondary" />
                <ChatBubbleOvalLeftIcon className="h-5 w-5 text-secondary" />
                <ChartBarIcon className="h-5 w-5 text-secondary" />
                <HeartIcon className="h-5 w-5 text-[#f46484]" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

export default FavoritedReview;

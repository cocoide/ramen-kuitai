import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { asyncComponent } from "../../../../../error/async-error";
import { getReviewsForShop } from "../../../../libs/server/services/review";
import { cn } from "../../../../utils/cn";

const ReviewsForShops = asyncComponent(
  async ({ shopId }: { shopId: string }) => {
    const reviews = await getReviewsForShop(shopId);
    return (
      <div>
        <div className="flex flex-col mb-20">
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                className="ring-1 ring-gray-200 rounded-md p-3 my-2 bg-gray-50"
              >
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={review.author?.image as string}
                    alt={review.author?.name as string}
                    width={100}
                    height={100}
                    className="h-8 w-8 rounded-full ring-primary ring-1 ring-offset-2"
                  />
                  <div className=""> {review.author?.name}</div>
                </div>
                <div className="flex justify-start items-start space-x-2 py-2">
                  <h3 className="flex">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <div
                          key={index}
                          className={cn(
                            review.rating != null && index <= review.rating
                              ? "text-yellow-300"
                              : "text-gray-200"
                          )}
                        >
                          <StarIcon className="h-5 w-5" />
                        </div>
                      );
                    })}
                  </h3>
                  <h3 className="font-medium "> {review.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
export default ReviewsForShops;

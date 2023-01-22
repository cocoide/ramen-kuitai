import React, { cache } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { cn } from '../utils/cn';
import { db } from '../libs/client/prisma';
import TopTab from './ramens/TopTab';

const getRamdomReview = cache(async () => {
    const res = db.review.findMany({
        select: {
            id: true,
            title: true,
            image: true,
            shop: { select: { name: true, id: true } },
            rating: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            }
        }
    })
    return await res
})

async function Home() {
    const reviews = await getRamdomReview()
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="place-center w-screen mt-3"
                > <TopTab />
                </div>
                <div className="flex flex-col mb-20 divide-y">
                    {reviews.map(review => {
                        return (
                            <div key={review.id} className="  p-3">
                                <div className="flex justify-start items-center space-x-3">
                                    <Image src={review.author?.image as string} alt={review.author?.name as string} width={100} height={100} className="h-8 w-8 rounded-full ring-primary ring-1 ring-offset-2" />
                                    <div className=""> {review.author?.name}</div>
                                </div>

                                <div><Link href={`/ramens/${review.shop?.id as string}`} className="border-b border-primary text-primary">@{review.shop?.name}</Link></div>

                                <div className="flex justify-start items-start space-x-2 py-2">
                                    <h3 className="flex">{[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <div key={index}
                                                className={cn((review.rating != null) && index <= review.rating ? "text-yellow-300" : "text-gray-200")}
                                            ><StarIcon className="h-5 w-5" />
                                            </div>
                                        )
                                    })}</h3>
                                    <h3 className="font-medium "> {review.title}</h3>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Home;
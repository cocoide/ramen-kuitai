import React, { cache } from "react";
import "/styles/globals.css";
import { GlobeEuropeAfricaIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import prisma from '../libs/client/prisma';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { cn } from '../utils/cn';
import { RamenShop } from '@prisma/client';

const getRamdomReview = cache(async () => {
    const res = prisma.review.findMany({
        select: {
            id: true,
            title: true,
            image: true,
            ramenShop: { select: { name: true, id: true } },
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
    return res
})

async function Home() {
    const reviews = await getRamdomReview()
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="place-center w-screen space-x-10
                sticky top-0  backdrop-blur-sm bg-white/90 border-t font-medium">

                    <Link href="/ramens" className="place-center p-3 text-primary ">
                        <GlobeEuropeAfricaIcon className="h-7 w-7" />
                        お店</Link>

                    <h3 className="border-b border-primary  p-3 place-center text-primary">
                        <PencilIcon className="h-7 w-7" />
                        投稿</h3>

                </div>

                <div className="flex flex-col mb-20 divide-y">
                    {reviews.map(review => {
                        return (
                            <div key={review.id} className="  p-3">
                                <div className="flex justify-start items-center space-x-3">
                                    <Image src={review.author.image} alt={review.author.name} width={100} height={100} className="h-8 w-8 rounded-full ring-primary ring-1 ring-offset-2" />
                                    <div className=""> {review.author.name}</div>
                                </div>

                                <div><Link href={`/ramens/${review.ramenShop?.id}`} className="border-b border-primary text-primary">@{review.ramenShop?.name}</Link></div>

                                <div className="flex justify-start items-start space-x-2 py-2">
                                    <h3 className="flex">{[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <div key={index}
                                                className={cn(index <= review.rating ? "text-yellow-300" : "text-gray-200")}
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
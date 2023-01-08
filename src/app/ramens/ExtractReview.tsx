import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { cache } from 'react'
import { asyncComponent } from '../../../error/async-error'
import prisma from '../../libs/client/prisma'
import { cn } from '../../utils/cn'


const extractComment = cache(async (shopId: string) => {
    const res = await prisma.ramenShop.findFirst({
        where: { id: shopId },
        select: {
            reviews: {
                select: {
                    id: true,
                    title: true,
                    rating: true,
                    author: {
                        select: {
                            name: true,
                            image: true,
                            id: true,
                        }

                    }
                },
                take: 1
            },
            _count: {
                select: {
                    reviews: true,
                }
            }
        },
    })
    return res.reviews
})

const ExtractReview = asyncComponent(async ({ shopId }: { shopId: string }) => {
    const comments = await extractComment(shopId)

    return (
        <>
            <div className="bg-gray-100  rounded-xl flex justify-between items-center">
                <div className="flex flex-col justify-center w-full">
                    {comments.map(comment => {
                        return (
                            <div className="flex flex-col" key={comment.id}>
                                <Link href={`/${comment.author.id}`} className="flex justify-start items-center space-x-3 m-2">
                                <Image src={comment.author.image} alt={comment.author.name} width={30} height={30}
                                    className="rounded-full h-6 w-6" />
                                <h3 className="text-base text-gray-600">{comment.title}</h3>
                                </Link>
                                <h2 className="flex pb-2 pl-2">{[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <div key={index}
                                            className={cn(index <= comment.rating ? "text-yellow-300" : "text-gray-200")}
                                        ><StarIcon className="h-5 w-5" />
                                        </div>
                                    )
                                })}</h2>
                            </div>
                        )
                    })}
                </div>
                <ChevronDownIcon className="h-5 w-5 text-primary mx-auto mr-2" />
            </div>
        </>
    )
})

export default ExtractReview
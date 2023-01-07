import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { cache } from 'react'
import { asyncComponent } from '../../../error/async-error'
import prisma from '../../libs/client/prisma'


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
                        }

                    }
                },
                take: 1
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
                <div className="flex flex-col">
                    {comments.map(comment => {
                        return (
                            <div className="flex justify-start items-center space-x-3 m-2" key={comment.id}>
                                <Image src={comment.author.image} alt={comment.author.name} width={30} height={30}
                                    className="rounded-full h-6 w-6" />
                                <h3 className="text-base text-gray-600">{comment.title}</h3>
                            </div>
                        )
                    })}
                </div>
                <ChevronDownIcon className="h-5 w-5 text-primary mr-3" />
            </div>
        </>
    )
})

export default ExtractReview
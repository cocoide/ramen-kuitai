import { RamenShop, User } from '@prisma/client';
import { cache } from 'react';
import { db } from '../../client/prisma';

export const getReviewForUser = cache(async (userId: User["id"]) => {
    return await db.review.findMany({
        where: {
            authorId: userId,
        },
        select: {
            id: true,
            title: true,
            content: true,
            image: true,
            rating: true,
        },
    })
});

export const getReviewsForShop=cache(async (shopId: RamenShop["id"]) => {
    return await db.review.findMany({
        where: {
            shopId: shopId,
        },
        select: {
            id: true,
            title: true,
            content: true,
            image: true,
            rating: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            _count:{
                select: {
                    favorited: true,
                }
            }
        },
    })
});
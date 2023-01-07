import { User } from '@prisma/client';
import { cache } from 'react';
import prisma from '../../client/prisma';

export const getReviewForUser = cache(async (userId: User["id"]) => {
    return await prisma.review.findMany({
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
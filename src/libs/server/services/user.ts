import { cache } from 'react'
import prisma from '../../client/prisma'

export const getUserBookmarks = cache(async (userId: string) => {
    const res = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            bookmark: {
                select: {
                    id: true,
                }
            }
        }
    })
    return res.bookmark
});
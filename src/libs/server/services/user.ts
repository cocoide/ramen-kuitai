import { User } from '@prisma/client';
import { cache } from 'react'
import toast from 'react-hot-toast';
import { API_URL } from '../../client/constants';
import prisma from '../../client/prisma'

export const getUserBookmarks = cache(async (userId: User["id"]) => {
    if(userId){
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
}
});

export const getUniqueUserAllData = cache(async (userId: User["id"]) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        }
    })
});
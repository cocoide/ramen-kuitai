import { User } from '@prisma/client';
import { cache } from 'react'
import toast from 'react-hot-toast';
import { API_URL } from '../../client/constants';
import { db } from '../../client/prisma';

export const getUserBookmarks = cache(async (userId: User["id"]) => {
    if(userId){
    const res = await db.user.findUnique({
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
    return await db.user.findUnique({
        where: {
            id: userId,
        }
    })
});
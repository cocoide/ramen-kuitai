import { User } from '@prisma/client';
import { cache } from "react";

import { db } from '../../client/prisma';

export const getUserBookmarks = cache(async (userId:string|undefined) => {
  
    if (userId!=null){
        
        const res = await db.user.findUnique({
            where: {id: userId},
            select: {
                bookmark: {
                    select: {
                        id: true,
                    }
                }
            }
        })
        const bookmark = res?.bookmark;
        return bookmark;
    }

}
);

export const getUniqueUserAllData = cache(async (userId: User["id"]) => {
    return await db.user.findUnique({
        where: {
            id: userId,
        }
    })
});
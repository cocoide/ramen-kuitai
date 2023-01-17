import { cache } from 'react';
import { db } from '../../client/prisma';

export const getShopDetail=cache( async(shopId: string)=> {
    if(shopId){
    const shopDetail = await db.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: { id: true, name: true, image: true ,address:true,description: true,category:{select:{name: true}}},
    })
    return shopDetail;
}
});


export const getAllShops=cache(async()=> {
    return await db.ramenShop.findMany({
        select: {
            id: true, name: true, image: true, bookmarkedBy: true ,address:true, description: true,
        },
    })
});
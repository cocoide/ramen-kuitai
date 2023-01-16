import { cache } from 'react';
import prisma from '../../client/prisma';

export const getShopDetail=cache( async(shopId: string)=> {
    if(shopId){
    const shopDetail = await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: { id: true, name: true, image: true ,address:true,category:{select:{name: true}}},
    })
    return shopDetail;
}
});


export const getAllShops=cache(async()=> {
    return await prisma.ramenShop.findMany({
        select: {
            id: true, name: true, image: true, bookmarkedBy: true,
        },
    })
});
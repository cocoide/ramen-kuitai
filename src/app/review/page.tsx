import FetchReview from './components/FetchReview'
import { cache, use } from 'react';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import prisma from '../../libs/client/prisma';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect } from 'next/navigation';
import CreateReview from './components/CreateReview';
import ShopId from '../../pages/api/shop/[shopId]';

type ParamsProps = {
    searchParams: { shopId: string }
}
const getUniqueShopData = cache(async (shopId: string) => {
    const res = await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: {
            name: true,
        }
    })
    return res.name
});

export default async function Page({ searchParams }: ParamsProps) {
    const user = await getCurrentUser()
    const shopName = await getUniqueShopData(searchParams.shopId)
    if (!user) {
        redirect(authOptions.pages.signIn)
    }
    return (
        <div className="">
            <CreateReview shopId={searchParams.shopId} shopName={shopName} />
        </div>
    )
}
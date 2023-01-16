import FetchReview from './components/FetchReview'
import { cache, use } from 'react';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect, useSearchParams } from 'next/navigation';
import CreateReview from './components/CreateReview';
import { db } from '../../libs/client/prisma';
// https://beta.nextjs.org/docs/api-reference/file-conventions/page#searchparams-optional

const getShopName = cache(async (shopId: any) => {
    if (shopId) {
        const res = await db.ramenShop.findUnique({
            where: {
                id: shopId
            },
            select: {
                name: true,
            }
        })
        return res.name
    }
});

export default async function Page({
    searchParams, }: {
        searchParams?: { [key: string]: string | string[] | undefined };
    }) {
    const user = await getCurrentUser()
    const shopName = await getShopName(searchParams.shopId)

    if (!user) {
        redirect(authOptions.pages.signIn)
    }
    return (
        <>
            <div className="text-lg text-gray-600 p-3">
                <h2>{shopName}</h2>
                {/* この記述でお店を指定せずに投稿も可能に */}
            <CreateReview />
        </div>
        </>
    )
}
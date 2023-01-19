import { cache } from 'react';
import { getCurrentUser } from '../../libs/server/session';
import { redirect } from 'next/navigation';
import CreateReview from './components/CreateReview';
import { db } from '../../libs/client/prisma';

// https://beta.nextjs.org/docs/api-reference/file-conventions/page#searchparams-optional

const getShopName = cache(async (shopId: string) => {
    if (shopId != null) {
        const res = await db.ramenShop.findUnique({
            where: {
                id: shopId
            },
            select: {
                name: true,
            }
        })
        const shopName = res?.name
        return shopName
    }
});

export default async function Page({
    params,
    searchParams, }: {
        params: { slug: string };
        searchParams?: Record<string, string | string[] | undefined>;
    }) {
    const user = await getCurrentUser()
    const shopName = await getShopName(searchParams?.shopId as string)

    if (user == null) {
        redirect("/login")
    };

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
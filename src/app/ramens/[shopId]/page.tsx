import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { API_URL } from '../../../libs/client/constants';
import prisma from '../../../libs/client/prisma';
import { getCurrentUser } from '../../../libs/server/session';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import RamenFooterButton from '../components/RamenFooterButton';

// async function getShopDetail(shopId: string) {
//     const URL = `${API_URL}/shop/${shopId}`
//     const res = await fetch(URL, { next: { revalidate: 600 } })
//     if (!res.ok) throw new Error('getShopDetailでエラーが発生');
//     return res.json() as Promise<RamenShop>;
// }

async function getShopDetail(shopId: string) {
    const shopDetail = await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: { id: true, name: true, image: true },
    })
    return shopDetail;
};

const getUserBookmarks = cache(async (userId: string) => {
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
})

export default async function Page({ params }: { params: { shopId: string } }) {
    const shop = await getShopDetail(params.shopId)
    const user = await getCurrentUser();
    const bookmarks = await getUserBookmarks(user.id)
    const checkIsBookmarked = (ramenId: string): boolean => {
        return bookmarks.some(bookmark => bookmark.id.includes(ramenId))
    };
    if (!shop) {
        notFound();
    };
    return (
        <div className="">
            {/* <Link href={"/ramens"} className="absolute m-3 z-30"><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
            <div className="flex flex-col justify-center place-items-center">


                <div className="flex justify-between place-items-center p-2 w-full
                sticky top-0  backdrop-blur-sm bg-white/90 md:border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="font-medium text-xl text-gray-600">{shop.name}</h2>
                    {/* Ramen shop title */}
                    <EllipsisHorizontalIcon className="h-8 w-8 text-[#c3b9a8]" />
                </div>
                {/* Header  */}

                <Image src={shop.image} alt={shop.name} width={300} height={200}
                    className={cn("rounded-xl h-auto aspect-square m-5")} />
                {/* Thumnail  */}




                <div className="p-3 w-full h-screen bg-white md:w-[748px] md:rounded-xl">
                    <div className="flex space-x-3 text-primary m-3">
                        {/* {shop.category.map((category) => {
                            return (<div key={category.id} >
                                <div className="p-2 border border-secondary bg-white rounded-full text-sm">{category.name}</div>
                            </div>)
                        })} */}
                    </div>
                    {/* Ramen Category */}


                </div>
                {/* Article Section  */}

                <div className="fixed bottom-0 w-full">
                    <RamenFooterButton shopId={params.shopId} name={shop.id}
                        checkIsBookmarked={checkIsBookmarked(params.shopId)} />
                </div>
            </div>
        </div>
    )
};


export async function generateStaticParams() {
    const ramens = await prisma.ramenShop.findMany({
        select: { id: true }
    })
    return ramens.map((ramen) => ({
        shopId: ramen.id
    }));
}
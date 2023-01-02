import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import prisma from '../../../libs/client/prisma';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import RamenFooterButton from '../components/RamenFooterButton';

const getRamenDetail = cache(async (shopId: RamenShop["id"]) => {
    return await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        include: {
            category: true,
        }
    })
});

interface RamenDetailProps {
    params: { shopId: string }
};

export default async function RamenDetailPage({ params }: RamenDetailProps) {
    const ramen = await getRamenDetail(params.shopId)
    if (!ramen) {
        notFound();
    };
    return (
        <div className="">
            {/* <Link href={"/ramens"} className="absolute m-3 z-30"><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
            <div className="flex flex-col justify-center place-items-center">


                <div className="flex justify-between place-items-center p-3 w-full
                sticky top-0  backdrop-blur-sm bg-white/90 border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="font-medium text-xl text-gray-600">{ramen.name}</h2>
                    {/* Ramen shop title */}
                    <EllipsisHorizontalIcon className="h-8 w-8 text-[#c3b9a8]" />
                </div>
                {/* Header  */}

                <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                    className={cn("rounded-xl h-auto aspect-square m-5")} />
                {/* Thumnail  */}




                <div className="p-3 w-full h-screen bg-white md:w-[748px] md:rounded-xl">
                    <div className="flex space-x-3 text-[#bab1a3] m-3">
                        {ramen.category.map((category) => {
                            return (<div key={category.id}>
                                <Link href={`/ramens/category/${category.id}`}
                                    className="p-2 border border-[#e0d5c1] bg-white rounded-full text-sm"># {category.name}</Link>
                            </div>)
                        })}
                    </div>
                    {/* Ramen Category */}


                </div>
                {/* Article Section  */}

                <div className="fixed bottom-0 w-full">
                    <RamenFooterButton />
                </div>
            </div>
        </div>
    )
};
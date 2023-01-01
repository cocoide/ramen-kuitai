import { ChevronLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '../../../libs/client/prisma';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import RamenFooterButton from '../components/RamenFooterButton';

async function getRamenDetail(shopId: RamenShop["id"]) {
    return await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        include: {
            category: true,
        }
    })
};

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


                <div className="flex justify-between place-items-center p-3 sticky top-0  backdrop-blur-sm bg-white/90 w-full
                border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="font-medium text-xl ">{ramen.name}</h2>
                    {/* Ramen shop title */}
                    <EllipsisHorizontalIcon className="h-8 w-8 text-[#e0d5c1]" />
                </div>


                <div className="rounded-md p-3 m-3">

                    <div className="flex space-x-3 text-[#bab1a3] justify-center">
                        {ramen.category.map((category) => {
                            return (<div key={category.id}>
                                <Link href={`/ramens/category/${category.id}`}
                                    className="p-2 border border-[#e0d5c1] bg-white rounded-xl">{category.name}</Link>
                            </div>)
                        })}
                    </div>
                    {/* Ramen Category */}

                    <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                        className={cn("rounded-xl h-auto aspect-square", "m-5")} />
                    <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                        className={cn("rounded-xl h-auto aspect-square", "m-5")} />
                    <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                        className={cn("rounded-xl h-auto aspect-square", "m-5")} />


                </div>

                <div className="fixed bottom-0 w-full">
                    <RamenFooterButton />
                </div>
            </div>
        </div>
    )
};
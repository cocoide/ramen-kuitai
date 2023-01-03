import { HandThumbUpIcon, MagnifyingGlassIcon, MapIcon, TagIcon } from '@heroicons/react/24/outline';
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { cache, use } from 'react';
import prisma from '../../libs/client/prisma';
import { cn } from '../../utils/cn';

const getAllRamenShop = cache(async () => {
    return await prisma.ramenShop.findMany({
        include: {
            category: true,
        }
    })
});

export default async function RamenPage() {
    const ramens = await getAllRamenShop()

    return (
        <div className="">
            <div className="flex justify-center place-items-center w-full overflow-x-hidden space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t border-[#f5ead4] font-medium text-[#c3b9a8]">
                <h3 className="border-b-2 border-[#c3b9a8] py-3
                flex justify-center place-items-center">
                    <HandThumbUpIcon className="h-7 w-7 text-[#c3b9a8]" />
                    おすすめ</h3>
                <h3 className="flex justify-center place-items-center py-3">
                    <TagIcon className="h-7 w-7 text-[#c3b9a8]" />
                    カテゴリ</h3>
                <h3 className="flex justify-center place-items-center py-3">
                    <MapIcon className="h-7 w-7 text-[#c3b9a8] mr-2" />
                    エリア</h3>
            </div>
            {/* Ramen Header  */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg place-items-center overflow-auto gap-4 p-3">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.id} className="">
                        <Link href={`/ramens/${ramen.id}`} className="flex flex-col">

                            <h2>{ramen.name}</h2>


                            <Image src={ramen.image} alt={ramen.name} width={500} height={500}
                                className={cn("rounded-xl h-auto aspect-square",)} />

                        </Link>
                    </div>);
            })}
        </div>
        </div>
    );
}
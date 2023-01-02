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
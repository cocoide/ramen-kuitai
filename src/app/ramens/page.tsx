import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import prisma from '../../libs/client/prisma';
import { cn } from '../../utils/cn';

async function getAllRamenShop() {
    return await prisma.ramenShop.findMany({
        include: {
            category: true,
        }
    })
};

export default async function RamenPage() {
    const ramens = await getAllRamenShop()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg place-items-center overflow-auto">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.id} className="p-2">
                        <Link href={`/ramens/${ramen.id}`} className="flex flex-col">

                            <h2>{ramen.name}</h2>


                            <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                                className={cn("rounded-xl h-auto aspect-square",)} />

                        </Link>
                    </div>);
            })}
        </div>
    );
}
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import prisma from '../../libs/client/prisma';
import { cn } from '../../utils/cn';

async function getAllRamen() {
    return await prisma.ramenShop.findMany()
}

export default async function RamenPage() {
    const ramens = await getAllRamen()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg place-items-center">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.id} className="p-2">
                        <Link href={`/ramens/${ramen.id}`}>
                            <div>{ramen.name}</div>

                            <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                                className={cn("rounded-xl h-auto aspect-square",)} />
                        </Link>
                    </div>);
            })}
        </div>
    );
}
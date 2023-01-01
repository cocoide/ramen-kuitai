import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import prisma from '../../../libs/client/prisma';
import { cn } from '../../../utils/cn';

async function getRamenDetail(shopId: RamenShop["id"]) {
    return await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        }
    })
};

interface RamenDetailProps {
    params: { shopId: string }
};

export default async function RamenDetailPage({ params }: RamenDetailProps) {
    const ramen = await getRamenDetail(params.shopId)
    return (
        <div className="">
            {ramen.name}
            <Image src={ramen.image} alt={ramen.name} width={300} height={200}
                className={cn("rounded-xl h-auto aspect-square",)} />
        </div>
    )
};
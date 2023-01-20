"use client"

import Image from 'next/image'
import { cn } from '../../../utils/cn'
import { useState } from 'react';
import { RamenShop } from '@prisma/client';

const AsyncImage = ({ shop }: { shop: RamenShop }) => {
    const [isImageLoading, setImageLoading] = useState(false)
    return (
        <Image src={shop?.image as string} alt={shop.name} width={600} height={600}
            className={cn("w-[100%] sm:w-[350px] aspect-square sm:rounded-md sm:mt-5",
                isImageLoading ? "" : "animate-pulse bg-gray-200")}
            onLoadingComplete={() => setImageLoading(true)}
        />
    )
}
export default AsyncImage
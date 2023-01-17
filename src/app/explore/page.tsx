import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';
import { db } from '../../libs/client/prisma';
import { getAllShops } from '../../libs/server/services/shop';
import PopularRamens from './PopularRamens';
const getCategory = cache(async () => {
    const res = await db.category.findMany()
    return res
})
export default async function SearchPage() {
    const category = await getCategory()
    const shops = await getAllShops()
    return (
        <>
            <div className="flex flex-col justify-between">
                <div className="flex overflow-x-auto snap-x snap-mandatory">
                    <Image src="/slider-images/2.svg" alt="" width={800} height={300} className="snap-center w-[100%]  sm:min-w-[500px]  min-h-[250px]" />
                    <Image src="/slider-images/1.svg" alt="" width={800} height={300} className="snap-center w-[100%]  sm:min-w-[500px]  min-h-[250px]" />
                    <Image src="/slider-images/3.svg" alt="" width={800} height={300} className="snap-center w-[100%]  sm:min-w-[500px]  min-h-[250px]" />
                    <Image src="/slider-images/4.svg" alt="" width={800} height={300} className="snap-center w-[100%]  sm:min-w-[500px]  min-h-[250px]" />
                </div>
            </div>

            <div className="md:mx-10">
                <div className="grid grid-cols-3  lg:grid-cols-4 gap-3 p-5">
                    {category.map((c) => {
                        return <div className="p-2 w-full place-center bg-secondary rounded-md text-gray-800 ring-1 ring-primary ring-offset-2" key={c.id}>
                            {c.name}
                        </div>
                    }
                    )}
                </div>
            </div>

            <div className="flex overflow-x-auto space-x-3 p-2 mb-20">
                {shops.map(shop => {
                    return (
                        <>
                            <Link href={`/ramens/${shop.id}`} key={shop.id} className="flex flex-col place-items-start min-w-[250px] min-h-[370px] snap-center ring-1 ring-gray-200 rounded-xl bg-gray-50">
                                < Image src={shop.image} alt="" width={200} height={200} className="w-[100%] rounded-t-xl aspect-square" />
                                <div className="flex flex-col p-3 ">
                                    <h2> {shop.name}</h2>
                                    <h3>{shop.description}</h3>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}
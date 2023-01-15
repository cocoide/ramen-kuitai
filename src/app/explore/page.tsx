import Image from 'next/image';
import { cache } from 'react';
import prisma from '../../libs/client/prisma';
const getCategory = cache(async () => {
    const res = await prisma.category.findMany()
    return res
})
export default async function SearchPage() {
    const category = await getCategory()
    return (
        <>
            <div className="flex">
                <div className="flex overflow-hidden overflow-x-auto snap-x snap-mandatory brightness-80">
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/1.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/1.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/3.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/3.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/1.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/2.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[40%]  h-[450px]" />
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-3 gap-3 p-5">
                    {category.map((c) => {
                        return <div className="p-3 w-full place-center bg-secondary rounded-xl text-gray-800 ring-1 ring-primary ring-offset-2" key={c.id}>
                            {c.name}
                        </div>
                    }
                    )}
                </div>
            </div>
        </>
    )
}
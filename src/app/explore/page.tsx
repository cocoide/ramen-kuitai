import Image from 'next/image';
import Link from 'next/link';
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
            <div className="flex flex-col justify-between">
                <div className="flex overflow-hidden overflow-x-auto snap-x snap-mandatory brightness-80">
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="1" />
                    <Image src="/ramens/1.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="2" />
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="3" />
                    <Image src="/ramens/1.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="4" />
                    <Image src="/ramens/3.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="5" />
                    <Image src="/ramens/2.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="6" />
                    <Image src="/ramens/4.jpeg" alt="" width={800} height={100} className="snap-center w-[100%] md:w-[55%] lg:w-[35%]  h-[450px]" id="7" />
                </div>
            </div>

            {/* <div className="place-center">
                <Link href="/explore#1" className="h-10 w-10" >◎</Link>
                <Link href="/explore#2" className="h-10 w-10" >◎</Link>
                <Link href="/explore#3" className="h-10 w-10" >◎</Link>
                <Link href="/explore#4" className="h-10 w-10" >◎</Link>
                <Link href="/explore#5" className="h-10 w-10" >◎</Link>
                <Link href="/explore#7" className="h-10 w - 10" >◎</Link >
            </div > */}

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
import { HandThumbUpIcon, MapIcon, TagIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { RamenShop } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '../../libs/client/constants';
import prisma from '../../libs/client/prisma';
import { getCurrentUser } from '../../libs/server/session';
import { cn } from '../../utils/cn';
import BookmarkButton from './components/BookmarkButton';


// async function getAllShop() {
//     const URL = `${API_URL}/shop`
//     const res = await fetch(URL)
//     if (!res.ok) throw new Error('getAllShopでエラーが発生');
//     const ramens: RamenShop[] = await res.json();
//     return ramens;
// };

async function getAllShop() {
    return await prisma.ramenShop.findMany({
        select: { id: true, name: true, image: true, bookmarkedBy: true },
    })
}

export default async function Page() {
    const ramens = await getAllShop()
    return (
        <div className="">
            <div className="place-center w-screen space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t font-medium">

                <h3 className="border-b-2 border-primary  p-3 place-center text-primary">
                    <HandThumbUpIcon className="h-7 w-7" />
                    お店を開拓</h3>

                <h3 className="place-center p-3 text-secondary">
                    <TagIcon className="h-7 w-7" />
                    らあ活を発見</h3>
            </div>
            {/* Ramen Header  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center overflow-auto gap-4 p-4">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.id} className="flex flex-col">
                        <Link href={`/ramens/${ramen.id}`} className="">
                            <Image src={ramen.image} alt={ramen.name} width={500} height={500}
                                className={cn("rounded-xl h-auto aspect-square",)} />
                        </Link>

                        <div className="flex justify-between items-center text-primary mx-3">
                            <h2>{ramen.name}</h2>
                            <BookmarkButton id={ramen.id} name={ramen.name} />
                        </div>
                    </div>);
            })}
        </div>
        </div>
    );
}
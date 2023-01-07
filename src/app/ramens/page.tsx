import { HandThumbUpIcon, PencilIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { cache, Suspense } from 'react';

import { getAllShops } from '../../libs/server/services/shop';
import { cn } from '../../utils/cn';
import DotsLoading from '../@Components/Animations/DotsLoading';
import ExtractReview from './ExtractReview';
import RamenHomeFooter from './RamenHomeFooter';


export default async function Page() {
    const ramens = await getAllShops();
    return (
        <div className="">
            <div className="place-center w-screen space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t font-medium">

                <h3 className="border-b-2 border-primary  p-3 place-center text-primary">
                    <HandThumbUpIcon className="h-7 w-7" />
                    人気のお店</h3>

                <h3 className="place-center p-3 text-secondary">
                    <PencilIcon className="h-7 w-7" />
                    みんなの投稿</h3>
            </div>
            {/* Ramen Header  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center overflow-auto gap-8  px-10
            items-start">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.name} className="flex flex-col">
                        <Link href={`/ramens/${ramen.id}`} className="">
                            <Image src={ramen.image} alt={ramen.name} width={500} height={500}
                                className={cn("rounded-xl h-auto aspect-square",)} />
                        </Link>
                        <div className="flex justify-between items-center text-primary mx-3 my-2 ">
                            <h2 className="text-gray-600 text-base">{ramen.name}</h2>
                            <Suspense fallback={<div className="ml-auto"><DotsLoading /></div>}>
                                <RamenHomeFooter shopId={ramen.id} />
                            </Suspense>
                        </div>
                        <Suspense fallback={<div className="mx-auto"><DotsLoading /></div>}>
                            <ExtractReview shopId={ramen.id} />
                        </Suspense>
                    </div>);
            })}
            </div>
        </div>
    );
}
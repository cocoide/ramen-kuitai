import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { API_URL } from '../../../libs/client/constants';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import RamenFooterButton from '../components/RamenFooterButton';

async function getShopDetail(shopId: string) {
    const URL = `${API_URL}/shop/${shopId}`
    const res = await fetch(URL, { next: { revalidate: 10 } })
    return res.json();
}
// SSG 


interface RamenDetailProps {
    params: { shopId: string }
};

export default async function Page({ params }: RamenDetailProps) {
    const shop = await getShopDetail(params.shopId)
    if (!shop) {
        notFound();
    };
    return (
        <div className="">
            {/* <Link href={"/ramens"} className="absolute m-3 z-30"><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
            <div className="flex flex-col justify-center place-items-center">


                <div className="flex justify-between place-items-center p-2 w-full
                sticky top-0  backdrop-blur-sm bg-white/90 md:border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="font-medium text-xl text-gray-600">{shop.name}</h2>
                    {/* Ramen shop title */}
                    <EllipsisHorizontalIcon className="h-8 w-8 text-[#c3b9a8]" />
                </div>
                {/* Header  */}

                <Image src={shop.image} alt={shop.name} width={300} height={200}
                    className={cn("rounded-xl h-auto aspect-square m-5")} />
                {/* Thumnail  */}




                <div className="p-3 w-full h-screen bg-white md:w-[748px] md:rounded-xl">
                    <div className="flex space-x-3 text-primary m-3">
                        {/* {shop.category.map((category) => {
                            return (<div key={category.id} >
                                <div className="p-2 border border-secondary bg-white rounded-full text-sm">{category.name}</div>
                            </div>)
                        })} */}
                    </div>
                    {/* Ramen Category */}


                </div>
                {/* Article Section  */}
                {shop.rating}

                <div className="fixed bottom-1 w-full">
                    <RamenFooterButton />
                </div>
            </div>
        </div>
    )
};
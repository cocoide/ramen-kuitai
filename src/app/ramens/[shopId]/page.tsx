import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getShopDetail } from '../../../libs/server/services/shop';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import ReviewsForShops from './ReviewsForShop.tsx';
import ShopBookmark from './ShopBookmark';
import ShopDetail from './ShopDetail';



export default async function Page({ params }: { params: { shopId: string } }) {
    const shop = await getShopDetail(params.shopId)
    if (!shop) {
        notFound();
    };
    return (
        <div className="">
            {/* <Link href={"/ramens"} className="absolute m-3 z-30"><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
            <div className="flex flex-col justify-center place-items-center">


                <div className="flex justify-between place-items-center p-2 w-full
                sticky top-0 bg-white border-b md:border-t border-gray-200">
                    <div className="place-center space-x-3">
                        <Image src={shop.image} alt={shop.name} width={100} height={100} className="h-10 w-10 rounded-full ring-primary ring-1 ring-offset-2" />
                    <h2 className="font-medium text-xl text-gray-600">{shop.name}</h2>
                    </div>

                    {/* Ramen shop title */}
                    <ShopBookmark params={params} />
                </div>
                {/* Header  */}

                <Image src={shop.image} alt={shop.name} width={600} height={600}
                    className={cn("h-auto aspect-square")} />
                {/* Thumnail  */}




                <div className="p-3 w-full h-auto bg-white md:w-[748px] md:rounded-xl">
                    <div className="flex space-x-3 text-primary m-3">

                    </div>
                    <ShopDetail params={params} />
                    <ReviewsForShops shopId={params.shopId} />
                </div>
                {/* Article Section  */}


            </div>
            {/* Footer button  */}
        </div>
    )
};



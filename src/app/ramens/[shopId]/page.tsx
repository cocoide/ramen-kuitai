import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getShopDetail } from '../../../libs/server/services/shop';
import { cn } from '../../../utils/cn';
import BackButton from '../components/backbutton';
import ShopBookmark from './ShopBookmark';



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
                sticky top-0  backdrop-blur-sm bg-white/90 md:border-t border-[#f5ead4]">
                    {/* <Link href={"/ramens"}><ChevronLeftIcon className="h-8 w-8 text-[#e0d5c1]" /></Link> */}
                    <BackButton />
                    <h2 className="font-medium text-xl text-gray-600">{shop.name}</h2>
                    {/* Ramen shop title */}
                    {/* <EllipsisHorizontalIcon className="h-8 w-8 text-[#c3b9a8]" /> */}
                    <ShopBookmark params={params} />
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


            </div>
            {/* Footer button  */}
        </div>
    )
};



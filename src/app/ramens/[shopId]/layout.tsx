import { ChatBubbleOvalLeftIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { getShopDetail } from '../../../libs/server/services/shop';
import ShopBookmark from './ShopBookmark';

// export const revalidate = 300
export const dynamicParams = false

export default async function ReviewDetailLayout({
    children, 
    params
}: {
        children: React.ReactNode,
        params: { shopId: string }
}) {
    const shop = await getShopDetail(params.shopId)
    return (
        <>
            <div className="flex justify-between place-items-center py-2 w-full
                sticky top-0  bg-white border-b md:border-t border-gray-200 px-6">
                <div className="place-center space-x-3">
                    <Image src={shop.image} alt={shop.name} width={100} height={100} className="h-10 w-10 rounded-full ring-primary ring-1 ring-offset-2" />
                    <h2 className="font-medium text-xl text-gray-600">{shop.name}</h2>
                </div>


                {/* Ramen shop title */}
                <ShopBookmark params={params} />
            </div>
            <div>{children}</div>
        </>
    );
}
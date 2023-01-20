import { notFound } from "next/navigation";
import { db } from "../../../libs/client/prisma";
import { getShopDetail } from "../../../libs/server/services/shop";
import ReviewsForShops from "./ReviewsForShop.tsx";
import ShopDetail from "./ShopDetail";
import AsyncImage from './AsyncImage';

export const dynamicParams = false;

export default async function Page({ params }: { params: { shopId: string } }) {
  const shop = await getShopDetail(params.shopId);
  if (shop == null) {
    notFound();
  }
  return (
    <>
      <div className="flex flex-col justify-center place-items-center">
        {/* Header  */}

        <AsyncImage shop={shop} />
        {/* Thumnail  */}

        <div className="p-3 sm:px-0 w-full h-auto bg-white sm:w-[500px] md:rounded-xl">
          <div className="flex space-x-3 text-primary "></div>
          <ShopDetail params={params} />
          <ReviewsForShops shopId={params.shopId} />
        </div>
        {/* Article Section  */}

        {/* Footer button  */}
      </div>
    </>
  );
}
export async function generateStaticParams() {
  const ramens = await db.ramenShop.findMany({
    select: { id: true },
  });
  return ramens.map((ramen) => ({
    shopId: ramen.id,
  }));
}

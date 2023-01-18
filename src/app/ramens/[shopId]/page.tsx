import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "../../../libs/client/prisma";
import { getShopDetail } from "../../../libs/server/services/shop";
import { cn } from "../../../utils/cn";
import ReviewsForShops from "./ReviewsForShop.tsx";
import ShopDetail from "./ShopDetail";

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

        <Image
          src={shop?.image as string}
          alt={shop.name}
          width={600}
          height={600}
          className={cn(
            "w-[100%] sm:w-[350px] aspect-square sm:rounded-md sm:mt-5"
          )}
        />
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

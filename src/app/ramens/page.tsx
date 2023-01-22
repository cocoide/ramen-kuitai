import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getAllShops } from "../../libs/server/services/shop";
import { cn } from "../../utils/cn";
import DotsLoading from "../@Components/Animations/DotsLoading";
import RamenHomeFooter from "./RamenHomeFooter";
import TopTab from './TopTab';
export const revalidate = 300;
export const dynamic = "force-static";

export default async function Page() {
  const ramens = await getAllShops();
  return (
    <div className="flex flex-col justify-center mb-10">
      <div className="place-center w-screen mt-3"
      > <TopTab />
      </div>
      {/* Ramen Header  */}

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            place-items-center overflow-auto gap-4 px-4 sm:gap-8  sm:px-10 py-4 sm:py-8"
      >
        {ramens.map((ramen) => {
          return (
            <div key={ramen.id} className="flex flex-col">
              <Link href={`/ramens/${ramen.id}`} className="bg-gray-200">
                <Image
                  src={ramen.image as string}
                  alt={ramen.name}
                  width={500}
                  height={500}
                  className={cn("rounded-md h-auto aspect-square animate-appear")}
                />
              </Link>

              <div className="flex justify-between items-center text-primary mt-1 mx-2">
                <Link
                  href={`/ramens/${ramen.id}`}
                  className="text-gray-600 font-medium "
                >
                  {ramen.name}
                </Link>
                <Suspense
                  fallback={
                    <div className="ml-auto">
                      <DotsLoading />
                    </div>
                  }
                >
                  <RamenHomeFooter shopId={ramen.id} />
                </Suspense>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

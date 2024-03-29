import { PencilIcon, ShareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cache } from "react";
import { asyncComponent } from "../../../../error/async-error";
import { db } from "../../../libs/client/prisma";
import { getUserBookmarks } from "../../../libs/server/services/user";
import { getCurrentUser } from "../../../libs/server/session";
import BookmarkButton from "../components/BookmarkButton";

const getShopDetail = cache(async (shopId: string) => {
  return await db.ramenShop.findUnique({
    where: {
      id: shopId,
    },
    select: {
      name: true,
      bookmarkedBy: true,
    },
  });
});
const RamenFooter = asyncComponent(
  async ({ params }: { params: { shopId: string } }) => {
    const user = await getCurrentUser();
    const shop = await getShopDetail(params.shopId);
    const bookmarks = await getUserBookmarks(user?.id);
    const checkIsBookmarked = (shopId: string): boolean => {
      return (
        bookmarks != null ?
          bookmarks.some((bookmark) => bookmark.id.includes(shopId))
          : false)
    };
    return (
      <div>
        <div className="fixed bottom-0 w-full flex justify-center items-center p-3 space-x-5">
          <div className="bg-white text-primary ring-1 ring-primary rounded-md py-2 px-3 place-center">
            <ShareIcon className="w-5 h-5 text-primary" />
            共有
          </div>
          <div className="bg-white text-primary ring-1 ring-primary rounded-md  place-center py-2 px-3">
            <BookmarkButton
              id={params.shopId}
              name={shop?.name as string}
              Bookmarked={checkIsBookmarked(params.shopId)}
            />
            保存
          </div>

          <Link
            href={`/review?shopId=${params.shopId}`}
            className="bg-white text-primary ring-1 ring-primary rounded-md py-2 px-3 place-center"
          >
            <PencilIcon className="w-5 h-5 text-primary" />
            投稿
          </Link>
        </div>
      </div>
    );
  }
);
export default RamenFooter;

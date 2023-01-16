import { BookmarkIcon, ChatBubbleOvalLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { cache } from 'react'
import { asyncComponent } from '../../../error/async-error'
import { db } from '../../libs/client/prisma'
import { getUserBookmarks } from '../../libs/server/services/user'
import { getCurrentUser } from '../../libs/server/session'
import BookmarkButton from './components/BookmarkButton'

const getShopDetail = cache(async (shopId: string) => {
    return await db.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: {
            name: true,
            _count: {
                select: {
                    bookmarkedBy: true,
                    reviews: true,
                },
            },
        },
    })
});

const RamenHomeFooter = asyncComponent(async ({ shopId }: { shopId: string }) => {
    const user = await getCurrentUser();
    const bookmarks = await getUserBookmarks(user?.id)
    const shop = await getShopDetail(shopId)

    const checkIsBookmarked = (shopId: string): boolean => {
        return bookmarks.some(bookmark => bookmark.id.includes(shopId))
    };
    return (
        <div className="place-center">
            <Link href={`/review?shopId=${shopId}`} className="place-center text-primary mr-3">
                <PencilIcon className="h-5 w-5" />
                {shop._count.reviews}
            </Link>

            {/* 非ログイン時は、ログインページへリダイレクト */}
            {user ?
            <BookmarkButton id={shopId} name={shop.name} Bookmarked={checkIsBookmarked(shopId)} />
                :
                <Link href={"/login"}
                    className="bg-white rounded-full place-center">
                    <BookmarkIcon className="text-primary h-5 w-5" />
                </Link>
            }
            <h3 className="">{shop._count.bookmarkedBy}</h3>
        </div>
    )
})
export default RamenHomeFooter
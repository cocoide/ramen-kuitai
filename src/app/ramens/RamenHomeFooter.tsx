import { PencilIcon, ShareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { cache } from 'react'
import { asyncComponent } from '../../../error/async-error'
import prisma from '../../libs/client/prisma'
import { getUserBookmarks } from '../../libs/server/services/user'
import { getCurrentUser } from '../../libs/server/session'
import BookmarkButton from './components/BookmarkButton'

const getShopDetail = cache(async (shopId: string) => {
    return await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: {
            name: true,
            _count: {
                select: {
                    bookmarkedBy: true,
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
            <BookmarkButton id={shopId} name={shop.name} Bookmarked={checkIsBookmarked(shopId)} />
            <h3 className="">{shop._count.bookmarkedBy}</h3>
        </div>
    )
})
export default RamenHomeFooter
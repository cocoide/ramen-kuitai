import { getUserBookmarks } from '../../../libs/server/services/user'
import { getCurrentUser } from '../../../libs/server/session'
import { asyncComponent } from '../../../../error/async-error';
import { cache } from 'react';
import prisma from '../../../libs/client/prisma';
import BookmarkButton from '../components/BookmarkButton';
import BookmarkView from './BookmarkView';

const getShopDetail = cache(async (shopId: string) => {
    return await prisma.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: {
            name: true,
            bookmarkedBy: true,
        }
    })
})


const ShopBookmark = asyncComponent(async ({ params }: { params: { shopId: string } }) => {

    const user = await getCurrentUser();
    const shop = await getShopDetail(params.shopId);
    const bookmarks = await getUserBookmarks(user?.id);

    const checkIsBookmarked = (shopId: string): boolean => {
        if (user) {
            return bookmarks.some(bookmark => bookmark.id.includes(shopId))
        }
    };

    return (
        <div>
            <BookmarkView id={params.shopId} name={shop.name} Bookmarked={checkIsBookmarked(params.shopId)} />
        </div>
    )
})
export default ShopBookmark
import { getUserBookmarks } from '../../../libs/server/services/user'
import { getCurrentUser } from '../../../libs/server/session'
import { asyncComponent } from '../../../../error/async-error';
import { cache } from 'react';
import BookmarkButton from '../components/BookmarkButton';
import BookmarkView from './BookmarkView';
import { db } from '../../../libs/client/prisma';

const getShopDetail = cache(async (shopId: string) => {
    return await db.ramenShop.findUnique({
        where: {
            id: shopId,
        },
        select: {
            name: true,
            bookmarkedBy: {
                select: { id: true }
            },
        }
    })
})


const ShopBookmark = asyncComponent(async ({ params }: { params: { shopId: string } }) => {

    const user = await getCurrentUser();
    const shop = await getShopDetail(params?.shopId);

    const checkIsBookmarked = (userId: string): boolean => {
        if (user) {
            return shop.bookmarkedBy.some(user => user.id.includes(userId))
        }
    };

    return (
        <div>
            <BookmarkView id={params?.shopId} name={shop.name} Bookmarked={checkIsBookmarked(user.id)} />
        </div>
    )
})
export default ShopBookmark
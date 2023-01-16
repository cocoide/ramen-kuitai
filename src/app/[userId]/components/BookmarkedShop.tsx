import { User } from '@prisma/client';
import Image from 'next/image';
import { cache } from 'react';
import { asyncComponent } from '../../../../error/async-error';
import { db } from '../../../libs/client/prisma';

const getBookmarkedShops = cache(async (userId: string) => {
    const res = await db.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            bookmark: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            }
        },
    })
    return res.bookmark
});
const BookmarkedShop = asyncComponent(async ({ userId }: { userId: User["id"] }) => {
    const bookmarks = await getBookmarkedShops(userId);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-3">
            {bookmarks.map((bookmark) => {
                return (
                    <div className="place-center p-3 rounded-md bg-white" key={bookmark.id}>
                        <Image src={bookmark.image} alt={bookmark.name} width={50} height={50}
                            className="rounded-md aspect-square" />
                        {bookmark.name}
                    </div>
                )
            })}
        </div>
    )
});

export default BookmarkedShop;
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { asyncComponent } from '../../../../error/async-error';
import prisma from '../../../libs/client/prisma';
import { getCurrentUser } from '../../../libs/server/session';
import SimpleAvater from '../../@Components/UserView/SimpleAvater';
import FollowButton from './FollowButton';
import Usertab from './UserTab';

const getUniqueUserData = cache(async (userId: string) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            image: true,
            bio: true,
            _count: {
                select: {
                    posts: true,
                    following: true,
                    followedBy: true,
                },
            },
        },
    });
});
const UserDetail = asyncComponent(async ({ userId }: { userId: string }) => {
    const nowUser = await getCurrentUser();
    if (!nowUser) {
        notFound()
    };
    const user = await getUniqueUserData(userId);
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-white">
                <div className="flex justify-center p-3">

                    <SimpleAvater w={30} h={30} image={user?.image} />

                    <div className="flex flex-col m-5 font-medium text-gray-600 space-y-3">
                        <div className="">
                            <div className="text-bold">ユーザー名：{user?.name}</div>
                            <div className="text-bold">自己紹介：{user?.bio}</div>
                            <div>🍜投稿したらあ活：{user?._count.posts}杯</div>

                            <div className="place-center text-bold space-x-3 mt-3">
                                <Link href={`/${userId}/following`}>フォロー：{user?._count.following}</Link>
                                <h3>フォロワー：{user?._count.followedBy}</h3>
                            </div>

                        </div>
                    </div>
                </div>
                {nowUser ?
                <FollowButton following={nowUser?.id} followed={userId} name={user?.name} />
                    :
                    <Link href={"/login"}
                        className="place-center rounded-full bg-gray-100 text-gray-600 hover:brightness-80 p-1 w-full"
                    >フォローする</Link>
                }
            </div>
            <Usertab userId={userId} />
        </div>
    )
});
export default UserDetail
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
    // if (!nowUser) {
    //     notFound()
    // };
    const user = await getUniqueUserData(userId);
    return (
        <div className="flex flex-col pt-5">
            <div className="flex flex-col bg-white mx-10 md:mx-[100px] lg:mx-[200px]">
                <div className="flex justify-between items-center">

                    <SimpleAvater w={17} h={17} image={user?.image} />

                    <div className="place-center text-sm space-x-3 mb-3 text-gray-600">
                        <div className="flex flex-col justify-center text-center ml-12 mr-5">{user?._count.posts}<div>投稿</div></div>
                        <Link href={`/${userId}/followed`} className="flex flex-col justify-center text-center">{user?._count.followedBy}<div>フォロワー</div></Link>
                        <Link href={`/${userId}/following`} className="flex flex-col justify-center text-center">{user?._count.following}<div>フォロー中</div></Link>
                    </div>
                </div>

                <div className="text-bold text-start mt-3">{user?.name}</div>
                <div className="text-bold text-star mb-3">{user?.bio}</div>

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
import Image from 'next/image';
import Link from 'next/link';
import { cache, Suspense } from 'react'
import { db } from '../../../libs/client/prisma';
import ParcialLoading from '../../@Components/Animations/ParciaLoading';
import ToggleButton from './SuggestFollow';
import ModalContent from './SuggestFollow/ModalContent';
import UnFollowButton from './UnFollowButton';

const getFollowing = cache(async (userId: string) => {
    if (userId != null) {
        const res = await db.user.findUnique({
            where: {
                id: userId
            },
            select: {
                following: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    },
                }
            }
        })
        return res?.following
    }
});

const FollowingPage = async ({ params }: { params: { userId: string } }) => {
    const followings = await getFollowing(params.userId)
    return (
        <div className="bg-gray-200 w-full h-screen p-3">
            <div className="bg-white rounded-md p-2 divide-y divide-gray-200">
                {followings === null || followings === undefined || followings.length === 0 ?
                    <h2 className="place-center space-x-3"><div>フォローしてる人がいません</div>
                        <ToggleButton ><Suspense fallback={<ParcialLoading />}></Suspense><ModalContent /></ToggleButton></h2> :
                    followings?.map(follow => {
                    return (
                        <div key={follow.id} className="flex justify-between items-center p-2">
                            <Link className="place-center w-auto"
                                href={`/${follow.id}`}>
                                <Image src={follow.image as string} alt={follow.name as string} width={50} height={50}
                                    className="rounded-full aspect-square h-10 w-10" />
                                <h3>{follow.name}</h3>
                            </Link>
                            <UnFollowButton userId={follow.id} />
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}
export default FollowingPage;
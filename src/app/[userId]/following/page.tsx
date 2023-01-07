import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react'
import prisma from '../../../libs/client/prisma'
import UnFollowButton from './UnFollowButton';

const getFollowing = cache(async (userId: string) => {
    const res = await prisma.user.findUnique({
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
    return res.following
});

const FollowingPage = async ({ params }: { params: { userId: string } }) => {
    const followings = await getFollowing(params.userId)
    return (
        <div className="bg-gray-200 w-full h-screen p-3">
            <div className="bg-white rounded-md p-2 divide-y divide-gray-200">
                {followings.map(follow => {
                    return (
                        <div key={follow.id} className="flex justify-between items-center p-2">
                            <Link className="place-center w-auto"
                                href={`/${follow.id}`}>
                                <Image src={follow.image} alt={follow.name} width={50} height={50}
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
import { BookmarkIcon, HandThumbUpIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { User } from '@prisma/client'
import Link from 'next/link';
import { notFound } from 'next/navigation'
import { cache, Suspense } from 'react'
import prisma from '../../libs/client/prisma'
import SimpleAvater from '../@Components/UserView/SimpleAvater';
import CreateReviewModal from '../post/components/CreateReviewModal';
import PostedReview from './components/PostedReview';

export const revalidate = 10; // revalidate this page every 10 seconds

const getUserData = cache(async (userId: User["id"]) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        }
    })
});

type UserIdProps = {
    params: { userId: string }
};
export default async function Page({ params }: UserIdProps) {
    const user = await getUserData(params.userId)
    if (!user) {
        notFound();
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-white">
                <div className="flex justify-center p-3">

                    <SimpleAvater w={30} h={30} image={user.image} />

                    <div className="flex flex-col m-5 font-medium text-gray-600 space-y-3">
                        <div> {user.bio}</div>
                        <div className="">
                            <div className="text-bold">ユーザー名：{user.name}</div>
                            <div className="text-bold">自己紹介：{user.bio}</div>
                            <div>🍜投稿したらあ活：{user.id}杯</div>
                        </div>
                    </div>
                </div>
                <Link href="/setting" className="place-center bg-gray-100 mx-10 mb-3 rounded-full text-gray-600 hover:brightness-80 p-1"
                >プロフィールを編集</Link>

            </div>



            <div className="place-center w-screen space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 font-medium">

                <h3 className="border-b-2 border-primary  p-3 place-center text-primary">
                    <Squares2X2Icon className="h-7 w-7" />
                    投稿</h3>

                <h3 className="place-center p-3 text-secondary">
                    <BookmarkIcon className="h-7 w-7" />
                    保存 </h3>

                <h3 className="place-center p-3 text-secondary">
                    <HandThumbUpIcon className="h-7 w-7" />
                    いいね</h3>
            </div>
            <Suspense fallback={<div className="p-3 grid-cols-1 lg:grid-cols-2 gap-5 w-screen h-full">
                <div className="bg-gray animate-pulse p-3 rounded-xl h-15 w-[80%]"></div>
                <div className="bg-gray animate-pulse p-3 rounded-xl h-15 w-[80%]"></div>
                <div className="bg-gray animate-pulse p-3 rounded-xl h-15 w-[80%]"></div>
                <div className="bg-gray animate-pulse p-3 rounded-xl h-15 w-[80%]"></div>
            </div>}>
                <PostedReview userId={user.id} />
            </Suspense>
            <CreateReviewModal />
        </div>
    )
};

export async function generateStaticParams() {
    const users = await prisma.user.findMany({
        select: { id: true }
    })
    return users.map((user) => ({
        userId: user.id
    }));
}
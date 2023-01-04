import { BookmarkIcon, HandThumbUpIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { User } from '@prisma/client'
import Link from 'next/link';
import { notFound } from 'next/navigation'
import { cache } from 'react'
import prisma from '../../libs/client/prisma'
import SimpleAvater from '../@Components/UserView/SimpleAvater';


const getUserData = cache(async (userId: User["id"]) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        }
    })
});

interface UserProps {
    params: { userId: string }
};
export default async function UserPage({ params }: UserProps) {
    const user = await getUserData(params.userId)
    if (!user) {
        notFound();
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-white">
                <div className="flex justify-center p-3">

                    <SimpleAvater w={30} h={30} image={user?.image} />

                    <div className="flex flex-col m-5 font-medium text-gray-600 space-y-3">
                        <div> {user.bio}</div>
                        <div className="">
                            <div>🍜今年のラーメン：{user.id}杯</div>
                            <div className="text-bold">獲得したポイント: {user.name}</div>
                        </div>
                    </div>

                </div>
                <Link href="/setting" className="place-center bg-gray-100 mx-10 mb-3 rounded-full text-gray-600 hover:brightness-80 p-1"
                >プロフィールを編集</Link>


            </div>



            <div className="place-center w-screen space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t font-medium">

                <h3 className="border-b-2 border-primary  py-3 place-center text-primary">
                    <Squares2X2Icon className="h-7 w-7" />
                    あなたの投稿</h3>

                <h3 className="place-center py-3 text-secondary">
                    <BookmarkIcon className="h-7 w-7" />
                    保存したお店</h3>

                <h3 className="place-center py-3 text-secondary">
                    <HandThumbUpIcon className="h-7 w-7" />
                    いいねした投稿</h3>
            </div>
            {/* <CreateReviewModal /> */}
        </div>
    )
};
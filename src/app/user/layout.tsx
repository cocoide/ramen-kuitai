import { PlusSmallIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense } from 'react';
import { getCurrentUser } from '../../libs/server/session';
import CircleLoading from '../@Components/Animations/CircleLoading';
import SimpleAvater from '../@Components/UserView/SimpleAvater';
import UserBio from './components/UserBio';

export default async function MyPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser()
    return (
        <>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div className="flex flex-col">
                    <div className="flex justify-center p-3 bg-[#FFAF19]">
                        <Link href={"/user/profile"}>
                            <SimpleAvater w={30} h={30} image={user?.image} />
                        </Link>
                        <UserBio />
                    </div>


                    <Link href="/user/setting" className="flex justify-center bg-gray-100 mx-10 mb-3 rounded-full text-gray-600 hover:brightness-80"
                    >プロフィールを編集</Link>
                </div>
                <div>{children}</div>
                <button className="md:hidden inline-block rounded-full bg-[#FFAF19]  p-2 w-13 h-13 drop-shadow-xl fixed bottom-5 right-5 ">
                    <PlusSmallIcon className="h-10 w-10 text-white" /></button>
            </Suspense>
        </>
    );
}
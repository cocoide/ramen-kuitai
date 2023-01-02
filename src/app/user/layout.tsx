import { PlusSmallIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense } from 'react';
import { getCurrentUser } from '../../libs/server/session';
import CircleLoading from '../@components/Animations/CircleLoading';
import SimpleAvater from '../@components/UserView/SimpleAvater';
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
                <div className="flex flex-col bg-white">
                    <div className="flex justify-center p-3">
                        <Link href={"/user/profile"}>
                            <SimpleAvater w={30} h={30} image={user?.image} />
                        </Link>
                        <UserBio />
                    </div>

                    <Link href="/user/setting" className="flex justify-center bg-gray-100 mx-10 mb-3 rounded-full text-gray-600 hover:brightness-80 p-1"
                    >プロフィールを編集</Link>
                </div>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
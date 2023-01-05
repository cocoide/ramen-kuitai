import { User } from '@prisma/client'
import { notFound } from 'next/navigation'
import { cache, Suspense } from 'react'
import prisma from '../../libs/client/prisma'
import { getUniqueUserAllData } from '../../libs/server/services/user';
import CreateReviewModal from '../post/components/CreateReviewModal';
import PostedReview from './components/PostedReview';

export const revalidate = 30; // revalidate this page every 10 seconds

export default async function Page({ params }: { params: { userId: string } }) {
    const user = await getUniqueUserAllData(params.userId)
    if (!user) {
        notFound();
    };
    return (
        <div className="">
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
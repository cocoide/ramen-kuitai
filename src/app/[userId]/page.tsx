import { notFound } from 'next/navigation'
import {  Suspense } from 'react'
import prisma from '../../libs/client/prisma';
import { getUniqueUserAllData } from '../../libs/server/services/user';
import ParcialLoading from '../@Components/Animations/ParciaLoading';
import CreateReviewModal from '../reviews/components/CreateReviewModal';
import PostedReview from './components/PostedReview';

// export const revalidate = 30; 
// revalidate this page every 30 seconds

export default async function Page({ params }: { params: { userId: string } }) {
    const user = await getUniqueUserAllData(params.userId)
    if (!user) {
        notFound()
    };
    return (
        <div className="bg-gray-200 w-screen h-min-screen">
                <PostedReview userId={user.id} />
            {/* <CreateReviewModal /> */}
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
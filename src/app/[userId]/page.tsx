import { notFound } from 'next/navigation'
import {  Suspense } from 'react'
import { getUniqueUserAllData } from '../../libs/server/services/user';
import ParcialLoading from '../@Components/Animations/ParciaLoading';
import CreateReviewModal from '../post/components/CreateReviewModal';
import PostedReview from './components/PostedReview';

// export const revalidate = 30; 
// revalidate this page every 10 seconds

export default async function Page({ params }: { params: { userId: string } }) {
    const user = await getUniqueUserAllData(params.userId)
    if (!user) {
        notFound();
    };
    return (
        <div className="bg-gray-100 w-screen h-screen">
            <Suspense fallback={<ParcialLoading />}>
                <PostedReview userId={user.id} />
            </Suspense>
            <CreateReviewModal />
        </div>
    )
};

// export async function generateStaticParams() {
//     const users = await prisma.user.findMany({
//         select: { id: true }
//     })
//     return users.map((user) => ({
//         userId: user.id
//     }));
// }
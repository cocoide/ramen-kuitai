import FetchReview from './components/FetchReview'
import CreateReview from './components/CreateReview';
import { cache, use } from 'react';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import prisma from '../../libs/client/prisma';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect } from 'next/navigation';
import CreateReviewModal from './components/CreateReviewModal';
// import CreateModal from './components/CreateModal';

// Now userId is email
const getReviewForUser = cache(async (userId: User["email"]) => {
    return await prisma.review.findMany({
        where: {
            authorId: userId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            image: true,
            valuation: true,
        },
    })
});

export default async function Page() {
    const user = await getCurrentUser()
    if (!user) {
        redirect(authOptions.pages.signIn)
    }
    const reviews = await getReviewForUser(user.email);
    return (
        <div className="">
            <h2 className="flex justify-center mt-3">📔投稿一覧</h2>
            <div className="h-screen">
                <FetchReview review={reviews} user={user} />
            </div>

            <div className="">
                <CreateReviewModal />
            </div>

        </div>
    )
}
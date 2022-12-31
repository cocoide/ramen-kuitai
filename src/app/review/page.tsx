
import FetchReview from './components/FetchReview'
import CreateReview from './components/CreateReview';
import { cache, use } from 'react';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import prisma from '../../libs/client/prisma';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect } from 'next/navigation';

// Now userId is email
const getReviewForUser = cache(async (userId: User["email"]) => {
    return await prisma.review.findMany({
        where: {
            authorId: userId,
        },
        select: {
            id: true,
            title: true,
            image: true,
            rating: true,
        },
    })
});

export default async function ReviewPage() {
    const user = await getCurrentUser()
    if (!user) {
        redirect(authOptions.pages.signIn)
    }
    const reviews = await getReviewForUser(user.email);
    const session = await getSession();
    return (
        <>
        <div className='bg-white'>
            <CreateReview />
            </div>
            <FetchReview review={reviews} session={session} />
        </>
    )
}
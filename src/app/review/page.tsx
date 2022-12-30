
import FetchReview from './components/FetchReview'
import CreateReview from './components/CreateReview';
import axios from 'axios';
import { API_URL } from '../../libs/client/constants';
import { cache, use } from 'react';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import prisma from '../../libs/client/prisma';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect } from 'next/navigation';

// async function fetchYourReview() {
//     const body = await axios.get(`${API_URL}/review`)
//     const { data } = body
//     return data
// };

// Now userId is email
const getReviewForUser = cache(async (userId: User["email"]) => {
    return await prisma.review.findMany({
        where: {
            authorId: userId,
        },
        select: {
            id: true,
            title: true,
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
    console.log(reviews)

    return (
        <div className='bg-white'>
            <CreateReview />
            <FetchReview review={reviews} session={session} />
        </div>
    )
}
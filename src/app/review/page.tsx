import FetchReview from './components/FetchReview'
import { cache, use } from 'react';
import { authOptions } from '../../libs/server/auth';
import { User } from '@prisma/client';
import prisma from '../../libs/client/prisma';
import { getCurrentUser, getSession } from '../../libs/server/session';
import { redirect, useSearchParams } from 'next/navigation';
import CreateReview from './components/CreateReview';
import ShopId from '../../pages/api/shop/[shopId]';

type ParamsProps = {
    searchParams: { shopId: string }
}

export default async function Page() {
    const user = await getCurrentUser()
    if (!user) {
        redirect(authOptions.pages.signIn)
    }
    return (
        <div className="">
            <CreateReview />
        </div>
    )
}
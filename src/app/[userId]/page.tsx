import { User } from '@prisma/client'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import prisma from '../../libs/client/prisma'


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
        <div className="">
            {params.userId}
            {user.id}
            {user.bio}
        </div>
    )
};
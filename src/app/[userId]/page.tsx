import { User } from '@prisma/client'
import { notFound } from 'next/navigation'
import prisma from '../../libs/client/prisma'


async function getUserData(userId: User["id"]) {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        }
    })
};

interface UserProps {
    params: { userId: string }
};
export default async function UserMyPage({ params }: UserProps) {
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
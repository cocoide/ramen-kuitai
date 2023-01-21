import { notFound } from 'next/navigation'
import { db } from '../../libs/client/prisma';
import { getUniqueUserAllData } from '../../libs/server/services/user';
import PostedReview from './components/PostedSection/index';


export const revalidate = 300
export const dynamicParams = false

export default async function Page({ params }: { params: { userId: string } }) {
    const user = await getUniqueUserAllData(params.userId)
    if (user == null) {
        notFound()
    };
    return (
        <div className="bg-gray-200 w-screen h-screen">
            <PostedReview userId={user.id} />
        </div>
    )
};

export async function generateStaticParams() {
    const users = await db.user.findMany({
        select: { id: true }
    })
    return users.map((user) => ({
        userId: user.id
    }));
}
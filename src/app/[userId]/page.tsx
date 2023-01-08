import { notFound } from 'next/navigation'
import { getUniqueUserAllData } from '../../libs/server/services/user';
import PostedReview from './components/PostedReview';

export default async function Page({ params }: { params: { userId: string } }) {
    const user = await getUniqueUserAllData(params.userId)
    if (!user) {
        notFound()
    };
    return (
        <div className="bg-gray-200 w-screen h-min-screen">
            <PostedReview userId={user.id} />
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
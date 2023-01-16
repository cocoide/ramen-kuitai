import { ChatBubbleOvalLeftIcon } from '@heroicons/react/20/solid';
import prisma from '../../../libs/client/prisma';

// export const revalidate = 300
export const dynamicParams = false

export default async function ReviewDetailLayout({
    children, 
    params
}: {
        children: React.ReactNode,
        params: { shopId: string }
}) {

    return (
        <>
            <div>{children}</div>
        </>
    );
}


// export async function generateStaticParams() {
//     const ramens = await prisma.ramenShop.findMany({
//         select: { id: true }
//     })
//     return ramens.map((ramen) => ({
//         shopId: ramen.id
//     }));
// }
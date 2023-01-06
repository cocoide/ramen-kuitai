import { Suspense } from 'react';
import { getCurrentUser } from '../../../libs/server/session';
import RamenFooter from './RamenFooter';

export default async function ReviewDetailLayout({
    children, 
    params
}: {
        children: React.ReactNode,
        params: { shopId: string }
}) {
    const user = await getCurrentUser();
    return (
        <>
            <div>{children}</div>
            <Suspense fallback={<div>Loading...</div>}>
                {user &&
                    <RamenFooter params={params} userId={user?.id} />
                }
            </Suspense>
        </>
    );
}
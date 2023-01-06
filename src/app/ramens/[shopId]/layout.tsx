import { Suspense } from 'react';
import { getCurrentUser } from '../../../libs/server/session';
import DotsLoading from '../../@Components/Animations/DotsLoading';
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
            <Suspense fallback={<div className="fixed button-2"><DotsLoading /></div>}>
                {user &&
                    <RamenFooter params={params} userId={user?.id} />
                }
            </Suspense>
        </>
    );
}
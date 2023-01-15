import { Suspense } from 'react';
import ParcialLoading from '../../@Components/Animations/ParciaLoading';
import ShopBookmark from './ShopBookmark';

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
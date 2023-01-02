import { Suspense } from 'react';
import CircleLoading from '../../@components/Animations/CircleLoading';

export default function ReviewDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Suspense fallback={<div><CircleLoading /></div>}> */}
                <div>{children}</div>
            {/* </Suspense> */}
        </>
    );
}
import { Suspense } from 'react';
import CircleLoading from '../../@Components/Animations/CircleLoading';

export default function ReviewDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div>{children}</div>
        </>
    );
}
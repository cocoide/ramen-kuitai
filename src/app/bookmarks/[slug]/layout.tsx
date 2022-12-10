import { Suspense } from 'react';
import Loading from '../../@Components/Loading';

export default function RamenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
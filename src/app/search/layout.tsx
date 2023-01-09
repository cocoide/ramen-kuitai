import { Suspense } from 'react';
import CircleLoading from '../@Components/Animations/CircleLoading';

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
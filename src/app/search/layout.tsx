import { Suspense } from 'react';
import CircleLoading from '../@Components/Animations/CircleLoading';

export const dynamic = "force-dynamic"

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
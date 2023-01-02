import { Suspense } from 'react';
import CircleLoading from '../../@components/Animations/CircleLoading';

export default function DashboardLayout({
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
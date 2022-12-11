import { Suspense } from 'react';
import Loading from '../@Components/@Common/Loading';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Suspense fallback={<div><Loading /></div>}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
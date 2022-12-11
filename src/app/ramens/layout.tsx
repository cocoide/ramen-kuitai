import { Suspense } from 'react';
import Loading from '../@Components/@Common/Loading';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="backdrop-blur-sm bg-white/50 h-10 w-full sticky top-0">
            </div>
            <Suspense fallback={<div><Loading /></div>}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
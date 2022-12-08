import { Suspense } from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div>nested layout</div>
            <Suspense fallback={<div>ラーメン取得中.. </div>}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
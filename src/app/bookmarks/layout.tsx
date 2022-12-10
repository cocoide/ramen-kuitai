import { Suspense } from 'react';


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="backdrop-blur-sm bg-white/50 h-10 w-full sticky top-0">
            </div>
            <Suspense fallback={<div>保存したお店を取得中.. </div>}>
                <div>{children}</div>
            </Suspense>
        </>
    )
}
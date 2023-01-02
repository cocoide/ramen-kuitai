import { Suspense } from 'react';
import CircleLoading from '../@components/Animations/CircleLoading';

export default function DashboardLayout({
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
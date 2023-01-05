import { Suspense } from 'react';
import UserDetail from './components/UserDetail';

export default function UserLayout({
    children, params
}: {
        children: React.ReactNode,
        params: { userId: string }
}) {
    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <UserDetail userId={params.userId} />
            </Suspense>
            <div>{children}</div>
        </div>
    );
}
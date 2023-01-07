import { Suspense } from 'react';
import ParcialLoading from '../../@Components/Animations/ParciaLoading';
export default function UserLayout({
    children, params
}: {
    children: React.ReactNode,
    params: { userId: string }
}) {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center pt-5">
                <ParcialLoading />
            </div>}>
                <div>{children}</div>
            </Suspense>
        </div>
    );
}
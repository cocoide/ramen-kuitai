import { Suspense } from 'react';
import DotsLoading from '../@Components/Animations/DotsLoading';
import ParcialLoading from '../@Components/Animations/ParciaLoading';
import UserDetail from './components/UserDetail';


export default function UserLayout({
    children, params
}: {
        children: React.ReactNode,
        params: { userId: string }
}) {
    return (
        <div>
            <Suspense fallback={<DotsLoading />}>
                <UserDetail userId={params.userId} />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center pt-5">
                <ParcialLoading />
            </div>}>
            <div>{children}</div>
            </Suspense>
        </div>
    );
}
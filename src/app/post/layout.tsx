import { Suspense } from 'react';
import CircleLoading from '../@Components/Animations/CircleLoading';
import CreateReview from './components/CreateReview';
import CreateReviewModal from './components/CreateReviewModal';

export default function PostReviewLayout({
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
import { ChevronLeftIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Suspense } from 'react';
import CircleLoading from '../../@Components/Animations/CircleLoading';

export default function ReviewDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="bg-white h-10 border-t-2 border-[#f3f0eb] place-items-center">
                <Link href="/ramens"><ChevronLeftIcon className="h-8 w-8 text-[#D8CEBA]" /></Link>
            </div>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div>{children}</div>
            </Suspense>
        </>
    );
}
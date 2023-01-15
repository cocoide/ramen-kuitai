"use client"
import { Suspense } from 'react';
import { cn } from '../../utils/cn';
import useScroll from '../../utils/hooks/useScroll';
import CircleLoading from '../@Components/Animations/CircleLoading';
import SearchForm from './SearchForm';

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const scrollPosition = useScroll();
    return (
        <div className="bg-gray-100">
            <div className={cn("sticky top-0 inset-x-0 px-2 py-4",
                scrollPosition >= 10 ? "backdrop-blur-sm bg-white/90" : ""
            )}>
                <SearchForm />
            </div>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div>{children}</div>
            </Suspense>
        </div>
    );
}
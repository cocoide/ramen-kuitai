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
        <div className="">
            <div className={cn("fixed top-0 inset-x-0 md:sticky px-2 py-4 z-30",
                scrollPosition >= 500 ? "backdrop-blur-sm bg-white/90" : ""
            )}>
                <SearchForm />
            </div>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div>{children}</div>
            </Suspense>
        </div>
    );
}
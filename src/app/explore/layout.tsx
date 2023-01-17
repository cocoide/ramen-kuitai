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
            <div className={cn("fixed top-0 inset-x-0 md:top-[60px] px-2 py-4 md:px-10 lg:px-20 z-30",
                scrollPosition >= 500 ? "bg-white" : ""
            )}>
                <SearchForm />
            </div>
            <Suspense fallback={<div><CircleLoading /></div>}>
                <div>{children}</div>
            </Suspense>
        </div>
    );
}
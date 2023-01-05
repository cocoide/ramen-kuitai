"use client"
import { BookmarkIcon, HandThumbUpIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../../utils/cn';

export default function Usertab({ userId }: { userId: string }) {
    const pathName = usePathname();
    return (
        <div className="place-center w-screen space-x-5
        sticky top-0  backdrop-blur-sm bg-white/95 font-medium">

            <Link href={`/${userId}`}
                className={cn("p-3 place-center",
                    pathName == `/${userId}` ?
                        "text-primary border-b-2 border-primary" : "text-secondary",
                )}>
                <Squares2X2Icon className="h-7 w-7" />
                <h3>投稿</h3>
            </Link>

            <Link href={`/${userId}/bookmark`}
                className={cn("p-3 place-center",
                    pathName == `/${userId}/bookmark` ?
                        "text-primary border-b-2 border-primary" : "text-secondary",
                )}>
                <BookmarkIcon className="h-7 w-7" />
                <h3>保存 </h3>
            </Link>

            <Link href={`/${userId}/favorite`}
                className={cn("p-3 place-center",
                    pathName == `/${userId}/favorite` ?
                        "text-primary border-b-2 border-primary" : "text-secondary",
                )}>
                <HandThumbUpIcon className="h-7 w-7" />
                <h3>いいね</h3>
            </Link>
        </div>
    )
}
"use client"
import { BookmarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { API_URL } from '../../../libs/client/constants';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';




async function SubmitBookmark(id: string, name: string) {
    toast.success(`『${name}』を保存しました`);
    return await fetch(`${API_URL}/shop/bookmark/${id}`, {
        method: "PATCH"
    })
};

async function DeleteBookmark(id: string, name: string) {
    toast(() => (
        <span>
            『{name}』を削除しました
        </span>
    ));
    return await fetch(`${API_URL}/shop/bookmark/${id}`, {
        method: "DELETE"
    })
};

export default function BookmarkView({ id, name, bookmarkedBy }: { id: string, name: string, bookmarkedBy: { id: string }[] }) {
    const [isBookmark, setIsBookmark] = useState<boolean>(false)
    const { data: session } = useSession()

    useEffect(() => {
        const Bookmarked = (userId: string): boolean => {
            if (session?.user.id) {
                return bookmarkedBy.some(user => user.id == userId)
            }
        };
        setIsBookmark(Bookmarked(session?.user.id))
    }, []);
    const router = useRouter();
    return (
        <div>
            {(!isBookmark) ?
                <button onClick={() => {
                    SubmitBookmark(id, name)
                    setIsBookmark(true)
                    return router.refresh();
                }}
                    className="rounded-full place-center ring-1 ring-primary  p-2 bg-[#fffdfa] hover:bg-[#e8ffec] hover:ring-[#4CC764] duration-300 hover:text-[#4CC764] text-primary">
                    <BookmarkIcon className=" h-5 w-5 " />
                </button>
                // text-[#4CC764]
                :
                <div className="ring-1 ring-[#4CC764] rounded-full p-2 bg-[#e8ffec]">
                    <button onClick={() => {
                        DeleteBookmark(id, name)
                        setIsBookmark(false)
                        return router.refresh();
                    }}
                        className="rounded-full place-center">
                        <Image src={"/solid-icons/bookmark.svg"} alt="bookmark" width={20} height={20}
                            className="text-primary h-5 w-5" />
                    </button>
                </div>
            }
        </div>
    )
}
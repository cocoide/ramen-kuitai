"use client"
import { BookmarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { API_URL } from '../../../libs/client/constants';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

export default function BookmarkButton({ id, name, Bookmarked }: { id: string, name: string, Bookmarked: boolean }) {
    const [isBookmark, setIsBookmark] = useState<boolean>(false)
    useEffect(() => {
        setIsBookmark(Bookmarked)
    }, [])
    return (
        <div>
            {(!isBookmark) ?

                <button onClick={() => {
                    SubmitBookmark(id, name)
                    setIsBookmark(true)
                }}
                    className="bg-white rounded-full place-center p-2">
                    <BookmarkIcon className="text-primary h-5 w-5" />
                </button>
                :
                <button onClick={() => {
                    DeleteBookmark(id, name)
                    setIsBookmark(false)
                }}
                    className="bg-white rounded-full place-center p-2">
                    <Image src={"/solid-icons/bookmark.svg"} alt="bookmark" width={20} height={20}
                        className="text-primary h-5 w-5" />
                </button>
            }
        </div>
    )
}
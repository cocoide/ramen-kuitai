"use client"

import { API_URL } from '../../../../libs/client/constants'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';

async function favoriteReview(reviewId: string) {
    return await fetch(`${API_URL}/review/favorite/${reviewId}`, {
        method: 'PATCH',
    })
};

const FavoriteButton = ({ reviewId }: { reviewId: string }) => {
    const [isFavorite, setFavorite] = useState(false)
    const router = useRouter()
    return (
        <>
            {isFavorite ?
                <button onClick={() => {
                    favoriteReview(reviewId)
                    router.refresh()
                    setFavorite(false)
                }}>
                    <Image src={"/solid-icons/heart.svg"} alt="" width={30} height={30}
                        className="h-8 w-8  ring-1 ring-[#f2a5b5] rounded-full p-1 m-1 bg-[#fbecf4] " />
                </button>
                :
                <button onClick={() => {
                    favoriteReview(reviewId)
                    router.refresh()
                    setFavorite(true)
                }}>
                    <HeartIcon className="h-8 w-8 text-primary ring-1 ring-primary rounded-full p-1 m-1 hover:bg-[#fbecf4] hover:ring-[#f2a5b5] hover:text-[#f2a5b5]" />
                </button>
            }
        </>
    )
}
export default FavoriteButton
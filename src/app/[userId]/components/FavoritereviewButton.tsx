"use client"

import { HandThumbUpIcon, TrashIcon } from '@heroicons/react/24/outline'
import { API_URL } from '../../../libs/client/constants'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

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
                    <Image src={"/solid-icons/handthumbup-icon.svg"} alt="" width={30} height={30}
                        className="h-8 w-8 text-primary ring-1 ring-primary rounded-full p-1" />
                </button>
                :
                <button onClick={() => {
                    favoriteReview(reviewId)
                    router.refresh()
                    setFavorite(true)
                }}>
                    <HandThumbUpIcon className="h-8 w-8 text-primary ring-1 ring-primary rounded-full p-1" />
                </button>
            }
        </>
    )
}
export default FavoriteButton
"use client"

// import { API_URL } from '../../../../libs/client/constants'
import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { cn } from '../../../../utils/cn';

// async function favoriteReview(reviewId: string) {
//     return await fetch(`${API_URL}/review/favorite/${reviewId}`, {
//         method: 'PATCH',
//     })
// };

const FavoriteButton = ({ reviewId }: { reviewId: string }) => {
    const [isFavorite, setFavorite] = useState(false)
    const [howFavorite, setHowFavorite] = useState(5)
    const [effect, setEffect] = useState(false)
    return (
        <div className="place-center">
            <button onClick={() => {
                if (isFavorite) {
                    // favoriteReview(reviewId)
                    setFavorite(false)
                    setEffect(false)
                    setHowFavorite((howFavorite) => howFavorite - 1)
                } else {
                    // favoriteReview(reviewId)
                    setFavorite(true)
                    setEffect(true)
                    setHowFavorite((howFavorite) => howFavorite + 1)
                }
            }}
                onAnimationEnd={() => setEffect(false)}
                className={cn(effect ? "animate-heart animate-appear" : "")}
            >
                {isFavorite ?
                    <Image src={"/solid-icons/heart.svg"} alt="" width={30} height={30}
                        className="h-8 w-8  ring-1 ring-[#f2a5b5] rounded-full p-1 m-1 bg-[#fbecf4]" />
                    :
                    <HeartIcon className="h-8 w-8 text-primary ring-1 ring-primary rounded-full p-1 m-1 bg-[#fffdfa] hover:bg-[#fbecf4] hover:ring-[#f2a5b5] hover:text-[#f2a5b5]" />
                }
            </button>
            <div className={cn("text-sm", isFavorite ? "text-[#f2a5b5] " : "text-primary")}>{howFavorite}</div>
        </div>
    )
}
export default FavoriteButton
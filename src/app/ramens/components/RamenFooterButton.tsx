import { HandThumbUpIcon, HeartIcon, PencilIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import BookmarkButton from './BookmarkButton';


const RamenFooterButton = ({ shopId, name, checkIsBookmarked }: { shopId: string, name: string, checkIsBookmarked: boolean }) => {
    return (
        <div className="flex-center md:hidden w-screen bg-white">
            <button className="place-center rounded-full
            ring-1 ring-secondary m-3 p-2 text-white bg-white shadow-natural"
            ><PencilIcon className="w-8 h-8 text-secondary" />
            </button>

            <BookmarkButton id={shopId} name={name} Bookmarked={checkIsBookmarked} />

        </div>
    )
}
export default RamenFooterButton
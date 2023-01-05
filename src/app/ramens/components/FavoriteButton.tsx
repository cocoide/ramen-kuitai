"use client"
import { BookmarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { API_URL } from '../../../libs/client/constants';

async function SubmitFavorite(id: string, name: string) {
    await fetch(`${API_URL}/shop/bookmark/${id}`, {
        method: "PATCH"
    })
    return toast.success(`『${name}』を保存しました`);
};

const FavoriteButton = ({ id, name }: { id: string, name: string }) => {
    return (
        <button onClick={() => SubmitFavorite(id, name)}
            className="bg-white rounded-full place-center p-2">
            <BookmarkIcon className="text-primary h-5 w-5" />
        </button>
    )
}
export default FavoriteButton
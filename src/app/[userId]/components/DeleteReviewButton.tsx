"use client"

import { TrashIcon } from '@heroicons/react/24/outline'
import { API_URL } from '../../../libs/client/constants'
import { useRouter } from 'next/navigation';

async function deleteReview(reviewId: string) {
    return await fetch(`${API_URL}/review/${reviewId}`, {
        method: 'DELETE',
    })
};

const DeleteReviewButton = ({ reviewId }: { reviewId: string }) => {
    const router = useRouter()
    return (
        <button onClick={() => {
            deleteReview(reviewId)
            router.refresh()
        }}>
            <TrashIcon className="h-8 w-8 text-primary ring-1 ring-primary rounded-full p-1" />
        </button>
    )
}
export default DeleteReviewButton
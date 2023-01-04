"use client"
import axios from 'axios';
import { API_URL } from '../../../libs/client/constants';

type Props = {
    shopId: string,
}

async function SubmitFavorite(shopId: Props) {
    return await axios.patch(`${API_URL}/shop/bookmark/${shopId}`)
};

const FavoriteButton = (shopId: Props) => {
    return (
        <button onClick={() => SubmitFavorite(shopId)}
            className="bg-white rounded-full place-center p-2">
            いいね
        </button>
    )
}
export default FavoriteButton
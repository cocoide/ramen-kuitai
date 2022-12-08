import { notFound } from 'next/navigation';
import { use } from 'react';
import { Ramen } from '../../../@types/models/Ramen';
import { ROOT_URL } from '../../../libs/client/constants';

type Props = { params: { id: number } };


const getRamenDetail = async (id: number) => {
    const response = await fetch(
        `${ROOT_URL}/api/ramens/${id}`
    );
    const ramen: Ramen = await response.json();
    return ramen;
};

const RamenDetail = async ({ params: { id } }: Props) => {
    const ramen = await getRamenDetail(id);
    if (!ramen.id) {
        notFound();
    }
    return (
        <div className="p-2">
            <h1 className="font-bold text-lg">User詳細ページ {id}</h1>
            <div>
                <div>名前: {ramen.shop_name}</div>
            </div>
        </div>
    );
};

export default RamenDetail;
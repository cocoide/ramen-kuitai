
import { ROOT_URL } from '../../../libs/client/constants';


const getRamenDetail = async (id?: number) => {
    const res = await fetch(`${ROOT_URL}/api/ramen/${id}`, {
        method: 'GET',
    });
    return res.json();
};

const Page = async ({ params }: any) => {
    const { slug } = await params;
    const ramen = await getRamenDetail(slug)
    return (
        <>
            <div className="p-2">
                <h1 className="">ラーメン屋の詳細ページ {ramen.id}</h1>
                <div>
                </div>
            </div>
        </>
    );
};

export default Page;
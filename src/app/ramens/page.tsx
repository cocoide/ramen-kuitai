import { use } from "react";
import { Ramen } from '../../@types/models/Ramen';
import { ROOT_URL } from '../../libs/client/constants';

async function getRamenAll() {
    const res = await fetch(`${ROOT_URL}/api/ramen`);
    return res.json();
}


export default function Page() {

    const ramens: Ramen[] = use(getRamenAll())

    return (
        <>
            <h1>Ramens</h1>
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.shop_name}>
                        <div>{ramen.shop_name}</div>
                    </div>);
            })}
        </>
    );
}
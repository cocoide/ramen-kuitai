"use client"
import Image from 'next/image';
import Link from 'next/link';
import { use } from "react";
import { Ramen, ramens } from '../../@types/models/Ramen';
import { ROOT_URL } from '../../libs/client/constants';
// async function getRamenAll() {
//     const res = await fetch(`${ROOT_URL}/api/ramen`);
//     return res.json();
// }


export default function Page() {

    // const ramens: Ramen[] = use(getRamenAll())


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.shop_name} className="p-2">
                        <Link href={`/ramens/${ramen.id}`}>
                            <div>{ramen.shop_name}</div>

                            <Image src={`/ramens/${ramen.id}.jpeg`} alt={ramen.shop_name} width={300} height={200}
                                className="rounded-xl" />
                        </Link>
                    </div>);
            })}
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.shop_name} className="p-2">
                        <Link href={`/ramens/${ramen.id}`}>
                            <div>{ramen.shop_name}</div>
                            <Image src={`/ramens/${ramen.id}.jpeg`} alt={ramen.shop_name} width={300} height={200}
                                className="rounded-xl" />
                        </Link>
                    </div>);
            })}
        </div>
    );
}
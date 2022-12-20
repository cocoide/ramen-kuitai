"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Ramen, ramens } from '../../@types/models/Ramen';
import { cn } from '../../utils/cn';
// async function getRamenAll() {
//     const res = await fetch(`${ROOT_URL}/api/ramen`);
//     return res.json();



export default function Page() {
    // const ramens: Ramen[] = use(getRamenAll())
    const [onLoading, setCompleted] = useState<boolean>(true)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.shop_name} className="p-2">
                        <Link href={`/ramens/${ramen.id}`}>
                            <div>{ramen.shop_name}</div>

                            <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
                                className={cn("rounded-xl h-auto aspect-square",)
                                    // onLoading ? "blur-sm" : "blur-0")
                                }
                                onLoadingComplete={() => setCompleted(false)} />
                        </Link>
                    </div>);
            })}
            {ramens.map((ramen) => {
                return (
                    <div key={ramen.shop_name} className="p-2">
                        <Link href={`/ramens/${ramen.id}`}>
                            <div>{ramen.shop_name}</div>

                            <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
                                className={cn("rounded-xl h-auto aspect-square",)
                                    // onLoading ? "blur-sm" : "blur-0")
                                }
                                onLoadingComplete={() => setCompleted(false)} />
                        </Link>
                    </div>);
            })}

        </div>
    );
}
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ramens } from '../../../@types/models/Ramen'

export const RamenSlider = () => {
    const [width, setWidth] = useState<number>(0);
    const carousel = useRef<HTMLDivElement>(null)
    // 『HTMLDivElement』で型付けをするのポイント

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])


    return (

        <div className="">
            <motion.div ref={carousel} className='scroll-smooth overflow-x-hidden cursor-grab'>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex flex-raw"
                >
                    {ramens.map((ramen) => {
                        return (
                            <div key={ramen.shop_name} className="p-2 w-60 snap-x">
                                <>
                                    <div>{ramen.shop_name}</div>
                                    <img src={`/ramens/${ramen.id}.jpeg`} alt={ramen.shop_name} width={700} height={500}
                                        className="rounded-xl w-50 pointer-events-none snap-center" />
                                </>
                            </div>
                        );
                    })}
                    {ramens.map((ramen) => {
                        return (
                            <div key={ramen.shop_name} className="p-2 w-60">
                                <>
                                    <div>{ramen.shop_name}</div>
                                    <img src={`/ramens/${ramen.id}.jpeg`} alt={ramen.shop_name} width={700} height={500}
                                        className="rounded-xl w-50" />
                                </>
                            </div>
                        );
                    })}

                </motion.div>
            </motion.div>
        </div>
    )
}
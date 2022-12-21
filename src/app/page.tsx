"use client"
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion"
import SearchRamen from './@Components/SearchRamen';
import Image from 'next/image';
import { ramens } from '../@types/models/Ramen';
import Link from 'next/link';
import { cn } from '../utils/cn';
import RamenCarousel from './@Components/Animations/RamenCarousel';

function Home() {
    return (
        <>
            <div className="flex justify-center bg-white">
                <div className="flex-col">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className="flex justify-center">
                            {/* <RamenCarousel /> */}

                            {ramens.map((ramen) => {
                                return (
                                    <div key={ramen.shop_name} className="p-2">
                                        <Link href={`/ramens/${ramen.id}`}>
                                            <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
                                                className={cn("rounded-xl w-50 aspect-square",)
                                                } />
                                        </Link>
                                    </div>);
                            })}
                        </div>
                        <div className="flex justify-center m-5">
                            <SearchRamen />

                        </div>


                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Home;
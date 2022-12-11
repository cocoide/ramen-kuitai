"use client"
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion"
import SearchRamen from './@Components/SearchRamen';
import RamenListbox from './@Components/SearchRamen/Listbox';
import { RamenCateory } from '../@types/models/Ramen';
import { RamenCity } from '../@types/models/City';
import { FunnelIcon } from '@heroicons/react/24/solid';

function Home() {
    return (
        <>
            <div className="flex justify-center p-10 bg-[#FFAF19]">
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
                        <div className="mt-[200px] mb-[50px]">

                            <SearchRamen />
                            <div className="flex justify-center space-x-3 pt-3 lg:pt-5">
                                <RamenListbox ramen={RamenCateory} />
                                <RamenListbox ramen={RamenCity} />

                                <div className="hidden lg:inline-block w-[33%]">
                                    <button className="flex justify-center w-full p-2 bg-[#808080] text-white rounded-md place-items-center">
                                        <FunnelIcon className='flex text-white w-5 h-7 mr-2'
                                        /> この条件で探す</button>
                                </div>
                            </div>
                            <button className="mt-4 lg:hidden flex justify-center w-full p-2 
                            bg-[#808080] text-white rounded-md place-items-center">
                                <FunnelIcon className='flex text-white w-5 h-7 mr-2'
                                /> この条件で探す</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Home;
"use client"
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion"
import SearchRamen from './@Components/SearchRamen';

function Home() {
    return (
        <>
            <div className="flex justify-center  bg-[#FFAF19]">
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
                        <div className="mt-[30px] mb-[20px]">
                            {/* <RamenSlider /> */}
                            <SearchRamen />
                            {/* <div className="flex justify-center space-x-3 pt-3 lg:pt-5">
                                <RamenListbox ramen={RamenCateory} />
                                <RamenListbox ramen={RamenCity} />

                                <div className="hidden md:inline-block w-[33%]">
                                    <button className="flex justify-center w-full p-2 bg-[#808080] text-white rounded-md place-items-center">
                                        <FunnelIcon className='flex text-white w-5 h-7 mr-2'
                                        /> この条件で探す</button>
                                </div>
                            </div>
                            <button className="mt-4 md:hidden flex justify-center w-full p-2
                            bg-[#808080] text-white rounded-md place-items-center">
                                <FunnelIcon className='flex text-white w-5 h-7 mr-2'
                                /> この条件で探す</button>*/}

                        </div> 
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Home;
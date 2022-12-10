"use client"
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion"
import SearchRamen from './@Components/SearchRamen';

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
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Home;
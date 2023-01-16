"use client"
import React from "react";
import "/styles/globals.css";
import { motion } from "framer-motion"
import SearchRamen from './explore/SearchForm';
import Image from 'next/image';
import { ramens } from '../@types/models/Ramen';
import Link from 'next/link';
import { cn } from '../utils/cn';
import RamenCarousel from './@Components/Animations/RamenCarousel';

function Home() {
    return (
        <>
            <div className="flex-col">
                eaw
                <div className="flex justify-center bg-white">
                </div>
            </div>
        </>
    );
}

export default Home;
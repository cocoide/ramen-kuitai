"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../../../@types/models/Drawer';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    return (
        <header className="p-5 bg-[#FFAF19] flex justify-center place-items-center">
            <Link href="/" className="absolute justify-center font-bold text-3xl text-white"
            >RAMEN KUITAI</Link>
            {/* Click menu button here */}

            <button className="flex-1 rounded-full w-10">
                <Bars4Icon
                    className='10 w-10 text-white m-3'
                    onClick={() => OpenDrawer(true)}
                /></button>

            <div className="hidden md:inline-block">
                <div className="flex text-bold md:font-extrabold space-x-3">


                    <Link href={'/ramens'} className="flex p-2 bg-[#dc2626] text-white rounded-md"
                    ><MapPinIcon className='text-white w-5' /> 保存したお店</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
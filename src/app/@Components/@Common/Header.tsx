"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../../../@types/models/Drawer';
import Image from 'next/image';
import Avater from '../UserView/Avater';
import AvaterMenu from '../UserView/AvaterMenu';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    return (
        <header className="p-5 bg-[#FFAF19] flex justify-between place-items-center">

            {/* Humbergur Menu */}
            <button className="md:hidden inline-block rounded-full w-10">
                <Bars4Icon
                    className='10 w-10 text-white'
                    onClick={() => OpenDrawer(true)}
                /></button>

            {/* Home Icon */}
            <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-white"
            ><Image src="/ramen-white.svg" alt="ramen" width={30} height={30} className="mr-2"
                />RAMEN KUITAI
            </Link>


            <div className="flex justify-end space-x-3 place-items-center">

                <div className="hidden md:inline-block">
                    <div className="flex text-bold md:font-extrabold space-x-3">
                        <Link href={'/ramens'} className="flex p-2 bg-[#dc2626] text-white rounded-md"
                        ><MapPinIcon className='text-white w-5' /> 保存したお店</Link>
                    <Link href={'/ramens'} className="flex p-2 bg-[#dc2626] text-white rounded-md"
                    ><MapPinIcon className='text-white w-5' /> 保存したお店</Link>
                </div>
            </div>
                {/* UserIcon Menu */}
                {/* <Avater /> */}
                <AvaterMenu />

            </div>

        </header>
    );
}

export default Header;
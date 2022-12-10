"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../@types/models/Drawer';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    return (
        <header className="p-5 bg-[#FFAF19] flex justify-center">
            {/* Click menu button here */}
            <button className="rounded-full">
                <Bars4Icon
                    className='10 w-10 text-white m-3'
                    onClick={() => OpenDrawer(true)}
                />
            </button>

            <div className="flex text-bold md:font-extrabold space-x-3">
                <Link href="/" className="flex p-2 bg-white rounded-md text-[#E69500]">
                    <Image src={"/RamenIcon.svg"} alt="Ramen" width={20} height={20} className="text-[#E69500]" />
                    ラーメンおたく
                </Link>
                <Link href={'/bookmarks'} className="flex p-2 bg-[#dc2626] text-white rounded-md"
                ><MapPinIcon className='text-white w-5' /> 保存したお店</Link>
                <Link href={'/ramens'} className="flex p-2 bg-[#FFC14D] text-white rounded-md"
                ><MagnifyingGlassIcon className='text-white w-5' />
                    ラーメンを開拓</Link>
            </div>
        </header>
    );
}

export default Header;
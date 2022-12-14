"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MapPinIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../../../@types/models/Drawer';
import Image from 'next/image';
import AvaterMenu from '../UserView/AvaterMenu';
import { useSession } from 'next-auth/react';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    const { data: session } = useSession();
    return (
        <header className="z-50 p-3 md:p-5 bg-[#FFAF19] flex justify-between md:justify-start
        place-items-center">

            <Image src="/ramen-white.svg" alt="ramen" width={30} height={30} className="my-2 mx-4"
            /> <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-white m-2"
            >RAMEN KUITAI
            </Link>

            <div className="md:flex-1"></div>

            <div className="flex justify-end space-x-3 place-items-center">

                <div className="hidden md:inline-block">
                    <div className="flex text-bold md:font-extrabold space-x-3">
                        <Link href={'/ramens'} className="flex py-4 px-2 bg-white text-[#FFAF19] rounded-xl place-items-center h-15
                        hover:brightness-75"
                        ><MapPinIcon className='text-[#FFAF19] w-5 mr-2' /> 保存したお店</Link>
                        {(session) && <AvaterMenu />}
                    </div>
                </div>


                <button className="rounded-full w-8 inline-block md:hidden">
                    <Bars4Icon
                        className='h-10 w-10 text-white'
                        onClick={() => OpenDrawer(true)}
                    /></button>

            </div>

        </header>
    );
}

export default Header;
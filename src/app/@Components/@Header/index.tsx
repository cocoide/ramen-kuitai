"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MapPinIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../../../@types/models/Drawer';
import Image from 'next/image';
import AvaterMenu from '../UserView/AvaterMenu';
import { useSession } from 'next-auth/react';
import LoginModal from '../Modals/LoginModal';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    const { data: session } = useSession();
    return (
        <header className="z-50 p-3 md:p-5 bg-white flex justify-between md:justify-start
        place-items-center border-[#FFAF19]">

            <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-[#FFAF19] m-2"
            > RAMEN KUITAI<Image src="/ramen-orange.svg" alt="ramen" width={30} height={30} className="mx-4"
                />
            </Link>

            <div className="md:flex-1"></div>

            <div className="flex justify-end space-x-3 place-items-center">
                <div className="hidden md:inline-block">
                    <div className="flex text-bold md:font-extrabold space-x-3 place-items-center">
                        <Link href={"/review"} className="flex rounded-full bg-white text-[#FFAF19]  p-2 w-13 h-13 
                        hover:brightness-75  ring-1 ring-[#FFAF19]">
                            <PlusSmallIcon className="h-10 w-10" /></Link>

                        <Link href={'/ramens'} className="flex py-4 px-2 bg-white text-[#FFAF19] rounded-xl place-items-center h-15
                        hover:brightness-75 ring-1 ring-[#FFAF19]"
                        ><MapPinIcon className='text-[#FFAF19] w-5 mr-2' /> 保存したお店</Link>
                        {(!session) && <div className="place-items-center"><LoginModal /></div>}
                        {(session) && <AvaterMenu />}
                    </div>
                </div>


                <button className="rounded-full w-8 inline-block md:hidden">
                    <Bars4Icon
                        className='h-10 w-10 text-[#FFAF19]'
                        onClick={() => OpenDrawer(true)}
                    /></button>

            </div>

        </header>
    );
}

export default Header;
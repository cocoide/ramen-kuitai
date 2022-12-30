"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import { isDrawerOpen } from '../../../@types/models/Drawer';
import Image from 'next/image';
import AvaterMenu from '../UserView/AvaterMenu';
import { useSession } from 'next-auth/react';
import LoginModal from '../Modals/LoginModal';
import { isLoginModalOpen } from '../../../@types/models/Modal';

function Header() {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)
    const OpenLoginModal = useSetRecoilState(isLoginModalOpen)
    const { data: session, status } = useSession();
    const isLoadingUser = status === 'loading';
    const user = session?.user;

    return (
        <header className="z-50 p-2 bg-white flex justify-between
        place-items-center border-[#FFAF19]">


            <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-[#FFAF19] m-2"
            > <Image src="/ramen-kuitai.svg" alt="ramen-kuitai" width={100} height={50} className=""
                /></Link>
            {/* Logo */}

            <div className="flex place-items-center">


                {(isLoadingUser) ? <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />
                        : user ? <AvaterMenu />
                        : <button onClick={() => OpenLoginModal(true)} className='text-[#FFAF19] ring-none'
                        ><UserCircleIcon className="h-10" /></button>}
                {/* User menu */}

                        <Link href={"/review"}><PlusCircleIcon className='h-10 text-[#FFAF19] hover:scale-95 duration-300
                    mx-3' /></Link>
                        {/* Review button */}
                        
                <button className="w-8 mr-3">
                    <Bars4Icon
                        className='h-10 w-10 text-[#FFAF19]'
                        onClick={() => OpenDrawer(true)}
                    /></button>
                {/* Menu button */}


                    <LoginModal />
                {/* Modal */}



            </div>

        </header>
    );
}

export default Header;
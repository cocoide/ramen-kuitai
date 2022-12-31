"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MagnifyingGlassIcon, PlusCircleIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline'
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
        place-items-center">


            <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-[#e0d5c1] m-2"
            > <Image src="/ramen-kuitai-logo.svg" alt="ramen-kuitai" width={110} height={60} className=""
                /></Link>
            {/* Logo */}

            <div className="flex place-items-center">


                <Link href={"/search"}><MagnifyingGlassIcon className='h-10 text-[#e0d5c1]  hover:scale-95 duration-300' /></Link>
                {/* Search button */}

                <Link href={"/notice"}><BellIcon className='h-10 text-[#e0d5c1]  hover:scale-95 duration-300 ml-3' /></Link>
                {/* Notice button */}


                <div className="place-items-center space-x-3 hidden lg:inline-flex">


                    <Link href={"/review"}><PlusCircleIcon className='h-10 text-[#e0d5c1]  hover:scale-95 duration-300 ml-3' /></Link>
                    {/* Review button */}

                {(isLoadingUser) ? <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />
                        : user ? <AvaterMenu />
                        : <button onClick={() => OpenLoginModal(true)} className='text-[#FFAF19] ring-none'
                        ><UserCircleIcon className="h-10" /></button>}
                {/* User menu */}
                </div>


                        
                <button className="w-8 mx-3">
                    <Bars4Icon
                        className='h-10 w-10 text-[#e0d5c1]'
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
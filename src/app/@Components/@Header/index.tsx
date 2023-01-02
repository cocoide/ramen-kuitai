"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MagnifyingGlassIcon, PlusCircleIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
// import { isDrawerOpen } from '../../../@types/models/Drawer';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { isLoginModalOpen } from '../../../@types/models/Modal';
import AvaterMenu from '../UserView/AvaterMenu';
import LoginModal from '../Modals/LoginModal';

function Header() {
    // const OpenDrawer = useSetRecoilState(isDrawerOpen)
    const OpenLoginModal = useSetRecoilState(isLoginModalOpen)
    const { data: session, status } = useSession();
    const isLoadingUser = status === 'loading';
    const user = session?.user;

    return (
        <header className="z-50 p-2 bg-white flex justify-between
        place-items-center">


            <Link href="/ramens" className="flex justify-center
            items-center font-bold text-3xl text-[#D8CEBA] m-2"
            > <Image src="/header-logo.svg" alt="ramen-kuitai" width={110} height={60} className=""
                /></Link>
            {/* Logo */}

            <div className="flex place-items-center">


                <Link href={"/explore"}><MagnifyingGlassIcon className='h-10 text-[#e0d5c1]  hover:scale-95 duration-300 mr-2' /></Link>
                {/* Search button */}

                {user && <Link href={"/notifications"}><BellIcon className='h-10 text-[#D8CEBA]  hover:scale-95 duration-300 mr-2' /></Link>
                }{/* Notice button */}



                {(isLoadingUser) ? <div className="w-10 h-10 bg-[#D8CEBA] animate-pulse rounded-full" />
                        : user ? <AvaterMenu />
                        : <button onClick={() => OpenLoginModal(true)} className='text-[#D8CEBA] ring-none'
                        ><UserCircleIcon className="h-10" /></button>}
                {/* User menu */}

                        
                {/* <button className="w-8 mx-2">
                    <Bars4Icon
                        className='h-10 w-10 text-[#D8CEBA]'
                        onClick={() => OpenDrawer(true)}
                    /></button> */}
                {/* Menu button */}


                <LoginModal />
                {/* Modal */}



            </div>

        </header>
    );
}

export default Header;
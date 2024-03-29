"use client"
import Link from "next/link";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline'
import { useSetRecoilState } from 'recoil';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { isLoginModalOpen } from '../../../@types/models/Modal';
import AvaterMenu from '../UserView/AvaterMenu';

function Header() {
    const OpenLoginModal = useSetRecoilState(isLoginModalOpen)
    const { data: session, status } = useSession();
    const isLoadingUser = status === 'loading';
    const user = session?.user;
    return (

        <header className="z-50 p-2 bg-white md:flex justify-between items-center  sticky inset-x-0 top-0
         hidden border-b border-gray-200"> 

            <Link href="/ramens" className="place-center"
            ><Image src="/header-logo.svg" alt="ramen-kuitai" width={110} height={60} className="h-10" /></Link>
            {/* Logo */}

            <div className="place-center">
                <Link href={"/explore"}
                ><MagnifyingGlassIcon className='h-10 w-10 text-secondary  hover:scale-95 duration-300 mr-2' /></Link>
                {/* Search button */}

                {(user != null) && <Link href={"/notifications"}
                ><BellIcon className='h-10 w-10 text-secondary  hover:scale-95 duration-300 mr-2' /></Link>
                }{/* Notice button */}

                {(isLoadingUser) ? <div className="w-10 h-10 bg-secondary animate-pulse rounded-full" />
                    : (user != null) ? <AvaterMenu userId={`${user.id}`} />
                        : <button onClick={() => OpenLoginModal(true)} className='text-secondary ring-none'
                        ><UserCircleIcon className="h-10" /></button>}
            </div>
        </header>
    );
}
export default Header;

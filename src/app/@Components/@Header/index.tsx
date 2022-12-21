"use client"
import Link from "next/link";
import React from "react";
import "/styles/globals.css";
import { Bars4Icon, MapPinIcon, PlusSmallIcon, UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline'
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
    const { data: session } = useSession();
    return (
        <header className="z-50 p-3 md:p-5 bg-white flex justify-between md:justify-start
        place-items-center border-[#FFAF19]">

            <button className="rounded-full w-8 inline-block md:hidden mx-5">
                <Bars4Icon
                    className='h-10 w-10 text-[#FFAF19]'
                    onClick={() => OpenDrawer(true)}
                /></button>
            <Link href="/" className="flex justify-center
            items-center font-bold text-3xl text-[#FFAF19] m-2"
            > <Image src="/logos/ramen-kuitai.svg" alt="ramen-kuitai" width={150} height={70} className=""
                />
            </Link>

            <div className="md:flex-1"></div>

            <div className="flex justify-end space-x-3 place-items-center">
                    <div className="flex text-bold md:font-extrabold space-x-3 place-items-center">
                    {/* <div className="hidden md:inline-flex">
                        <Link href={"/review"} className="flex rounded-full bg-white text-[#FFAF19]  p-2 w-13 h-13
                        hover:brightness-75  ring-1 ring-[#FFAF19]">
                            <PlusSmallIcon className="h-10 w-10" /></Link>

                        <Link href={'/ramens'} className="flex py-4 px-2 bg-white text-[#FFAF19] rounded-xl place-items-center h-15
                        hover:brightness-75 ring-1 ring-[#FFAF19]"
                        ><MapPinIcon className='text-[#FFAF19] w-5 mr-2' /> 保存したお店</Link>
                        {(!session) && <div className="place-items-center"><LoginModal /></div>}
                    </div> */}
                    {(session) ? <AvaterMenu /> :
                        <button onClick={() => OpenLoginModal(true)} className='text-[#FFAF19] rounded-full'
                        ><UserCircleIcon className="h-10" /></button>}
                    <LoginModal />
                </div>



            </div>

        </header>
    );
}

export default Header;
"use client"
import { Dialog } from '@headlessui/react';
import { MapPinIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { CursorArrowRaysIcon, MapIcon, TagIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from "recoil"
import { isDrawerOpen } from '../../../../@types/models/Drawer';
import DrawerAnimation from './Animation';

export const Drawer = () => {

    const router = useRouter();
    const [open, setOpen] = useRecoilState(isDrawerOpen);
    return (
        <div className='z-50'>
            <DrawerAnimation open={open} setOpen={setOpen}>

                <div className="h-full overflow-y-scroll bg-white text-[#D8CEBA]">
                    <div className="flex flex-col absolute inset-0 space-y-5 p-4">
                        <button className="p-1 text-left"
                            onClick={() => {
                                router.push("/review")
                                setOpen(false)
                            }}>らあ活を投稿</button>

                        <button className="text-left">らあ活を発見</button>

                        <h2>▶︎お店を探す</h2>
                        <button className="text-left">エリアから</button>
                        <button className="text-left">味の種類から</button>
                        <button className=""></button>
                    </div>
                </div>
            </DrawerAnimation>
        </div>
    )
}

export default Drawer
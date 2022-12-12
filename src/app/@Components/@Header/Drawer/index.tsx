"use client"
import { Dialog } from '@headlessui/react';
import { MapPinIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { CursorArrowRaysIcon, MapIcon, TagIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from "recoil"
import { RamenCity } from '../../../../@types/models/City';
import { isDrawerOpen } from '../../../../@types/models/Drawer';
import { RamenCateory } from '../../../../@types/models/Ramen';
import Contents from './Disclosure/Contents';
import DrawerDisclosure from './Disclosure/DrawerDisclosure';
import DrawerAnimation from './Animation';
import { motion } from "framer-motion"
import SimpleAvater from '../../UserView/SimpleAvater';
import { isLoginModalOpen } from '../../../../@types/models/Modal';

export const Drawer = () => {

    const router = useRouter();
    const [open, setOpen] = useRecoilState(isDrawerOpen);

    return (
        <div className='z-50'>
            <DrawerAnimation open={open} setOpen={setOpen}>

                <div className="flex h-full flex-col overflow-y-scroll bg-orange-50 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                        <Dialog.Title className="flex justify-between place-items-center text-[#FFAF19]">
                            <Image src="/ramen-orange.svg" alt="ramen" width={33} height={33} className="mb-2" />

                            <h2 className='z-20 w-auto font-bold text-2xl sm:text-3xl'
                            >RAMEN KUITAI
                            </h2>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="z-30 h-10 w-10 rounded-full"
                            ><XCircleIcon />
                            </button>

                        </Dialog.Title>
                    </div>

                    {/* Contents start here */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className="flex justify-center p-5">

                            {/* User Dynamic View */}
                            <SimpleAvater w={50} h={50} image={"/avaters/user2.jpeg"}
                                onClick={() => { router.push("/user/profile"); setOpen(false) }} />

                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div className="absolute inset-0 px-4 sm:px-6 space-y-5">



                                <button onClick={() => {
                                    setOpen(false)
                                    router.push("/")
                                }}
                                    className="bg-[#FFAF19] h-10 w-full rounded-md text-white flex justify-center items-center"
                                ><CursorArrowRaysIcon className='text-white w-5 mr-3' />ラーメンを開拓する</button>

                                {/* Set type to children later */}
                                <DrawerDisclosure panelChildren={<Contents contents={RamenCity} />}>
                                    <button
                                        className="z-50 bg-[#FFAF19] h-10 w-full rounded-md text-white flex justify-center items-center"
                                    ><MapIcon className='text-white w-5 mr-3' />エリア</button>
                                </DrawerDisclosure>

                                <DrawerDisclosure panelChildren={<Contents contents={RamenCateory} />}>
                                    <button
                                        className="z-50 bg-[#FFAF19] h-10 w-full rounded-md text-white flex justify-center items-center"
                                    ><TagIcon className='text-white w-5 mr-3' />ラーメンの種類</button>
                                </DrawerDisclosure>

                                <Link href={'/ramens'}
                                    className="flex justify-center place-items-center
                                    p-2 bg-[#dc2626] text-white rounded-md"
                                    onClick={() => setOpen(false)}
                                ><MapPinIcon className='text-white w-5 mr-3'
                                    /> 保存したお店</Link>

                                <button
                                    type="button"
                                    onClick={() => useSetRecoilState(isLoginModalOpen)}
                                    className=" md:py-4 md:px-5 px-3 py-3 rounded-xl bg-[#db6459] hover:bg-[#ac544c]  
        text-white disabled:cursor-default disabled:opacity-50"
                                >
                                    <div className="flex flex-row items-center gap-1">

                                        <UserPlusIcon
                                            height={20}
                                            width={20}
                                        />
                                        <h3>ログイン</h3>

                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </DrawerAnimation>
        </div>
    )
}

export default Drawer
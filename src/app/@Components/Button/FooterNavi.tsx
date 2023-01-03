"use client"
import Link from 'next/link'
import { BellIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const FooterNavi = () => {
    const router = useRouter();
    const session = useSession();
    return (
        <div className="bg-white h-15 fixed left-1/2 -translate-x-1/2 bottom-3
        flex justify-center place-items-center p-1 w-auto
         md:hidden  rounded-3xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]
        ">
            <button onClick={() => router.push("/ramens")} ><HomeIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 mr-2" /></button>
            <button onClick={() => router.push("/explore")}  ><MagnifyingGlassIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2" /></button>
            <button onClick={() => router.push("/notifications")} ><BellIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2' /></button>
            {(session?.status === "authenticated") ?
                <button className="w-10 h-10  justify-center rounded-full 
                bg-[#e0d5c1]  focus:outline-none p-1 ml-2"
                    onClick={() => {
                        router.push("/user/profile")
                    }}
                > <Image src={session.data.user.image} alt={session.data.user.name} height={30} width={30} className="rounded-full w-8 h-8" />
                </button>
                :
                (session?.status === "loading") ?
                    <button>
                        <div className="w-10 h-10 bg-[#D8CEBA] animate-pulse rounded-full ml-2" />
                    </button>

                    : <button onClick={() => {
                        router.push("/user/profile")
                    }}>
                        <UserIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 ml-2' /></button>
            }
        </div>
    )
}
export default FooterNavi
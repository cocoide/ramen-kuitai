"use client"
import { BellIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const FooterNavi = () => {
    const router = useRouter();
    const session = useSession();
    return (
        <div className="place-center shadow-natural bg-white h-15 ring-1 ring-secondary
        fixed left-1/2 -translate-x-1/2 bottom-3
         p-3 w-auto md:hidden  rounded-3xl  
        ">
            <button onClick={() => router.push("/ramens")}
            ><HomeIcon className="h-7 text-secondary hover:scale-95 duration-300 mr-2" /></button>

            <button onClick={() => router.push("/explore")}
            ><MagnifyingGlassIcon className="h-7 text-secondary hover:scale-95 duration-300 mx-2" /></button>

            <button onClick={() => router.push("/notifications")}
            ><BellIcon className='h-7 text-secondary hover:scale-95 duration-300 mx-2' /></button>
            {(session?.status === "authenticated") ?

                <button className="w-7 h-7  justify-center rounded-full 
                bg-secondary  focus:outline-none  ml-2"
                    onClick={() => { router.push("/user/profile") }}
                > <Image src={session.data.user.image} alt={session.data.user.name} height={30} width={30} className="rounded-full w-7 h-7" />
                </button>
                :
                (session?.status === "loading") ?
                    <button>
                        <div className="w-7 h-7 bg-secondary animate-pulse rounded-full ml-2" />
                    </button>

                    : <button onClick={() => {
                        router.push("/user/profile")
                    }}>
                        <UserIcon className='h-7 text-secondary hover:scale-95 duration-300 ml-2' /></button>
            }
        </div>
    )
}
export default FooterNavi
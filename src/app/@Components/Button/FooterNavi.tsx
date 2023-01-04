"use client"
import { BellIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const FooterNavi = () => {
    const session = useSession();

    return (
        <div className="place-center shadow-natural bg-white h-15 ring-1 ring-secondary
        fixed left-1/2 -translate-x-1/2 bottom-3
         p-3 w-auto md:hidden  rounded-3xl  
        ">
            <Link href={"/ramens"}
            ><HomeIcon className="h-8 text-secondary hover:scale-95 duration-300 mr-2" /></Link>

            <Link href={"/explore"}
            ><MagnifyingGlassIcon className="h-8 text-secondary hover:scale-95 duration-300 mx-2" /></Link>

            <Link href={"/notifications"}
            ><BellIcon className='h-8 text-secondary hover:scale-95 duration-300 mx-2' /></Link>
            {
                (session?.status === "loading") ?

                    <div className="w-8 h-8 bg-secondary animate-pulse rounded-full ml-2" />
                    :
                    (session?.status === "authenticated") ?
                        <Link href={`/${session.data.user.id}`} className="w-8 h-8  justify-center rounded-full 
                bg-secondary  focus:outline-none  ml-2"
                > <Image src={session.data.user.image} alt={session.data.user.name} height={30} width={30} className="rounded-full w-8 h-8" />
                        </Link>

                        : <Link href={`/login`}>
                        <UserIcon className='h-8 text-secondary hover:scale-95 duration-300 ml-2' /></Link>
            }
        </div>
    )
}
export default FooterNavi
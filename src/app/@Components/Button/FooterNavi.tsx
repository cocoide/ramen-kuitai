import Link from 'next/link'
import { BellIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-white h-15 fixed  inset-x-0  bottom-3  left-1/2 -translate-x-1/2 
        flex justify-center place-items-center px-2 w-auto
        shadow-sm md:hidden  rounded-3xl
        border border-[#e0d5c1]">
            <Link href={"/ramens"}><HomeIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 ml-2" /></Link>
            <Link href={"/explore"}><MagnifyingGlassIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 m-1" /></Link>
            <Link href={"/notifications"}><BellIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 m-1' /></Link>
            <Link href={"/user/profile"}><UserIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 mr-2' /></Link>
        </div>
    )
}
export default FooterNavi
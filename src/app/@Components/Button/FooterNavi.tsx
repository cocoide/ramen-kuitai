import Link from 'next/link'
import { BellIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-white h-15 fixed left-1/2 -translate-x-1/2 bottom-3
        flex justify-center place-items-center py-1 px-1 w-auto
        shadow-sm md:hidden  rounded-3xl
        border border-[#e0d5c1]">
            <Link href={"/ramens"}><HomeIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2" /></Link>
            <Link href={"/explore"}><MagnifyingGlassIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2" /></Link>
            <Link href={"/notifications"}><BellIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2' /></Link>
            <Link href={"/user/profile"}><UserIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300 mx-2' /></Link>
        </div>
    )
}
export default FooterNavi
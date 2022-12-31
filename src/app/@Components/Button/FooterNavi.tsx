import Link from 'next/link'
import { BellIcon, HomeIcon, MagnifyingGlassIcon, MapIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-white h-15 fixed inset-x-0 bottom-0 w-full flex justify-center place-items-center p-1
        space-x-7 shadow-md md:hidden
        border-t-2 border-gray-100">
            <Link href={"/"}><HomeIcon className="h-10 text-[#e0d5c1] hover:scale-95 duration-300" /></Link>
            {/* <Link href={"/search"}><MagnifyingGlassIcon className='h-10 text-gray-300 hover:scale-95 duration-300' /></Link> */}
            <Link href={"/review"}><PlusCircleIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300' /></Link>
            {/* <Link href={"/notice"}><BellIcon className='h-10 text-gray-300 hover:scale-95 duration-300' /></Link> */}
            <Link href={"/user/profile"}><UserIcon className='h-10 text-[#e0d5c1] hover:scale-95 duration-300' /></Link>
        </div>
    )
}
export default FooterNavi
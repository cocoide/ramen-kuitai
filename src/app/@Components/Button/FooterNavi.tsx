import Link from 'next/link'
import { BellIcon, HomeIcon, MapIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-white h-15 fixed inset-x-0 bottom-0 w-full flex justify-center place-items-center p-2
        space-x-7 shadow-md">
            <Link href={"/"}><HomeIcon className="h-10 text-gray-400" /></Link>
            <Link href={"/user/profile"}><UserIcon className='h-10 text-gray-400' /></Link>
            <Link href={"/review"}><PlusCircleIcon className='h-10 text-gray-400' /></Link>
            <Link href={"/notice"}><BellIcon className='h-10 text-gray-400' /></Link>
            <Link href={"/ramens"}><MapIcon className='h-10 text-gray-400' /></Link>
        </div>
    )
}
export default FooterNavi
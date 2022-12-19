import Link from 'next/link'
import { BellIcon, HomeIcon, MapIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-[#FFAF19] h-15 fixed inset-x-0 bottom-0 w-full flex justify-center place-items-center p-2
        space-x-7 border-t-2 border-white shadow-md">
            <Link href={"/"}><HomeIcon className="h-10 text-white" /></Link>
            <Link href={"/user/profile"}><UserIcon className='h-10 text-white' /></Link>
            <Link href={"/review"}><PlusCircleIcon className='h-10 text-white' /></Link>
            <Link href={"/notice"}><BellIcon className='h-10 text-white' /></Link>
            <Link href={"/ramens"}><MapIcon className='h-10 text-white' /></Link>
        </div>
    )
}
export default FooterNavi
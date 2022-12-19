import Link from 'next/link'
import { HomeIcon, MapIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <div className="bg-white h-15 fixed inset-x-0 bottom-0 w-full flex justify-center p-2 place-items-center
        space-x-10 border-t-2 border-gray-200">
            <Link href={"/"}><HomeIcon className="h-10" /></Link>
            <Link href={"/user/profile"}><UserIcon className='h-10' /></Link>
            <Link href={"/ramens"}><MapIcon className='h-10' /></Link>
            <Link href={"/review"}><PlusCircleIcon className='h-10' /></Link>
        </div>
    )
}
export default FooterNavi
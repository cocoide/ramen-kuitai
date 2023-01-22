"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from '../../utils/cn';

const TopTab = () => {
    const pathName = usePathname()
    return (

        <div className="flex justify-center items-center
        rounded-md ring-1 ring-[#cfc8bb] divide-x  divide-[#cfc8bb] shadow-sm
        ">
            <Link href={`/ramens`} className={cn("py-2 px-4 place-items-center rounded-l-md",
                pathName === "/ramens" ? "bg-gray-50 text-gray-600" : "text-gray-400"
            )}><h2>Trends</h2></Link>

            <Link href={`/`} className={cn("py-2 px-4 place-items-center",
                pathName === "/" ? "bg-gray-50 text-gray-600" : "text-gray-400"
            )}><h2>Review</h2></Link>
            <Link href={`/review`} className={cn("py-2 px-4 place-items-center rounded-r-md ",
                pathName === "/review" ? "bg-gray-50 text-gray-600" : "text-gray-400"
            )}><h2>People</h2></Link>
        </div>
    )
}
export default TopTab
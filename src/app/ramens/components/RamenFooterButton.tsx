"use clinet"

import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const RamenFooterButton = () => {
    return (
        <div className="inline-flex justify-center md:hidden w-full">

            <button className="flex justify-center place-items-center
            outline outline-[#c3b9a8] rounded-xl w-[50%] ml-3 my-3 p-2 bg-white text-[#c3b9a8] font-bold"
            >
                <Image src="/ramen-footer/ramen.svg" alt="" width={30} height={30} className="h-auto aspect-square mr-2"
                />
                {/* <HandThumbUpIcon className="mr-2 w-8 h-8 text-[#c3b9a8]" /> */}
                クイタイ</button>

            <button className="flex justify-center place-items-center
            rounded-xl bg-[#c3b9a8]  text-white w-[50%] m-3 p-2 font-bold"
            ><Image src="/ramen-footer/pen.svg" alt="" width={30} height={30} className="h-auto aspect-square mr-2"
                />らあ活を投稿</button>
        </div>
    )
}
export default RamenFooterButton
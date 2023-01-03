"use client"
import { HandThumbUpIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'


const RamenFooterButton = () => {
    const [isGood, setGood] = useState(false)
    return (
        <div className="flex justify-between md:hidden w-full">

            <button className="flex justify-center place-items-center rounded-full
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]

            ring-1 ring-[#e0d5c1] m-3 p-2 bg-white text-[#e0d5c1]"
                onClick={() => setGood(!isGood)}
            >{(isGood) ?
                <Image src={"/solid-icons/handthumbup-icon.svg"} width={30} height={30} alt=""
                    className='w-8 h-8' />
                : <HandThumbUpIcon className="w-8 h-8 text-[#e0d5c1]" />
                }</button>

            <button className="flex justify-center place-items-center rounded-full
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]

            ring-1 ring-white  m-3 p-2 text-white bg-[#c3b9a8]"
            ><PlusSmallIcon className="w-8 h-8 text-white" />
            </button>
        </div>
    )
}
export default RamenFooterButton
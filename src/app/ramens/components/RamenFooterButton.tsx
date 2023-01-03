"use client"
import { HandThumbUpIcon, HeartIcon, PencilIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'


const RamenFooterButton = () => {
    const [isGood, setGood] = useState(false)
    return (
        <div className="flex justify-between md:hidden w-full">
            <button className="place-center rounded-full
            ring-1 ring-secondary m-3 p-2 text-white bg-white shadow-natural"
            ><PencilIcon className="w-8 h-8 text-secondary" />
            </button>

            <button className="place-center rounded-full shadow-natural
            ring-1 ring-[#e0d5c1] m-3 p-2 bg-white text-[#e0d5c1]"
                onClick={() => setGood(!isGood)}
            >{(isGood) ?
                    <Image src={"/solid-icons/heart-icon.svg"} width={30} height={30} alt=""
                    className='w-8 h-8' />
                    : <HeartIcon className="w-8 h-8 text-[#e0d5c1]" />
                }</button>

        </div>
    )
}
export default RamenFooterButton
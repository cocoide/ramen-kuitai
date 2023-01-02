"use clinet"

import { HandThumbUpIcon, PencilIcon } from '@heroicons/react/24/outline'

const RamenFooterButton = () => {
    return (
        <div className="flex justify-between md:hidden w-full">

            <button className="flex justify-center place-items-center rounded-full
            ring-1 ring-[#e0d5c1] m-3 p-2 bg-white text-[#e0d5c1]  shadow-sm"
            ><HandThumbUpIcon className="w-8 h-8 text-[#e0d5c1]" />
            </button>

            <button className="flex justify-center place-items-center rounded-full
            ring-1 ring-[#e0d5c1]  m-3 p-2 text-white bg-[#e0d5c1] shadow-sm"
            ><PencilIcon className="w-8 h-8 text-white" />
            </button>
        </div>
    )
}
export default RamenFooterButton
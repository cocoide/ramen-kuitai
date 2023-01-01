"use clinet"

import { HandThumbUpIcon, PencilSquareIcon, ShareIcon } from '@heroicons/react/24/outline'

const RamenFooterButton = () => {
    return (
        <div className="inline-flex justify-center md:hidden w-full">

            <button className="flex justify-center place-items-center rounded-xl
            ring-2 ring-[#c3b9a8] w-[50%] m-3 p-2 bg-white text-[#c3b9a8] font-bold"
            ><HandThumbUpIcon className="mr-2 w-7 h-7 text-[#c3b9a8]" />
                保存</button>

            <button className="flex justify-center place-items-center rounded-xl
            ring-2 ring-[#c3b9a8] w-[50%] my-3 p-2 bg-white text-[#c3b9a8] font-bold"
            ><PencilSquareIcon className="mr-2 w-7 h-7 text-[#c3b9a8]" />
                投稿</button>

            <button className="flex justify-center place-items-center rounded-xl
            ring-2 ring-[#c3b9a8] w-[50%] m-3 p-2 bg-white text-[#c3b9a8] font-bold"
            ><ShareIcon className="mr-2 w-7 h-7 text-[#c3b9a8]" />
                共有</button>
        </div>
    )
}
export default RamenFooterButton
"use client"

import { useRecoilState } from 'recoil';
import { isSuggestFollowModalOpen } from '../../../../@types/models/Modal';


const ModalOpenState = ({ children }: { children?: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useRecoilState(isSuggestFollowModalOpen)

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    return (
        <div className="">

            <div
                className="fixed inset-0 mx-[15%] my-[10%] place-center bg-white pointer-events-auto rounded-xl  z-30 disabled:block flex flex-col">
                <div>{children}</div>
                <button onClick={handleClick}>close</button>
            </div>

            <button onClick={handleClick}
                className="fixed inset-0 w-full h-full px-10  backdrop-blur-sm pointer-events-auto bg-gray-200/50   place-center z-10">
            </button>
        </div>
    )
}
export default ModalOpenState
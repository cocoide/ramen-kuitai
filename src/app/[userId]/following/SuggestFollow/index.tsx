"use client"

import { useRecoilState } from 'recoil';
import { isSuggestFollowModalOpen } from '../../../../@types/models/Modal';
import ModalOpenState from './ModalOpenState';

const ToggleButton = ({ children }: { children?: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useRecoilState(isSuggestFollowModalOpen)

    return (
        <div>

            {isOpen ?
                <ModalOpenState>
                    {children}
                </ModalOpenState>
                :
                <button className=""
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className="bg-primary rounded-full text-white p-1">おすすめのユーザーを表示</div>
                </button>
            }
        </div>
    )
}
export default ToggleButton
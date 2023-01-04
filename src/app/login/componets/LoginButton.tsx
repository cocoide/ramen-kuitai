"use client"
import { useRecoilState } from 'recoil'
import { isLoginModalOpen } from '../../../@types/models/Modal';

const LoginButton = () => {
    const [isOpen, setIsOpen] = useRecoilState(isLoginModalOpen)
    return (
        <div>
            <button className="bg-primary p-3 m-3 rounded-md text-white"
                onClick={() => setIsOpen(true)}>ログイン</button>
        </div>
    )
}
export default LoginButton
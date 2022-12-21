import { Dialog, Transition } from '@headlessui/react'
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';
import { ButtonHTMLAttributes, Fragment, ReactNode, useState } from "react"
import { useRecoilState } from 'recoil';
import { isLoginModalOpen } from '../../../../@types/models/Modal';
import { useAuth } from '../../../../utils/hooks/useAuth';

// type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
//     children: ReactNode;
// };
const { signInWithGoogle } = useAuth();

const LoginModal = () => {

    const [isOpen, setIsOpen] = useRecoilState(isLoginModalOpen)
    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl 
                                bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-gray-500  text-center"
                                    >🍜『RAMEN KUITAI』にログイン
                                    </Dialog.Title>

                                    <div className="flex flex-col mt-7 text-center space-y-4">

                                        <button
                                            type="button"
                                            className="justify-center rounded-md px-4 py-3
                                            font-bold text-md  text-[#ce6056] hover:opacity-80 bg-white ring-1 ring-[#ce6056] hover:bg-[#ce6056] hover:text-white"
                                            // onClick={signInWithGoogle}
                                            onClick={signInWithGoogle}
                                        >ログイン with Google
                                        </button>
                                        <button
                                            type="button"
                                            className="justify-center rounded-md px-4 py-3
                                            font-bold text-md text-[#56c7f0] hover:opacity-70 bg-white ring-1 ring-[#56c7f0] hover:bg-[#56c7f0] hover:text-white"
                                        >
                                            ログイン with Twitter
                                        </button>
                                        <button
                                            type="button"
                                            className="justify-center rounded-md px-4 py-3
                                            font-bold text-md  text-[#4CC764] hover:opacity-70 bg-white ring-[#4CC764] ring-1 hover:bg-[#4CC764] hover:text-white"
                                        //   onClick={login}
                                        >
                                            ログイン with ライン
                                        </button>
                                        <button
                                            type="button"
                                            className="justify-center rounded-md px-4 py-3
                                            font-bold text-md  text-[#848884] hover:opacity-70 bg-white ring-[#848884] ring-1 hover:bg-[#848884] hover:text-white"
                                        //   onClick={login}
                                        >
                                            ログイン with Email
                                        </button>
                                        {/* <LoginButton /> */}

                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 text-center">
                                            さあ、あなたのお気に入りのラーメンを開拓しよう！
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default LoginModal



// type Provider = { name: string, image: string, theme: string }
// export const providers: Provider[] = [
//     {
//         name: "Google",
//         image: "",
//         theme: "red-300",
//     }, {
//         name: "Twitter",
//         image: "",
//         theme: "blue-300",
//     }, {
//         name: "ライン",
//         image: "",
//         theme: "green-300",
//     }, {
//         name: "Email",
//         image: "",
//         theme: "gray-300",
//     }
// ];


// const LoginButton = () => {
//     return (
//         <>
//             {providers.map(provider => {
//                 return (

//                     <button key={provider.name}
//                         type="button"
//                         className={cn(`ring-${provider.theme} ring-1 text-${provider.theme} bg-white hover:bg-${provider.theme} hover:opacity-70 justify-center rounded-md px-4 py-3 border border-transparent ring-none`)}
//                     ><h4 className="font-bold text-md"
//                     >ログイン with {provider.name}</h4>
//                     </button>
//                 );
//             })
//             }
//         </>);
// }
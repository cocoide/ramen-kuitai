"use client"
import { Dialog, Transition } from '@headlessui/react'
import { PlusSmallIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import CreateReview from './CreateReview'
import { useRecoilState } from 'recoil';
import { isReviewModalOpen } from '../../../@types/models/Modal'

export default function CreateReviewModal() {
    const [isOpen, setIsOpen] = useRecoilState(isReviewModalOpen)
    return (
        <>
            <div className="fixed bottom-0 right-0 place-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-primary hover:brightness-90 ring-1 ring-white shadow-natural
                    p-2 m-3"
                >
                    <PlusSmallIcon className=" text-white h-8 w-8" />
                </button>
                {/* 表示される部分 */}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0  backdrop-blur-sm bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="place-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left 
                                align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-primary place-cener"
                                    >
                                        投稿を作成
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">

                                            <CreateReview />
                                            {/* Input form  */}

                                        </p>
                                    </div>

                                    <div className="">
                                        <button
                                            type="button"
                                            className="inline-flex "
                                            onClick={() => setIsOpen(false)}
                                        ><XCircleIcon className="text-primary  h-10 w-10"></XCircleIcon>
                                        </button>
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

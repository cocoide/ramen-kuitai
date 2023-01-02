"use client"
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'
import { Fragment, useState } from 'react'
import CreateReview from './CreateReview'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isReviewModalOpen } from '../../../@types/models/Modal'

export default function CreateReviewModal() {
    const [isOpen, setIsOpen] = useRecoilState(isReviewModalOpen)
    const closeModal = useSetRecoilState(isReviewModalOpen)
    return (
        <>
            <div className="fixed bottom-3 right-3 flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-[#c3b9a8] hover:brightness-95"
                >
                    <PencilIcon className=" text-white p-3 h-12 w-12" />
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
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle 
                                shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        投稿を作成
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">



                                            <CreateReview />


                                        </p>
                                    </div>

                                    <div className="">
                                        <button
                                            type="button"
                                            className="inline-flex "
                                            onClick={() => setIsOpen(false)}
                                        ><XCircleIcon className="text-[#c3b9a8]  h-10 w-10"></XCircleIcon>
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

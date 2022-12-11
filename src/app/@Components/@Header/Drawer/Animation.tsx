"use client"
import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Props {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function DrawerAnimation({ open, setOpen, children }: React.PropsWithChildren<Props>) {
    return (
        <>
            <Transition.Root show={open} as={Fragment}>

                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-250"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    ><div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-500 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-500 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    {/* Change width of drawer here */}
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[75%] md:max-w-[60%] lg:max-w-[50%]">

                                        {children}

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
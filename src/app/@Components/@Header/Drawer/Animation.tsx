"use client"
import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Props {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function DrawerAnimation({ open, setOpen, children }: React.PropsWithChildren<Props>) {
    return (
            <Transition.Root show={open} as={Fragment}>

                <Dialog as="div" className="relative z-50" onClose={setOpen}>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-x-0 bottom-0 flex max-w-full">
                                {/* Transition description */}
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-500 transform"
                                    enterFrom="translate-y-full"
                                enterTo="translate-y-12"
                                    leave="transition ease-in-out duration-500 transform"
                                leaveFrom="translate-y-12"
                                    leaveTo="translate-y-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative h-screen w-screen">

                                        {children}

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
        </Transition.Root>
    )
}
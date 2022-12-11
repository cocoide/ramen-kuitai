"use client"
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const DrawerDisclosure = ({ children, panelChildren }) => {
    return (
        <Disclosure as="div">
            {({ open }) => (
                <>
                    <Disclosure.Button as={Fragment}>
                        <button className="w-full">{children}</button>
                    </Disclosure.Button>

                    <Transition
                        show={open}
                        enter="transition ease-out duration-300"
                        enterFrom="transform scale-80 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition ease-out duration-200"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-80 opacity-0"
                    >
                        <Disclosure.Panel as="div">
                            {panelChildren}
                        </Disclosure.Panel>
                    </Transition>


                </>
            )}
        </Disclosure>
    )
}
{/* <ChevronRightIcon className={open ? 'rotate-90 transform' : ''} /> */ }
export default DrawerDisclosure
import { Menu, Transition } from '@headlessui/react'
import { Cog8ToothIcon, HandThumbUpIcon, MapPinIcon, PencilSquareIcon, UserCircleIcon, UserIcon, UserMinusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react'
import { cn } from '../../../utils/cn';


const MenuLink = ({
    href,
    children,
    ...rest
}: {
    href: string;
    children: ReactNode;
}) => {
    return (
        <Link href={href}>
            <div className="block" {...rest}>
                {children}
            </div>
        </Link>
    );
};

const Links = [
    {
        label: 'MYプロフィール',
        icon: <UserIcon />,
        path: '/user/profile',
    },
    {
        label: '保存したお店',
        icon: <MapPinIcon />,
        path: '/ramens',
    },
    {
        label: 'いいねした投稿',
        icon: <HandThumbUpIcon />,
        path: '/ramens',
    },
    {
        label: '設定',
        icon: <Cog8ToothIcon />,
        path: '/user/setting',
    },
];

const ListItem = ({
    active,
    icon,
    label,
}: {
    active: boolean;
    icon: ReactNode;
    label: string;
}) => {
    return (

        <span
            className={cn(
                'flex items-center space-x-2 p-2 rounded text-xl text-left',
                active && 'text-white bg-[#FFAF19]'
            )}
        >
            <span
                className={cn(
                    'w-5 h-5',
                    active ? 'text-white' : 'text-[#FFAF19]'
                )}
            >
                {icon}
            </span>
            <span className="flex-1">{label}</span>
        </span>
    );
};

const AvaterMenu = () => {
    return (
        <div>
            <Menu as="div" className="relative z-30">
                <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white 
                hover:opacity-70 px-7 py-7 focus:outline-none focus-visible:ring-2">

                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-[#FFAF19]
        rounded-md drop-shadow-xl focus:outline-none ring-none text-[#FFAF19]">
                        <div className="p-1 border-b">
                            {Links.map((link) => (
                                <Menu.Item key={link.path}>
                                    {({ active }) => (
                                        <MenuLink href={link.path}>
                                            <ListItem
                                                icon={link.icon}
                                                label={link.label}
                                                active={active}
                                            />
                                        </MenuLink>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                        <div className="p-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="w-full">
                                        <ListItem
                                            icon={<UserMinusIcon />}
                                            label="ログアウト"
                                            active={active}
                                        />
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

        </div>
    )
}
export default AvaterMenu
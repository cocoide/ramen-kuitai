import { Menu, Transition } from '@headlessui/react'
import { Cog8ToothIcon, HandThumbUpIcon, MapPinIcon, PencilSquareIcon, UserIcon, UserMinusIcon } from '@heroicons/react/24/solid';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react'
import { cn } from '../../../utils/cn';
import { useAuth } from '../../../utils/hooks/useAuth';

const AvaterMenu = ({ userId }: { userId: User["id"] }) => {

    const { data: session } = useSession();
    const Links = [
        {
            label: 'プロフィール',
            icon: <UserIcon />,
            path: `/${userId}`,
        },
        {
            label: '保存したお店',
            icon: <MapPinIcon />,
            path: '/ramens',
        },
        {
            label: 'らあ活を投稿',
            icon: <PencilSquareIcon />,
            path: '/review',
        },
        {
            label: 'いいねした投稿',
            icon: <HandThumbUpIcon />,
            path: '/ramens',
        },
        {
            label: '設定',
            icon: <Cog8ToothIcon />,
            path: `/setting`,
        },
    ];
    return (
        <div>
            <Menu as="div" className="relative z-50">
                <Menu.Button className="w-10 h-10  justify-center rounded-full 
                bg-[#e0d5c1]  focus:outline-none p-1">

                    <Image src={session?.user.image as string} alt={session?.user.name as string} height={60} width={60} className="rounded-full" />

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
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-200
        rounded-md focus:outline-none ring-1 ring-gray-200 text-[#D8CEBA] duration-300 drop-shadow-xl">
                        <div className="p-1 font-medium">
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
                        <div className="p-1 font-medium">
                            <Menu.Item>
                                {({ active }) => (
                                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                    <button onClick={Logout}
                                        className="w-full">
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
};

const { Logout } = useAuth();
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
                active ? 'text-white bg-[#D8CEBA]' : ""
            )}
        >
            <span
                className={cn(
                    'w-5 h-5',
                    active ? 'text-white duaration-500' : 'text-[#D8CEBA]'
                )}
            >
                {icon}
            </span>
            <span className="flex-1">{label}</span>
        </span>
    );
};

export default AvaterMenu;

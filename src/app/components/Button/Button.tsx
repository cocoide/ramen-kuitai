"use client"
import { redirect } from 'next/navigation';
import { FC, ReactNode } from 'react'
import { cn } from '../../../utils/cn'
import { ROOT_URL } from '../../../libs/client/constants';

type ButtonProps = {
    children?: ReactNode
    className?: string
    text?: string
    redirectURL?: "" | "ramens" | "todos"
}

const Button: FC<ButtonProps> = ({
    children,
    className,
    text,
    redirectURL,
}) => {

    const classes: string[] = []
    className && classes.push(className)

    return (
        <button
            className={cn(`rounded-md p-1 ${classes.join(' ')}`)}
            onClick={() => redirect(`${ROOT_URL}/${redirectURL}`)}
        >
            {children}
            {text}
        </button>
    )
}
export default Button;
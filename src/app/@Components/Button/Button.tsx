"use client";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  text?: string;
  redirectURL?: "" | "ramens" | "todos";
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  text,
  redirectURL,
}) => {
  const classes: string[] = [];
  className != null && classes.push(className);

  return (
    <>
      <button
        className={cn(`rounded-md p-1 ${classes.join(" ")}`)}
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        onClick={() => redirect(`localhost:3000/${redirectURL}`)}
      >
        {children}
        {text}
      </button>
    </>
  );
};
export default Button;

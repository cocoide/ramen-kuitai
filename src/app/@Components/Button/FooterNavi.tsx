"use client";
import {
  BellIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const FooterNavi = () => {
  const session = useSession();

  return (
    <div
      className="flex items-center justify-center shadow-natural bg-white h-15 w-full 
        fixed bottom-0 py-1  space-x-8 md:hidden
        "
    >
      {/* place-center shadow-natural bg-white h-15 ring-1 ring-secondary
        fixed left-1/2 -translate-x-1/2 bottom-3
         p-3 w-auto md:hidden  rounded-3xl   */}

      <Link href={"/ramens"}>
        <HomeIcon className="h-9 text-secondary hover:scale-95 duration-300" />
      </Link>

      <Link href={"/explore"}>
        <MagnifyingGlassIcon className="h-9 text-secondary hover:scale-95 duration-300" />
      </Link>

      <Link href={"/review"}>
        <PlusCircleIcon className="h-9 text-secondary hover:scale-95 duration-300" />
      </Link>

      <Link href={"/notifications"}>
        <BellIcon className="h-9 text-secondary hover:scale-95 duration-300">
        </BellIcon>
      </Link>

      {session?.status === "loading" ? (
        <div className="w-9 h-9 bg-secondary animate-pulse rounded-full" />
      ) : session?.status === "authenticated" ? (
        <Link
          href={`/${session.data.user.id}`}
          className="w-7 h-7  justify-center rounded-full 
                bg-secondary  focus:outline-none"
        >
          {" "}
          <Image
            src={session.data.user.image as string}
            alt={session.data.user.name as string}
            height={28}
            width={28}
            className="rounded-full w-7 h-7 ring-1 ring-primary ring-offset-2"
          />
        </Link>
      ) : (
        <Link href={`/login`}>
          <UserIcon className="h-9 text-secondary hover:scale-95 duration-300" />
        </Link>
      )}
    </div>
  );
};
export default FooterNavi;

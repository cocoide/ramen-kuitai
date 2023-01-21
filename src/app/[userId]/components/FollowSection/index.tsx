"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import FollowButton from '../FollowButton';

const FollowSection = ({ id, name }: { id: string, name: string }) => {
  const session = useSession()
  const nowUser = session?.data?.user
  return (
    <div className="">


      {nowUser != null ? (
        <FollowButton
          following={nowUser?.id}
          followed={id}
          name={name}
        />
      ) : (
        <Link
          href={"/login"}
          className="place-center rounded-full bg-gray-100 text-gray-600 hover:brightness-80 p-1 w-full"
        >
          フォローする
        </Link>
      )}
    </div>
  )
}
export default FollowSection
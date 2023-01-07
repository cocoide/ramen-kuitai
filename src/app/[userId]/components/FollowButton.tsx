"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast';
import { API_URL } from '../../../libs/client/constants';

async function patchFollow(id: string, name: string) {
    toast.success(`『${name}』をフォロー完了`);
    return await fetch(`${API_URL}/user/follow/${id}`, {
        method: "PATCH"
    })
};
export async function deleteFollow(id: string) {
    return await fetch(`${API_URL}/user/follow/${id}`, {
        method: "DELETE"
    })
}


export default function FollowButton({ following, followed, name }: { following: string, followed: string, name: string }) {
    const pathName = usePathname();
    return (
        <div className="mx-10 mb-3">
            {pathName == `/${following}` || pathName == `/${following}/bookmark` || pathName == `/${following}/favorite` || pathName == `/${following}/following` || pathName == `/${following}/followed` ?
                <Link href="/setting" className="place-center bg-gray-100 rounded-full text-gray-600 hover:brightness-80 p-1"
                >プロフィールを編集</Link>
                : 
                <button onClick={() => patchFollow(followed, name)}
                    className="place-center rounded-full bg-gray-100 text-gray-600 hover:brightness-80 p-1 w-full"
                >フォローする</button>
            } 
        </div>
    )
};
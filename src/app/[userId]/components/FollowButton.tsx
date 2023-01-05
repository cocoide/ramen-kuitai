"use cliet"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function FollowButton({ userId }: { userId: string }) {
    const pathName = usePathname();
    return (
        <div className="mx-10 mb-3">
            {pathName == `/${userId}` || `/${userId}/bookmark` || `/${userId}/favorite` ?
                <Link href="/setting" className="place-center bg-gray-100 rounded-full text-gray-600 hover:brightness-80 p-1"
                >プロフィールを編集</Link>
                :
                <button className="place-center bg-gray-100 rounded-full ring-1 ring-primary
                text-primary hover:brightness-80 p-1"
                >フォローする</button>
            }
        </div>
    )
};
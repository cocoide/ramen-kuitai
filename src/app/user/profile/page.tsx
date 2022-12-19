// https://github.com/shadcn/taxonomy/tree/main/lib
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = async () => {

    return (
        <div className="bg-orange-50 h-screen flex-col">

            {/* Select Tab */}
            <div className="flex justify-center p-3 space-x-5">
                <Link href={"/user/profile"} className="font-bold  p-2 text-orange-700 border-b-2 border-orange-700">ラーメン日記</Link>
                <Link href={"/user/profile/bookmarks"} className="font-bold  p-2 text-orange-700">保存したお店</Link>
                <Link href={"/user/profile/reviews"} className="font-bold  p-2 text-orange-700">投稿した口コミ</Link>
            </div>
        </div>
    )
}
export default ProfilePage
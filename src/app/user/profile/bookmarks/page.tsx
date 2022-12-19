import Link from 'next/link'

const BookmarkPage = () => {
    return (
        <div className="bg-orange-50 h-screen flex-col">

            {/* Select Tab */}
            <div className="flex justify-center p-3 space-x-5">
                <Link href={"/user/profile"} className="font-bold  p-2 text-orange-700 ">投稿したラーメン</Link>
                <Link href={"/user/profile/good"} className="font-bold  p-2 text-orange-700">いいねした投稿</Link>
                <Link href={"/user/profile/bookmark"} className="font-bold  p-2 text-orange-700 border-b-2 border-orange-700">保存したお店</Link>
            </div>
        </div>
    )
}
export default BookmarkPage
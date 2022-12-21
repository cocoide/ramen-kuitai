// https://github.com/shadcn/taxonomy/tree/main/lib
import Image from 'next/image';
import Link from 'next/link';
import { ramens } from '../../../@types/models/Ramen';
import { cn } from '../../../utils/cn';

const ProfilePage = async () => {

    return (
        <div className="flex-col">

            {/* Select Tab */}
            <div className="flex justify-center p-3 space-x-5 sticky top-0 backdrop-blur-sm bg-white/90">
                <Link href={"/user/profile"} className="font-bold  p-2 text-[#FFAF19] 
                border-b-2 border-[#FFAF19] w-[30%] flex justify-center"
                >らあ活</Link>
                <Link href={"/user/profile/bookmarks"} className="font-bold  p-2 text-[#FFAF19] w-[30%]
                flex justify-center"
                >保存したお店</Link>
                <Link href={"/user/profile/reviews"} className="font-bold  p-2 text-[#FFAF19] w-[30%]
                flex justify-center"
                >投稿した口コミ</Link>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
                {ramens.map((ramen) => {
                    return (
                        <div key={ramen.shop_name} className="p-2">
                            <Link href={`/ramens/${ramen.id}`}>
                                <div>{ramen.shop_name}</div>

                                <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
                                    className={cn("rounded-xl h-auto aspect-square",)
                                    } />
                            </Link>
                        </div>);
                })}
                {ramens.map((ramen) => {
                    return (
                        <div key={ramen.shop_name} className="p-2">
                            <Link href={`/ramens/${ramen.id}`}>
                                <div>{ramen.shop_name}</div>

                                <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
                                    className={cn("rounded-xl h-auto aspect-square",)
                                    } />
                            </Link>
                        </div>);
                })}
            </div>
        </div>
    )
}
export default ProfilePage
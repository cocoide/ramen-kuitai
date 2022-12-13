// https://github.com/shadcn/taxonomy/tree/main/lib
import Image from 'next/image';
import { getCurrentUser, getSession } from '../../../libs/server/session'
import SimpleAvater from '../../@Components/UserView/SimpleAvater'


const page = async () => {
    const session = await getSession();
    const user = await getCurrentUser()

    return (
        <div className="bg-orange-50 h-screen">
            <div className="flex justify-between p-10 space-x-7 bg-[#FFAF19]">
                <SimpleAvater w={50} h={50} image={'/avaters/user2.jpeg'} />
                <div className="bg-[#e0d8c7]  w-full rounded-xl"></div>
            </div>
            {(session) ? <div>ログイン中</div> : <div>ログアウト中</div>}
            <p>{user?.name}</p>
            <Image src={user?.image} alt={user?.name} width={50} height={50} />
        </div>
    )
}
export default page
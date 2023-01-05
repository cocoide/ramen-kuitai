import Link from 'next/link';
import { asyncComponent } from '../../../../error/async-error';
import { getUniqueUserAllData } from '../../../libs/server/services/user';
import SimpleAvater from '../../@Components/UserView/SimpleAvater';
import Usertab from './UserTab';

const UserDetail = asyncComponent(async ({ userId }: { userId: string }) => {
    const user = await getUniqueUserAllData(userId);
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-white">
                <div className="flex justify-center p-3">

                    <SimpleAvater w={30} h={30} image={user?.image} />

                    <div className="flex flex-col m-5 font-medium text-gray-600 space-y-3">
                        <div> {user.bio}</div>
                        <div className="">
                            <div className="text-bold">ユーザー名：{user.name}</div>
                            <div className="text-bold">自己紹介：{user.bio}</div>
                            <div>🍜投稿したらあ活：{user.id}杯</div>
                        </div>
                    </div>
                </div>
                <Link href="/setting" className="place-center bg-gray-100 mx-10 mb-3 rounded-full text-gray-600 hover:brightness-80 p-1"
                >プロフィールを編集</Link>
            </div>
            <Usertab userId={userId} />
        </div>
    )
});
export default UserDetail
import { asyncComponent } from '../../../../error/async-error';
import { getUniqueUserAllData } from '../../../libs/server/services/user';
import { getCurrentUser } from '../../../libs/server/session';
import SimpleAvater from '../../@Components/UserView/SimpleAvater';
import FollowButton from './FollowButton';
import Usertab from './UserTab';

const UserDetail = asyncComponent(async ({ userId }: { userId: string }) => {
    const user = await getUniqueUserAllData(userId);
    const sessionUser = await getCurrentUser();
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

                <FollowButton userId={sessionUser.id} />

            </div>
            <Usertab userId={userId} />
        </div>
    )
});
export default UserDetail
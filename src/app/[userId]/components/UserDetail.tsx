import Link from "next/link";
import { cache } from "react";
import { asyncComponent } from "../../../../error/async-error";
import { db } from "../../../libs/client/prisma";
// import { getCurrentUser } from "../../../libs/server/session";
import SimpleAvater from "../../@Components/UserView/SimpleAvater";
import FollowSection from './FollowSection';
// import FollowButton from "./FollowButton";
import Usertab from "./UserTab";

const getUniqueUserData = cache(async (userId: string) => {
  const res = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      image: true,
      bio: true,
      _count: {
        select: {
          posts: true,
          following: true,
          followedBy: true,
        },
      },
    },
  });
  return res
});
const UserDetail = asyncComponent(async ({ userId }: { userId: string }) => {
  // const nowUser = await getCurrentUser();
  // if (!nowUser) {
  //     notFound()
  // };
  const user = await getUniqueUserData(userId);
  return (
    <div className="flex flex-col pt-5">
      <div className="flex flex-col bg-white mx-10 md:mx-[100px] lg:mx-[200px]">
        <div className="flex justify-between items-center">
          <SimpleAvater w={17} h={17} image={user?.image as string} />

          <div className="place-center text-sm space-x-3 mb-3 text-gray-600">
            <div className="flex flex-col justify-center text-center ml-12 mr-5">
              {user?._count.posts}
              <div>投稿</div>
            </div>
            <Link
              href={`/${userId}/followed`}
              className="flex flex-col justify-center text-center"
            >
              {user?._count.followedBy}
              <div>フォロワー</div>
            </Link>
            <Link
              href={`/${userId}/following`}
              className="flex flex-col justify-center text-center"
            >
              {user?._count.following}
              <div>フォロー中</div>
            </Link>
          </div>
        </div>

        <div className="text-bold text-start mt-3">{user?.name}</div>
        <div className="text-bold text-star mb-3">{user?.bio}</div>

        <FollowSection name={user?.id as string} id={user?.id as string} />
      </div>

      <Usertab userId={userId} />
    </div>
  );
});
export default UserDetail;

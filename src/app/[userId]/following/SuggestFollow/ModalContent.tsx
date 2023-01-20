import { asyncComponent } from '../../../../../error/async-error';
import { cache } from 'react';
import { db } from '../../../../libs/client/prisma';
import Image from 'next/image';

const getRamdomUser = cache(async () => {
    const res = await db.user.findMany({
        select: {
            id: true,
            name: true,
            image: true,
        }
    })
    return res
})

const ModalContent = asyncComponent(async () => {
    const users = await getRamdomUser()
    return (
        <div className="flex flex-col items-center justify-center p-1 w-full space-y-3">
            {users.map(user => {
                return <div className="flex justify-between rounded-xl bg-gray-200 p-1 w-full items-center space-x-5" key={user.id}>
                    <div className="place-center">
                        <Image src={user.image as string} alt={user.name as string} width={50} height={50}
                            className="rounded-full aspect-square h-10 w-10 bg-gray-200" />
                        <div> {user.name}</div>
                    </div>

                    <button className="bg-gray-600 rounded-full p-1 text-white z-50">＋フォロー</button>
                </div>
            })}
        </div>
    )
})
export default ModalContent
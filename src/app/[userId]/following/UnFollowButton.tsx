"use client"

import { useState } from 'react'
import { API_URL } from '../../../libs/client/constants'

async function deleteFollow(id: string) {
    return await fetch(`${API_URL}/user/follow/${id}`, {
        method: "DELETE"
    })
};
async function patchFollow(id: string) {
    return await fetch(`${API_URL}/user/follow/${id}`, {
        method: "PATCH"
    })
};
const UnFollowButton = ({ userId }: { userId: string }) => {
    const [isFollowing, setFollow] = useState(true)
    return (
        <>
            {isFollowing ?

                <button className="bg-primary rounded-full p-2 text-white"
                    onClick={() => {
                        deleteFollow(userId)
                        setFollow(false)
                    }}>フォロー解除</button>
                :
                <button className="bg-white rounded-full p-2 text-primary ring-1 ring-primary"
                    onClick={() => {
                        patchFollow(userId)
                        setFollow(true)
                    }}>フォローする</button>
            }

        </>
    )
}
export default UnFollowButton
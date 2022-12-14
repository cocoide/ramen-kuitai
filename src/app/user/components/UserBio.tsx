const user = { comment: "あの味を求めて今日も街へ繰り出した", year_ramen: 12, review: 12, points: 36 }

const UserBio = () => {
    return (
        <div className="flex flex-col m-5 font-bold text-white space-y-3">
            <div> {user.comment}</div>
            <div className="">
                <div>🍜今年のラーメン：{user.year_ramen}杯</div>
                <div className="text-bold">獲得したポイント: {user.points}</div>
            </div>
        </div>
    )
}
export default UserBio
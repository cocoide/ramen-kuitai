import SimpleAvater from '../../@Components/UserView/SimpleAvater'

const page = () => {
    return (
        <div className="bg-orange-50 h-screen">
            <div className="flex justify-between p-10 space-x-7 bg-[#FFAF19]">
                <SimpleAvater w={50} h={50} image={'/avaters/user2.jpeg'} />
                <div className="bg-[#e0d8c7]  w-full rounded-xl"></div>
            </div>
        </div>
    )
}
export default page
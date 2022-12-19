import SkeletonLoader from '../@Components/Animations/SkeltonLoader'

const Loading = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center bg-orange-50 animate-pulse space-y-4">
            <div className="p-2">
                <div className="rounded-xl h-full aspect-square bg-gray"></div>
                <div className="rounded-xl h-full aspect-square bg-gray"></div>
                <div className="rounded-xl h-full aspect-square bg-gray"></div>
                <div className="rounded-xl h-full aspect-square bg-gray"></div>
                <div className="rounded-xl h-full aspect-square bg-gray"></div>
            </div>
        </div>
    )
}
export default Loading
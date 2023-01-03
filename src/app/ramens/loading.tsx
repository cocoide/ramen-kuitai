export default function Loading() {
    return (

        <>
            <div className="flex justify-center place-items-center w-full overflow-x-hidden  space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t border-[#f5ead4] p-3">
                <div className="bg-gray-200 rounded-xl h-7 w-[20%] animate-pulse"></div>
                <div className="bg-gray-200 rounded-xl h-7 w-[20%] animate-pulse"></div>
                <div className="bg-gray-200 rounded-xl h-7  w-[20%] animate-pulse"></div>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg place-items-center overflow-auto gap-4 p-3">

                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>
                <div className="bg-gray-200 aspect-square w-full animate-pulse rounded-xl"></div>

        </div>
        </>
    )
}
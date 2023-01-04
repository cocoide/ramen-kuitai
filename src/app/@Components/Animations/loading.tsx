export default function RamenLoading() {
    return (

        <>
            <div className="flex justify-center place-items-center w-screen space-x-5
                sticky top-0  backdrop-blur-sm bg-white/95 md:border-t border-[#f5ead4] ">
                <div className="bg-gray-200 rounded-xl h-7 w-[20%] animate-pulse my-3"></div>
                <div className="bg-gray-200 rounded-xl h-7 w-[20%] animate-pulse my-3"></div>
                <div className="bg-gray-200 rounded-xl h-7  w-[20%] animate-pulse my-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center overflow-auto gap-4 p-4">

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
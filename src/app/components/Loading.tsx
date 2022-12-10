const Loading = () => {
    return (
        <div className='fixed inset-0 bg-gray-300 opacity-50'>
            <div className="flex justify-center place-items-center mt-60">
                <div className="z-50 animate-spin h-10 w-10 border-4 border-orange-500 rounded-full border-t-transparent"></div>
            </div>
        </div>
    )
}
export default Loading
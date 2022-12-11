const CircleLoading = () => {
    return (
        <div className='fixed flex justify-center place-items-center 
        inset-0 bg-gray-300 opacity-50'>
            <div className="z-50 animate-spin h-10 w-10 border-4 border-orange-500 rounded-full border-t-transparent" />
        </div>
    )
}
export default CircleLoading
const CircleLoading = () => {
    return (
        <div className='fixed flex justify-center place-items-center 
        inset-0 bg-gray-100 opacity-50'>
            <div className="z-50 animate-spin h-10 w-10 border-4 border-primary rounded-full border-t-transparent" />
        </div>
    )
}
export default CircleLoading
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const SearchRamen = () => {
    return (
        <>
            <form className='flex rounded-full shadow-inner p-1 w-auto bg-gray-100 z-20'>
                <button className="focus:ring-0 border-none">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 mx-2" />
                </button>
                <input type="search" className="focus:ring-transparent ring-none border-none bg-gray-100
            rounded-xl  w-[350px] md:w-[600px] lg:w-[800px]  h-15 lg:h-17 p-2"
                    placeholder="検索" />
        </form>
        </>
    )
}
export default SearchRamen
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const SearchRamen = () => {
    return (
        <form className='flex bg-white rounded-full drop-shadow-xl z-50 p-1 w-auto'>
            <input className="focus:ring-0 border-none
             flex justify-center
            rounded-full  w-[350px] md:w-[600px] lg:w-[800px]  h-15 lg:h-17 p-2"
                placeholder="Enter the keyword about Ramen ..." />
            <button className="focus:ring-0 border-none">
                <MagnifyingGlassIcon className="h-8 w-8 border-l-2 ml-1 border-[#FFAF19] text-[#FFAF19]" />
            </button>
        </form>
    )
}
export default SearchRamen
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const SearchRamen = () => {
    return (
        <>
            <form className='flex bg-white rounded-full drop-shadow-md z-50 p-1 w-auto ring-2 ring-gray-200'>
            <input className="focus:ring-0 border-none
             flex justify-center
            rounded-full  w-[350px] md:w-[600px] lg:w-[800px]  h-15 lg:h-17 p-2 text-center"
                    placeholder="キーワード｜(種類・駅名・店名)を入力" />
            <button className="focus:ring-0 border-none">
                    <MagnifyingGlassIcon className="h-9 w-9 border-l-2 ml-1 px-1 border-[#FFAF19] text-[#FFAF19]" />
            </button>
        </form>
        </>
    )
}
export default SearchRamen
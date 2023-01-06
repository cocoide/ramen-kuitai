import { PencilIcon, ShareIcon } from '@heroicons/react/24/outline'

const RamenFooterButton = () => {
    return (
        <div className="flex justify-between items-center md:hidden w-screen bg-white">
            <button className="place-center rounded-full
            ring-1 ring-secondary m-3 p-2 text-white bg-white shadow-natural"
            ><ShareIcon className="w-8 h-8 text-secondary" />
            </button>

            <button className="place-center rounded-full
            ring-1 ring-secondary m-3 p-2 text-white bg-white shadow-natural"
            ><PencilIcon className="w-8 h-8 text-secondary" />
            </button>
        </div>
    )
}
export default RamenFooterButton
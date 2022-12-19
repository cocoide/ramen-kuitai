"use client"
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'


const BackButton = () => {
    const router = useRouter()
    return (
        <>
        <button onClick={() => router.back}>
            <ArrowSmallLeftIcon className="text-slate-200 opacity-70
        h-10 w-10 rounded-full p-1 m-1"/>
        </button>
        </>
    )
}
export default BackButton
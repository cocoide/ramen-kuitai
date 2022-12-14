"use client"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="">
      <button className="" onClick={() => { router.back() }}><ChevronLeftIcon className="h-8 w-8 text-[#D8CEBA]" /></button>
    </div>
  )
}
export default BackButton
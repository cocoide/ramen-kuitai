import Image from 'next/image';
import RamenCarousel from '../@Components/Animations/RamenCarousel';


export default function SearchPage() {

    return (
        <>
            <div className="flex">
                <div className="flex overflow-hidden overflow-x-auto snap-x snap-mandatory">
                    <Image src="/ramens/0.jpeg" alt="" width={600} height={100} className="snap-start w-[100%]" />
                    <Image src="/ramens/1.jpeg" alt="" width={600} height={100} className="snap-center w-[100%]" />
                    <Image src="/ramens/3.jpeg" alt="" width={600} height={100} className="snap-center w-[100%]" />
                    <Image src="/ramens/3.jpeg" alt="" width={600} height={100} className="snap-center w-[100%]" />
                    <Image src="/ramens/1.jpeg" alt="" width={600} height={100} className="snap-end w-[100%]" />
                </div>
            </div>
            <div className="h-screen">

            </div>
        </>
    )
}
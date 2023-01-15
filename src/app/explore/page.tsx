import Image from 'next/image';
import RamenCarousel from '../@Components/Animations/RamenCarousel';


export default function SearchPage() {

    return (
        <>
            <div className="h-screen flex bg-gray-400 opacity-70">
                <Image src="/ramens/0.jpeg" alt="" width={600} height={300} />
            </div>
            <div className="h-screen">

            </div>
        </>
    )
}
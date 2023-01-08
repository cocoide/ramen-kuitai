import Image from 'next/image'
import { cn } from '../../../utils/cn'

const SimpleAvater = ({ w, h, image, onClick }: { w: number, h: number, image: string, onClick?: () => void }) => {
    return (
        <div>
            <button className={cn(`w-${w} h-${h} bg-[#e0d5c1] rounded-full outline outline-offset-4 outline-primary`)}
            onClick={onClick}>
            <Image src={image} alt="" width={w * 4} height={h * 4} className="aspect-squar rounded-full" />
        </button>
        </div>
    )
}
export default SimpleAvater
import Image from 'next/image'
import { asyncComponent } from '../../../error/async-error'
import { getAllShops } from '../../libs/server/services/shop'

const PopularRamens = asyncComponent(async () => {
    const shops = await getAllShops()
    return (
        <div className="flex">
            {shops.map(shop => {
                return (
                    <div key={shop.id} className="flex flex-col">
                        < Image src={shop.image} alt="" width={800} height={100} className="snap-center w-[100%]" />
                    </div>
                )
            })}
        </div>
    )
})
export default PopularRamens
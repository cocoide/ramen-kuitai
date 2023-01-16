import { Category, RamenShop } from '@prisma/client'
import { asyncComponent } from '../../../../error/async-error'
import { getShopDetail } from '../../../libs/server/services/shop';


const ShopDetail = asyncComponent(async (
    { params }
        : {
            params: { shopId: string }
        }) => {
    const shop = await getShopDetail(params.shopId)
    return (
        <div className="">
            <h2 className="">店名：{shop.name}</h2>
            <div className="">住所：{shop.address}</div>
            <div className=""></div>
        </div>
    )

}
)
export default ShopDetail
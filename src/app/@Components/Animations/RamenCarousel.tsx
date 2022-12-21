
import Image from 'next/image';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel'
import { ramens } from '../../../@types/models/Ramen';
import { cn } from '../../../utils/cn';

// https://codesandbox.io/s/crypto-tracker-6dw9n?file=/src/components/Banner/Carousel.js:1976-1984
const RamenCarousel = () => {

  // const items = 
  const responsive = {
    0: { items: 2, },
    512: { items: 3, },
    1024: { items: 4 },
  };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        // items={items}
        autoPlay>

        {/* //       {ramens.map((ramen) => {
  //         return (
  //           <div key={ramen.shop_name} className="p-2">
  //             <Image src={ramen.image} alt={ramen.shop_name} width={300} height={200}
  //               className={cn("rounded-xl w-50 aspect-square",)
  //               } />
  //           </div>
  //         );
  //       })} */}
          <Image src={"/ramens/0.jpeg"} alt={""} width={300} height={200} />
          <Image src={"/ramens/1.jpeg"} alt={""} width={300} height={200} />
          <Image src={"/ramens/2.jpeg"} alt={""} width={300} height={200} />

      </AliceCarousel>
    </div>
  )
}
export default RamenCarousel
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ramens } from '../../../@types/models/Ramen';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { cn } from '../../../utils/cn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

// https://codesandbox.io/s/bkpw8m?file=/src/App.jsx:413-1148
const RamenCarousel = () => {

  return (
    <div className="flex justify-center bg-white">
      <Swiper

        slidesPerView={3.5}
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        effect={"fade"}
      >

        {ramens.map((src) => {
          return (
            <SwiperSlide key={src.shop_name}>
              <div className="p-2">
                <Link href={`/ramens/${src.id}`}>
                  <Image src={src.image} alt={src.shop_name} width={300} height={200}
                    className={cn("rounded-xl w-50 aspect-square",)
                    } />
                </Link>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default RamenCarousel
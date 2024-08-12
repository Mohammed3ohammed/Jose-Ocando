  "use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';

import img1 from "../../Image/Solid/solid1.webp"; 
import img2 from "../../Image/Solid/solid2.webp"; 
import img3 from "../../Image/Solid/solid3.webp"; 
import img4 from "../../Image/Solid/solid4.webp"; 
import img5 from "../../Image/Solid/solid5.webp"; 
import img6 from "../../Image/Solid/solid6.webp"; 
import img7 from "../../Image/Solid/solid7.webp"; 
import img8 from "../../Image/Solid/solid8.webp"; 
import img9 from "../../Image/Solid/solid9.webp"; 
import img11 from "../../Image/Solid/solid11.webp"; 
import img13 from "../../Image/Solid/img13.webp";
import img14 from "../../Image/Solid/img14.webp";

const Work = () => {
  const image = [img1 , img2, img3, img4, img5, img6, img7, img8, img9, img11, img13, img14];
  const swiperRef = useRef<any>(null);

  const handleBack = () => {
    if (swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='main-container grid grid-cols-1 justify-center items-center px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24'>
      <div className='flex justify-center items-center text-4xl md:text-5xl lg:text-6xl'>
        <h1>All work</h1>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        freeMode={true}
        allowTouchMove={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
        style={{ height: "300px", width: "100%" }}
      >
        {
          image.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt='Error uploading images' />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="flex justify-center mt-8">
        <div className="w-full md:w-4/5 lg:w-3/5">
          <div className='border-b border-slate-950 border-solid h-10 md:h-16'></div>
          <div className='flex justify-between mt-4 text-sm md:text-lg'>
            <button onClick={handleBack} className='border-2 border-solid border-slate-950 w-32 mr-2 md:w-40 h-8 md:h-10 rounded-full'>Back</button>
            <button onClick={handleNext} className='border-2 border-solid border-slate-950 w-32  ml-2 md:w-40 h-8 md:h-10 rounded-full'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;


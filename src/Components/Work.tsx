"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../app/globals.css';
import { FreeMode, Pagination } from 'swiper/modules';
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



import { useRef } from 'react';

const Work = () => {
  
const swiperRef = useRef(null);

  const handleBack = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    
<div className=' grid grid-cols-1 justify-center items-center '  style={{height: "900px"}}>
     <div className='flex justify-center items-center text-6xl' >
  <h1>All work13</h1>
  </div>
     
     <Swiper
     ref={swiperRef}
      slidesPerView={3}
      loop={true}
     spaceBetween={40}
      freeMode={true}
      allowTouchMove={false}
      modules={[FreeMode, Pagination]}
      className="mySwiper mt-10 "
       style={{height: "400px" , width:"800px "}} 
    >
      
        
          <SwiperSlide> <Image src={img1} alt='Aggregate Singularity'  className='object-cover rounded-3xl  '/> <h4 className="text-center mt-5">Aggregate Singularity</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img2} alt='New Story'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">New Story</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img3} alt='Intelicheck'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Intelicheck</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img4} alt='Stem Logistics'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Stem Logistics</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img5} alt='GeenHouse'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">GeenHouse</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img6} alt='Climate Neutral'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Climate Neutral</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img7} alt='Good Paper'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Good Paper</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img8} alt='Support Ninja'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Support Ninja</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img9} alt='Happy Valley Farms'  className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Happy Valley Farms</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img11} alt='Whiteboard' className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">Whiteboard</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img13} alt='all where' className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">all where</h4> </SwiperSlide>
          <SwiperSlide> <Image src={img14} alt='aro' className='object-cover  rounded-3xl '/> <h4 className="text-center mt-5">aro</h4> </SwiperSlide>
        

    </Swiper>
    
    <div className="flex justify-center ">
  <div className="w-3/6">
    <div className='border-b border-slate-950 border-solid  h-20'></div>
    <div className='flex justify-between mt-8 text-lg '>
<button onClick={handleBack}  className='border-2 border-solid border-slate-950 w-40 h-9 rounded-full'>Back</button>
<button onClick={handleNext}  className='border-2 border-solid border-slate-950 w-40 h-9 rounded-full'>Next</button>
</div>
  </div>
 
</div>
</div>


  );
};

export default Work;


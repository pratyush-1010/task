import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';
import banner from './Json/Banner.json'
import Slide from './Slide';
export default function App() {
  
  return (

    <>
      <Swiper navigation={true} modules={[Navigation,Autoplay]} className="mySwiper clr mb-5 ssec" style={{height:"80vh"}}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      >
        {
          banner.map((ele,ind)=>{
            // if(ele.button == false){
              //   setBtn("none")
            // }
            return(
              <SwiperSlide>
              <Slide ele={ele}/>              
          </SwiperSlide>
              )
            })
          }
       
      </Swiper>
    </>
  );
}

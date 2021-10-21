import React from "react"
import styled, { css } from "styled-components"
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles.css';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow"
import 'swiper/css/navigation';
SwiperCore.use([Navigation,Pagination,Autoplay,EffectCoverflow]);

const SwiperGallery = () => {
    const Container = styled.div`
    text-align: start;
    //justify-content: start;
    margin: 0px;
    background-color: color;
    padding:20px;
  
    background-color: ${props => props.primary};
    ${props => props.maincontainer && css`
      width:60%;
    `}
    ${props => props.info && css`
      word-spacing:9999rem;
    `}
    ${props => props.secondcontainer && css`
    `}
  `
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} >
         {({ isActive }) => (
        <img
        className={
          isActive?"curslide-seleced":"curslide-unselected"
        }
         
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
        )
      }
      </SwiperSlide>
    )
  }
    return ( 
        <Container>  
        <Container className="m-0 p-0 sm:grid justify-start md:flex justify-start">
        <Swiper 
          direction={'vertical'}
          spaceBetween={30}
          slidesPerView={1.75}
          activeIndex='2'
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          modules={[Navigation,Pagination]}
          pagination={{clickable:true ,el:'.swiper-pagination.left,.swiper-pagination.right'}}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index dekka changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}
        >
          {slides}
        </Swiper>
        <Container className="swiper-pagination left p-2 border-2 border-black flex md:flex-col sm:grid justify-start gap-5"></Container>
        </Container></Container>
      
     );
}
 
export default SwiperGallery;
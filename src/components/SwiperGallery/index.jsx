/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import './styles.css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

const SwiperGallery = ({ pictures, onSwipeChanged }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: { relativeDirectory: { eq: "Albums" } }) {
                edges {
                    node {
                        relativePath
                        extension
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    const swiperRef = useRef(null)

    return (
        <Swiper
            ref={swiperRef}
            direction="vertical"
            spaceBetween={20}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            slidesPerView={1.75}
            className="h-full"
            activeIndex="2"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            centeredSlides
            scrollbar={{ draggable: true }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination.left,.swiper-pagination.right',
            }}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
                onSwipeChanged(swiper.activeIndex)
            }}
            onReachEnd={() => console.log('Swiper end reached')}
        >
            {data.images.edges.map((image, index) => (
                <SwiperSlide key={`slide-${index.toString()}`}>
                    {({ isActive }) => (
                        <img
                            className={
                                isActive
                                    ? 'curslide-seleced'
                                    : 'curslide-unselected'
                            }
                            // eslint-disable-next-line global-require
                            src={image.node.publicURL}
                            alt={`Slide ${index}`}
                        />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperGallery

import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import Typewriter from 'typewriter-effect'
import Speaker from './speaker'
import './style.css'

const ContentDiv = styled.div`
    width: 250px;
    height: 200px;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);

    @media (max-width: 420px) {
        display: none;
    }
`

const SpeakersSection = ({ speakers }) => {

    return (
        <section
            className="p-10 flex flex-col justify-start items-start gap-8 relative"
            id="speakers"
        >
            <div className="binary-data hidden sm:block">
                <Typewriter
                    options={{
                        delay: 20,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                '1010111010110111000101010010010110101101110001010100110'
                            )
                            .start()
                    }}
                />
            </div>


            <h1 className="text-5xl z-10 text-blue font-bold">Speakers</h1>
            <p className="text-lg  delay: 20, text-gray-600 font-normal font-mono">
                They are making it happen!
            </p>

            <div className=" z-10 py-52 px-8 w-full h-80 bg-blue flex flex-row justify-center items-center relative">
                <div className="white-border left" />
                <div className="white-border right" />

                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                    loop
                >
                    {speakers.map((speaker, index) => (
                        <SwiperSlide key={`sp-${index.toString()}`}>
                            <Speaker {...speaker} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default SpeakersSection

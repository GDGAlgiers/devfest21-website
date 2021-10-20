import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';
import Speaker from './speaker';
import './style.css';

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
`;


const SpeakersSection = ({ speakers }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className="p-10 flex flex-col justify-start items-start gap-8 relative">
            <div className="binary-data">1010111010110111000101010010010110101101110001010100110</div>

            <p className="code">
                event devfest21 = Devfest(edition=2021, host='GDGAlgiers')<br/><br/>

                //Learn together<br/>
                devfest21.setLearnTogether(true)<br/><br/>

                //Celebrate it<br/>
                devfest21.setHavefun(true)<br/><br/>

                //Hack together<br/>
                devfest21.setHackMode(true)<br/>
            </p>

            <h1 className="text-5xl text-blue font-bold">Speakers</h1>
            <p className="text-lg text-gray-600 font-normal font-mono">They are making it happens!</p>

            <div className="py-12 px-8 w-full h-80 bg-blue flex justify-center items-center relative">

                <div className="white-border left"></div>
                <div className="white-border right"></div>

                <ContentDiv>
                    <h3 className="text-4xl font-black capitalize font-mono text-black">{speakers[activeSlide].name}</h3>
                    {
                        speakers[activeSlide].jobs.map((job, index) => (
                            <p key={index} className="text-lg text-gray-500 font-mono">{job}</p>
                        ))
                    }
                </ContentDiv>
                <Swiper
                    slidesPerView={window.innerWidth > 420 ? 3 : 1}
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    centeredSlides={true}
                    onSlideNextTransitionEnd={(swiper) => {
                        setActiveSlide(value => value + 1 > speakers.length - 1 ? 0 : value + 1);
                    }}
                    onSlidePrevTransitionEnd={(swiper) => {
                        setActiveSlide(value => value - 1 < 0 ? speakers.length - 1 : value - 1);
                    }}
                >
                    {
                        speakers.map((speaker, index) => (
                            <SwiperSlide key={index}>
                                <Speaker {...speaker} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default SpeakersSection;
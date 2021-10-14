import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';
import Speaker from './speaker';
import './swiper.css';

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
`;

const SpeakersSection = () => {

    const speakers = [
        {
            name: 'someone famous1',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of google', 'web dev'],
        },
        {
            name: 'someone famous2',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of facebook'],
        },
        {
            name: 'someone famous3',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of microsoft', 'app developer'],
        },
        {
            name: 'someone famous4',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['AI developer'],
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className="p-10 flex flex-col justify-start items-start gap-4">
            <h1 className="text-5xl text-blue-600 font-bold">Speakers</h1>
            <p className="text-lg text-gray-600 font-normal font-mono">They are making it happens!</p>

            <div className="py-12 px-8 w-full h-80 bg-blue-500 flex justify-center items-center relative">
                <ContentDiv>
                    <h3 className="text-4xl font-black capitalize font-mono text-black">{speakers[activeSlide].name}</h3>
                    {
                        speakers[activeSlide].jobs.map(job => (
                            <p className="text-lg text-gray-500 font-mono">{job}</p>
                        ))
                    }
                </ContentDiv>
                <Swiper
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    centeredSlides={true}
                    onSlideNextTransitionEnd={(swiper) => {
                        setActiveSlide(value => value+1 > speakers.length-1 ? 0 : value+1);
                    }}
                    onSlidePrevTransitionEnd={(swiper) => {
                        setActiveSlide(value => value-1 < 0 ? speakers.length-1 : value-1);
                    }}
                >
                    {
                        speakers.map(speaker => (
                            <SwiperSlide>
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
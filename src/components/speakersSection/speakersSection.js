import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';
import Speaker from './speaker';
import './swiper.css';

const SpeakersSection = () => {

    const speakers = [
        {
            name: 'someone famous',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of google', 'web dev'],
        },
        {
            name: 'someone famous',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of google', 'web dev'],
        },
        {
            name: 'someone famous',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of google', 'web dev'],
        },
        {
            name: 'someone famous',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            jobs: ['CEO of google', 'web dev'],
        },
    ]

    return (
        <section className="p-10 flex flex-col justify-start items-start gap-4">
            <h1 className="text-5xl text-blue-600 font-bold">Speakers</h1>
            <p className="text-lg text-gray-600 font-normal font-mono">They are making it happens!</p>

            <div className="w-full h-80 bg-blue-500 flex justify-center items-center">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
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
import React, { useState, useEffect } from 'react'
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
    const [activeSlide, setActiveSlide] = useState(0)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

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

            <p className="code hidden sm:block">
                <Typewriter
                    options={{
                        delay: 20,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('fun main() {')
                            .typeString('<br/>')
                            .typeString(
                                '<pre>  print("Wait for Us COOL THINGS ARE COMING ....")</pre>'
                            )
                            .typeString('<br/>')
                            .typeString('<pre>  // GDG Algiers Present<pre>')
                            .typeString(
                                '<pre>  CoroutineScope gdgAlgiers;</pre>'
                            )
                            .typeString('<br/>')
                            .typeString('<pre>  gdgAlgiers.launch{</pre>')
                            .typeString('<br/>')
                            .typeString("<pre>    // Let's make it;</pre>")
                            .typeString(
                                "<pre>    Event devfest21 = Devfest(edition=2021,host='GDGAlgiers')</pre>"
                            )
                            .typeString('<br/>')
                            .typeString('<pre>    // Learn Together</pre>')
                            .typeString(
                                '<pre>    devfest21.setLearnTogether(true)</pre>'
                            )
                            .typeString('<br/>')
                            .typeString('<pre>    // Celebrate It </pre>')
                            .typeString(
                                '<pre>    devfest21.setHaveFun(true)</pre>'
                            )
                            .typeString('<br/>')
                            .typeString('<pre>    // Hack Together </pre>')
                            .typeString(
                                '<pre>    devfest21.setHackerMode(true)</pre>'
                            )
                            .typeString('<br/>')
                            .typeString(
                                "<pre>    Result.Success('And Enjoy Another Edition of DevFest')</pre>"
                            )
                            .typeString('<pre>  }.onStart({</pre>')
                            .typeString(
                                '<pre>    print("LET\'S DO COOL THINGS THAT MATTER");</pre>'
                            )
                            .typeString('<pre>  }) </pre>')
                            .typeString('}')
                            .start()
                    }}
                />
            </p>

            <h1 className="text-5xl z-10 text-blue font-bold">Speakers</h1>
            <p className="text-lg  delay: 20, text-gray-600 font-normal font-mono">
                They are making it happens!
            </p>

            <div className=" z-10 py-52 px-8 w-full h-80 bg-blue flex justify-center items-center relative">
                <div className="white-border left" />
                <div className="white-border right" />

                <ContentDiv>
                    <h3 className="text-4xl font-black capitalize font-mono text-black">
                        {speakers[activeSlide].name}
                    </h3>
                    {speakers[activeSlide].jobs.map((job, index) => (
                        <p
                            key={`sp-${index.toString()}`}
                            className="text-lg text-gray-500 font-mono"
                        >
                            {job}
                        </p>
                    ))}
                </ContentDiv>
                <Swiper
                    slidesPerView={width > 420 ? 3 : 1}
                    modules={[Navigation]}
                    navigation
                    loop
                    centeredSlides
                    onSlideNextTransitionEnd={() => {
                        setActiveSlide((value) =>
                            value + 1 > speakers.length - 1 ? 0 : value + 1
                        )
                    }}
                    onSlidePrevTransitionEnd={() => {
                        setActiveSlide((value) =>
                            value - 1 < 0 ? speakers.length - 1 : value - 1
                        )
                    }}
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

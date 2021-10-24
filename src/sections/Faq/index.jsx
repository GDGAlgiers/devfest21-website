/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import questions from '../../data/questions'
import Accordion from '../../components/Accordion'
import QuestionMark from '../../images/QuestionMark.svg'
import FaqLogo from '../../images/logo.svg'

const FaqDiv = styled.div`
    font-family: Roboto Mono;
    background-color: #1c7ef0;
    z-index: -2;
`
const Title = styled.div`
    -webkit-text-stroke: 2px black;
`

export default function Faq() {
    return (
        <section id="contact">
            <FaqDiv
                style={{ zIndex: '20' }}
                className="max-w-screen overflow-hidden relative text-center py-10 lg:px-32 md:px-10 sm:px-5  font-body"
            >
                <Title className=" text-6xl font-black text-white-default">
                    FAQ
                </Title>
                <img
                    src={QuestionMark}
                    alt="?"
                    style={{ zIndex: '-20' }}
                    className=" absolute -right-20 lg:-right-52 top-10 hidden md:block md:w-52 lg:w-96"
                    width="350px"
                />

                <img
                    src={FaqLogo}
                    alt="devfest logo"
                    style={{ zIndex: '-20' }}
                    className="absolute left-10 top-10 hidden sm:block sm:w-48 lg:w-64"
                />
                <div>
                    {questions.map((qst) => {
                        return (
                            <Accordion
                                title={qst.title}
                                key={qst.id}
                                content={qst.content}
                            />
                        )
                    })}
                </div>
            </FaqDiv>
        </section>
    )
}

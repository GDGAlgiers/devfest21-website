/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import questions from '../../data/questions'
import Accordion from './Accordion'
import QuestionMark from '../../images/QuestionMark.svg'

export default function Faq() {
    const FaqDiv = styled.div`
        font-family: Roboto Mono;
        background-color: #1c7ef0;
    `
    const Title = styled.div`
        -webkit-text-stroke: 2px black;
    `
    return (
        <FaqDiv className=" max-w-screen overflow-hidden relative text-center py-10 px-32 font-body">
            <Title className=" text-6xl font-black text-white-default">
                FAQ
            </Title>
            <div className="z-10">
                {questions.map((qst) => {
                    return <Accordion title={qst.title} content={qst.content} />
                })}
            </div>
            <img
                src={QuestionMark}
                alt=""
                className="z-0 absolute -right-52 top-10 "
                width="350px"
            />
        </FaqDiv>
    )
}

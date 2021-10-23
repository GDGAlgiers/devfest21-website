/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

export default function Accordion({ title, content }) {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')

    const contentSpace = useRef(null)

    function toggleAccordion() {
        setActive(active === false)
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(
            active
                ? 'transform duration-700 ease'
                : 'transform duration-700 ease rotate-180'
        )
    }
    const QstDiv = styled.div`
        box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
        z-index: 100;
    `
    return (
        <QstDiv className="z-10 flex flex-col m-5 bg-white-default border-8  border-darkBlue">
            <button
                type="button"
                className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <p className="inline-block font-extrabold text-footnote md:text-4xl text-3xl light pl-32">
                    {title}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-20 w-20 mr-7 ${rotate} inline-block`}
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-auto md:text-3xl text-2xl text-left transition-max-height duration-700 ease-in-out"
            >
                <div className="pb-10 pl-32">{content}</div>
            </div>
        </QstDiv>
    )
}

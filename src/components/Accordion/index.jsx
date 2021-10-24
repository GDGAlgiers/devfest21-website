/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'

const QstDiv = styled.div`
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
    z-index: 100;
`

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
    return (
        <QstDiv className="flex flex-col m-5 bg-white-default border-8  border-bleuDfest">
            <button
                type="button"
                className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between px-2 md:px-4"
                onClick={toggleAccordion}
            >
                <h1 className="text-left inline-block font-extrabold  text-footnote light md:pl-4 md:text-3xl text-2xl">
                    {title}
                </h1>
                <FaChevronDown className="flex-shrink-0" style={{fontSize: '16px'}} />
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="text-left overflow-y-hidden md:text-3xl text-2xl transition-max-height duration-700 ease-in-out"
            >
                <div className="py-4 px-4 md:px-10">{content}</div>
            </div>
        </QstDiv>
    )
}

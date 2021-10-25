import React from 'react'
// import styled, { css } from 'styled-components'
import testMp4 from '../../videos/Devfest21_Teaser.mp4'

const WhatIsDevfest = () => {
    const text =
        '“DevFest”, short for “Developer Festival” is an annual technical event organized by Google Developers Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals and everyone passionate about the tech field. It is considered as a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.'
    const title = 'What is devfest'
    return (
        <div className="app flex flex-col lg:flex-row justify-between items-center m-4 sm:m-16 font-mono">
                <div className="text flex-1">
                    <h2 className="text-center lg:text-left text-3xl md:text-6xl sm:justify-center text-bleuDfest font-bold mb-8 ">
                        {title}
                    </h2>
                    <p className="text-lg md:text-2xl leading-normal mr-2 md:pr-2">
                        {text}
                    </p>
                </div>
                <div className="p-2 mt-4 sm:mt-4 flex-1 flex items-center">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: `100%` }}
                    >
                        <source src={testMp4} type="video/mp4" />
                    </video>
                </div>
        </div>
    )
}
export default WhatIsDevfest

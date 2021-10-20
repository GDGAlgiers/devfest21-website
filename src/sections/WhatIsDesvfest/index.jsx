import React from 'react'
// import styled, { css } from 'styled-components'
import testMp4 from '../../videos/Devfest21_Teaser.mp4'

const WhatIsDevfest = () => {
    const text =
        '“DevFest”, short for “developer festival” is an annual technical event organized by google developers groups aiming to deliver conferences and workshops to students, developers, professionals, and everyone passionate about the tech field, and a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.'
    const title = 'What is devfest'
    return (
        <div className="app m-4 sm:m-16 font-mono">
            <h2 className=" text-3xl sm:text-6xl sm:justify-center text-bleuDfest font-bold mb-8 ">
                {title}
            </h2>
            <div className="lg:grid grid-cols-2">
                <div className="text">
                    <p className="text-xl sm:text-3xl leading-normal mr-2">
                        {text}
                    </p>
                </div>
                <div className=" ">
                    <div className=" p-2 mt-4 sm:mt-4">
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
            </div>
        </div>
    )
}
export default WhatIsDevfest

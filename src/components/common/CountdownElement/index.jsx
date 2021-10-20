import React from 'react'

const CountdownElement = ({ title, number }) => (
    <div className="flex relative flex-col m-0 sm:m-6 bg-blue border-2 border-white-lighter items-center z-10 py-1 sm:py-2 px-2 sm:px-4 shadow-lg">
        <svg
            width="6"
            className="absolute bottom-1 right-2"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2.95837" cy="3.12793" r="2.94006" fill="#202124" />
        </svg>
        <svg
            width="6"
            height="7"
            className="absolute bottom-1 right-4"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2.95837" cy="3.12793" r="2.94006" fill="#202124" />
        </svg>
        <p className=" text-xs md:text-xl text-white-lighter font-light">
            {title}
        </p>
        <h1 className=" text-5xl md:text-6xl text-white-lighter font-bold">
            {number.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
            })}
        </h1>
    </div>
)
export default CountdownElement

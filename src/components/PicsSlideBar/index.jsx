import React from 'react'

const HistorySection = ({ count, position }) => {
    return (
        <div className=" bg-white-lighter px-4 flex flex-col border-2 py-4">
            {Array.from(Array(count).keys()).map((key, index) => (
                <div
                    className={` h-7 w-7 my-2 ${
                        index === position ? 'bg-darkBlue' : ' bg-black-darker'
                    }`}
                />
            ))}
        </div>
    )
}
export default HistorySection

import React from 'react'

const DevFestStats = ({ description, stats }) => {
    return (
        <div className="flex bg-white-lighter flex-col items-center border-3 justify-between  border-darkBlue">
            <div className="flex mt-11  mx-14 px-8 py-3 bg-white-lighter justify-center border-2 border-black shadow-sm md:text-xl sm:text-sm font-bold description">
                {description}
            </div>
            <div className="md:flex mt-8 mb-11 justify-center items-start sm:grid gap-10">
                {stats.map((item, key) => (
                    <div
                        key={`${key.toString()}`}
                        style={{
                            maxWidth: 180,
                        }}
                        className=" flex flex-col  border-2 bg-white-lighter py-2 px-2 text-center border-black shadow-sm md:text-xl sm:text-xs font-bold description"
                    >
                        <p>{item.number}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DevFestStats

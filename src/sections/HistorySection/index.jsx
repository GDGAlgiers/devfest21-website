import React, { useState } from 'react'
import PicsSlideBar from '../../components/PicsSlideBar'
import StatsText from '../../components/StatsText'
import DevfestStats from '../../components/DevFestStats'
import devfestEditions from '../../data/previousEditions.json'
import SwiperGallery from '../../components/SwiperGallery'

const HistorySection = () => {
    const devFestEditions = devfestEditions
    const [currentEdition, setCurrentEdition] = useState(devFestEditions[0])
    const [currentPics, setCurrentPics] = useState([
        'devfest18.jpg',
        'devfest18-1.jpg',
        'devfest18-2.jpg',
        'devfest19.jpg',
        'devfest19-1.jpg',
        'devfest19-2.jpg',
        'devfest19-2.jpg',
        'devfest19-4.jpg',
        'devfest19-5.jpg',
        'devfest19-6.jpg',
        'devfest19-7.jpg',
        'devfest19-8.jpg',
    ])
    const [currentPosition, setCurrentPosition] = useState(0)
    return (
        <div className="flex flex-col ">
            <StatsText />
            <div className="w-full table">
                <div className="table-cell align-middle w-8/12 bg-blue">
                    <div className="flex py-4 flex-row justify-center items-stretch my-auto mx-auto">
                        <div className=" sm:w-3/5 md:w-9/12 h-5/6">
                            <div className=" flex flex-row bg-darkBlue">
                                {devFestEditions.map((item, index) => (
                                    <div
                                        key={item.id + index.toString()}
                                        className={`flex mr-2  ${
                                            item.id === currentEdition.id
                                                ? 'pb-2'
                                                : 'mb-2'
                                        } pb-2 flex-row items-center bg-white-lighter `}
                                    >
                                        <button
                                            onClick={() => {
                                                /// selected new edition of devfest
                                                setCurrentEdition(item)
                                            }}
                                            className="flex flex-row items-center"
                                            type="button"
                                        >
                                            <p className=" px-2">
                                                {item.title}
                                            </p>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <DevfestStats
                                description={currentEdition.description}
                                stats={currentEdition.stats}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:table-cell hidden ">
                    <div className="flex flex-row flex-1 ">
                        <PicsSlideBar
                            count={currentPics.length}
                            position={currentPosition}
                        />
                        <div className="flex-1">
                            <SwiperGallery
                                pictures={currentPics}
                                onSwipeChanged={(position) => {
                                    setCurrentPosition(position)
                                }}
                            />
                        </div>
                        <PicsSlideBar
                            count={currentPics.length}
                            position={currentPosition}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HistorySection

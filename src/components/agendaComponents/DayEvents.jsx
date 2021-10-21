import React from 'react'; 
import styled from 'styled-components';
import clockIcon from '../../../assets/imgs/clockIcon.svg'

const DayEvents = (props) => {
    const Act = styled.div`
        background: ${props.bgColor};
        opacity: ${props.display};
    `
    return (
        <div>
            <Act className="pt-5">
                {props.dayPlan.map((elem, key) => (
                    <div className="p-2 grid grid-cols-12 gap-1">
                        <img
                            src={clockIcon}
                            className="ml-auto mr-auto mx-1"
                            width="30px"
                        ></img>
                        <div className="col-span-4 text-white-lighter md:text-lg text-sm ">
                            {elem.startTime} - {elem.endTime}
                        </div>
                        <div className="col-span-7">
                            <div className="font-bold md:text-lg text-sm">
                                {elem.acticity}
                            </div>
                            <div className="text-xs text-gray-700">
                                {elem.description}
                            </div>
                        </div>
                    </div>
                ))}
            </Act>
        </div>
    )
}

export default DayEvents 

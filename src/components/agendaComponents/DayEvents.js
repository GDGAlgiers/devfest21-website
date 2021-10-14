import React from 'react';
import styled from 'styled-components';

const DayEvents = (props) => {
    const colors = {
        lightBlue: "#1C7EF0",
        darkBlue: "#0053BA",
      }
    const Act = styled.div`
    background: ${colors.lightBlue};
  `
    return (
        <div>
            <Act className="pt-5">
              {props.dayPlan.map((elem, key) => (
                <div className="p-2 grid grid-cols-12">
                  <div>icon</div>
                  <div className="col-span-4 text-white text-lg">
                    {elem.startTime}  -  {elem.endTime}
                  </div>
                  <div className="col-span-7">
                    <div className="font-bold text-lg">{elem.acticity}</div>
                    <div className="text-xs text-gray-700">{elem.description}</div>
                  </div>
                </div>
              ))}
            </Act>
        </div>
    );
};

export default DayEvents;
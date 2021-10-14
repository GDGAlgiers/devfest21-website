import React from 'react';
import styled from 'styled-components';
import DayEvents from "./DayEvents" ; 

const Slide = (props) => {
    const Slid = styled.div`
    padding : 10px ; 
    background: ${props.colors.darkBlue};
    width: 50% ; 
    ` ; 
    return (
        <Slid className="p-2 absolute left-64 top-16">
          <div className="bg-white grid grid-cols-2 justify-between px-2 py-1">
            <div className="">Agenda</div>
            <div className="text-right">some icons</div>
          </div>
          <DayEvents dayPlan = {this.state.dayPlan}/>
        </Slid>
    );
};

export default Slide;
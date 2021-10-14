import React, { Component } from "react"
import styled from "styled-components"
import { agendaData } from "../../data/agenda"
import devfestLogo from '../../assets/imgs/devfestLogo.svg'
import Slide from "./agendaComponents/Slide";

class Agenda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayPlan: agendaData[0],
    }
  }
  render() {
    const colors = {
      lightBlue: "#1C7EF0",
      darkBlue: "#0053BA",
    }
    const AgendaSection = styled.div``
    const SlidesSection = styled.div``
    const NavigationSidebar = styled.div`
    background: #1C7EF0;
    border: 5px solid #000000;
    box-sizing: border-box;
      height: 85vh;
      width: 90%;
    `
    const DaysList = styled.div`
    background: #FFFFFF;
    border: 5px solid #2275DA;
    box-sizing: border-box;
    box-shadow : 5px 5px 0px 0px ${colors.darkBlue} ; 
    `
    const Days = styled.div`
      padding: 10px;
      color: gray;
      cursor: pointer;
     
    `
   

    return (
      <AgendaSection className="grid grid-cols-12 gap-1 py-10 ">
        <NavigationSidebar className="p-10 col-span-2 relative">
            <img src={devfestLogo} className="absolute h-4/5 bottom-0 -left-5"></img>
          <DaysList className="bg-white p-3 absolute">
            <Days className="font-bold text-lg">DAY 1 </Days>
            <Days className="font-bold text-lg">DAY 2</Days>
            <Days className="font-bold text-lg">DAY 3</Days>
          </DaysList>
        </NavigationSidebar>
        <SlidesSection className="col-span-10 relative">
        {/* <Slide className="p-2 absolute left-56 top-8"><div className="bg-white py-2 "></div>
          <div className="bg-white h-40 mt-3"></div></Slide>
          <Slide className="p-2 absolute left-60 top-12"><div className="bg-white py-2 "></div>
          <div className="bg-white h-40 mt-3"></div></Slide> */}
          <Slide colors ></Slide>
        </SlidesSection>
      </AgendaSection>
    )
  }
}

export default Agenda

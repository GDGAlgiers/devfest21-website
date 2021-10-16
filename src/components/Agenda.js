import React, { Component } from "react"
import styled from "styled-components"
import { agendaData } from "../../data/agenda"
import devfestLogo from "../../assets/imgs/devfestLogo.svg"
import topBg from "../../assets/imgs/topAgendaBg.png"
import bottomBg from "../../assets/imgs/bottomAgendaBg.png"
import DayEvents from "./agendaComponents/DayEvents"
import networkingIcon from "../../assets/imgs/networkingIcon.svg"
import assetsIcon from "../../assets/imgs/assetsIcon.svg"
import agendaIcon from "../../assets/imgs/agendaIcon.svg"

class Agenda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayPlan: agendaData[0],
      activeDay: [true, false, false],
      activeAnim : [false , false , false]
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
      background: #1c7ef0;
      border: 5px solid #000000;
      box-sizing: border-box;
    `
    const DaysList = styled.div`
      background: #ffffff;
      border: 5px solid #2275da;
      box-sizing: border-box;
      box-shadow: 5px 5px 0px 0px ${colors.darkBlue};
    `
    const Days = styled.div`
      padding: 10px;
      color: ${props => (props.active ? "black" : "gray")};
      cursor: pointer;
    `
    const Slide = styled.div`
      padding: 10px;
      background: ${colors.darkBlue};
      transition: width 1s, height 1s;
    `
    const getDatePlan = key => {
      this.setState({ dayPlan: agendaData[key] })
    }
    const changeColor = id => {
      const newState = [false, false, false]
      newState[id] = !newState[id]
      this.setState({ activeDay: newState })
    }
    const InderLine = styled.div`
      background: ${colors.lightBlue};
      height: 4px;
      display: ${props => (props.active ? "block" : "none")};
      
    `
    const slideAnimation = (id) =>{
      const slide = document.getElementById(`slide${id}`); 

    }

    const classes = [
         "top-0 left-0 md:left-20 lg:left-42 md:top-12 md:w-9/12", 
         "top-4 left-4 md:left-24 lg:left-46  md:top-16" ,
        "top-8 left-8 md:left-28 lg:left-50  md:top-20 md:w-9/12"
        ]

    return (
      <AgendaSection className="grid grid-cols-12 gap-2 md:py-10  md:h-screen relative pr-3 py-3">
        <img src={topBg} className="absolute -top-12 right-0" width="40%"></img>
        <NavigationSidebar className="lg:p-8 md:pl-3 pt-6 md:col-span-3 col-span-12 relative w-full md:w-8/12 md:h-full h-32 ml-1 ">
          <img
            src={devfestLogo}
            className="absolute md:h-4/5  bottom-8 -left-5 hidden md:block"
          ></img>
          <DaysList className="bg-white p-3 absolute">
            {agendaData.map((elem, key) => (
              <Days
                active={this.state.activeDay[key]}
                className="font-bold text-lg inline md:block relative"
                id={key}
                onClick={e => {
                  getDatePlan(key)
                  changeColor(e.target.id)
                  slideAnimation(e.target.id)
                }}
              >
                <InderLine
                  className=" w-10/12 right-0 absolute bottom-2"
                  active={this.state.activeDay[key]}
                ></InderLine>
                DAY {key + 1}
              </Days>
            ))}
          </DaysList>
          <img
            src={networkingIcon}
            className="absolute bottom-12 md:-right-8 -right-0 "
            width="70px"
          ></img>
        </NavigationSidebar>
        <SlidesSection className="md:col-span-9 col-span-11 relative md:h-screen h-min ml-1">
          
          <Slide 
          id = "slide0"
          className={`p-2 absolute  w-full lg:w-8/12 ${classes[0]}`}>
            <div className="bg-white py-4 w-full"></div>
            <div className="bg-white mt-3">
              <DayEvents dayPlan={this.state.dayPlan} bgColor="white" />
            </div>
          </Slide>
          <Slide 
          id = "slide1"
          className={`p-2 absolute  md:w-9/12 w-full lg:w-8/12 ${classes[1]}`}>
            <div className="bg-white py-4 "></div>
            <div className="bg-white  mt-3 ">
              <DayEvents dayPlan={this.state.dayPlan} bgColor="white"/>
            </div>
          </Slide>
          <Slide 
          id = "slide2"
          className={`p-2 absolute  md:w-9/12 w-full lg:w-8/12 ${classes[2]} `}>
            <div className="bg-white grid grid-cols-2 px-2 py-1 mb-2">
              <div className="font-bold text-blue-800">AGENDA</div>
              <div className="text-right grid grid-cols-2 w-max justify-self-end">
                <img src={agendaIcon} className="mx-2" width="20px"></img>
                <img src={assetsIcon} className="mx-2" width="20px"></img>
              </div>
            </div>
            <DayEvents
              dayPlan={this.state.dayPlan}
              bgColor={colors.lightBlue}
            />
          </Slide>
          <img
            src={bottomBg}
            className="absolute -bottom-0 -right-0"
            width="20%"
          ></img>
        </SlidesSection>
      </AgendaSection>
    )
  }
}

export default Agenda

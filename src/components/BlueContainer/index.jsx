import styled, {css} from 'styled-components'
import React from "react"
import { useState } from "react";


const BlueContainer = () => {
    const Container = styled.div`
    text-align: start;
    //justify-content: start;
    margin: 0px;
    background-color: color;
    padding:20px;
    background-color: ${props => props.primary};
    ${props => props.maincontainer && css`
      width:60%;
    `}
    ${props => props.info && css`
      word-spacing:9999rem;
    `}
    ${props => props.secondcontainer && css`
    `}
  `
  const [description,setDescription] = useState("Devfest Algiers 2018 was about “Digital wellbeing”, it was enriched by a Hackathon, workshops and conferences.");
  const [nombre,setNombre] = useState("200 attendees");
  const [hack,setHack] = useState("80 hackathon participants");
  const Button = styled.button`
  background: white;
  margin: 50px 0px 0px 0px;
  padding: 0.25em 0.25em 0.1em 0.30em;
  text-align: start;
`;
const devfestClick = (year)=>{
  if(year==2019){
      setDescription("DevFest Algiers 2019 was about covering ai field , it was enriched bla bla bla");
      setNombre("500 attendees");
      setHack("100 hackathon participants");
  }
  if(year==2020){
    setDescription("DevFest Algiers 2020 was about covering ai field , it was enriched bla bla bla");
    setNombre("600 attendees");
    setHack("200 hackathon participants");
  }
  if(year==2018){
    setDescription("Devfest Algiers 2018 was about “Digital wellbeing”, it was enriched by a Hackathon, workshops and conferences.");
    setNombre("200 attendees");
    setHack("80 hackathon participants");
  }
  }
    return ( <Container maincontainer primary="#046CE1">
    <Container className="md:flex justify-start mt-9 sm:grid justify-start mb-0 ml-0 mr-0 p-0 pl-5 border-collapse">
    <Button onClick={()=>{devfestClick(2018)}} className="flex justify-start items-center gap-4 border-8 border-blue-700 mt-0 md:text-xl sm:text-xs">DevFest 2018
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg> </Button>
    <Button onClick={()=>{devfestClick(2019)}} className="flex justify-start items-center lg:gap-4 border-8 border-blue-700 mt-0 md:text-xl sm:text-xs">DevFest 2019
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
    </Button>
    <Button onClick={()=>{devfestClick(2020)}} className="flex justify-start items-center lg:gap-4 border-8 border-blue-700 mt-0 md:text-xl sm:text-xs">DevFest 2020
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
    </Button>
    </Container>
    <Container secondcontainer primary="white" className="flex flex-col items-center ml-5 border-8 border-blue-700" >
      <Container primary="white" className="flexy justify-center border-2 border-black shadow-sm md:text-4xl sm:text-xl font-bold description">
      {description}
      </Container>
      <Container className="md:flex justify-center sm:grid justify-start gap-10">
        <Container info primary="white" className="border-2 text-center border-black shadow-sm md:text-2xl sm:text-cs font-bold description">{nombre}</Container>
        <Container info primary="white" className="drop-shadow-lg text-center border-2 border-black shadow-sm md:text-2xl sm:text-xs font-bold description">{hack}</Container>
      </Container>
      </Container>
    </Container>  );
}

export default BlueContainer; 
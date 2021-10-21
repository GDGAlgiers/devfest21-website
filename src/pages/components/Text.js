import styled, {css} from 'styled-components'
import React from "react"
const Text = () => {
    const Title = styled.h1`
color: #046CE1;
text-align: start;
`
const SubTitle = styled.h3`
color: black;
text-align:start;
`
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
    return (
    <Container><Title className="ml-5 mb-0 font-bold md:text-6xl sm:text-3xl">Look Back In Time</Title>
    <SubTitle className="ml-5 mb-2 font-thin md:text-xl sm:text-xs">Not Our first DevFesT, and certainly not our last.</SubTitle></Container>
        
      );
}
 
export default Text;
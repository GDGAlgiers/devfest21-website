import React from "react"
import styled, { css } from "styled-components"
import BlueContainer from '../../components/BlueContainer'
import SwiperGallery from "../../components/SwiperGallery"
import StatsText from "../../components/StatsText"
const StatsSection = () => {
  const Container = styled.div`
  text-align: start;
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
        <Container className="mt-8 ml-0 pl-0 font-mono">
            <StatsText></StatsText>
            <Container className="m-0 p-0 md:flex justify-start sm:grid">
                <BlueContainer />
                <SwiperGallery />
                <Container></Container>
            </Container>
        </Container>

    )

}

export default StatsSection; 
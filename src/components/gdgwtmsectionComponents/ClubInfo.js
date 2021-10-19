import React from "react"

import styled, { css } from "styled-components"
import closeIcon from "../../images/Close.svg"
import maximizeIcon from "../../images/Maximize.svg"
import minimizeIcon from "../../images/Minimize.svg"

const SectionG = styled.div`
  background: #2275da;
  padding: 0.3em;
  width: 80%;
  box-shadow: 10px 10px 0px 2px #0053ba;
`

// Header section styling

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  margin-bottom: 0.3em;
  padding: 0 1em 0 2.5em;
`
const Title = styled.h6`
  color: #0053ba;
  font-family: Roboto Mono;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
`

const Icons = styled.div`
  display: flex;
`

const WinIcon = styled.img`
  color: #2275da;
  width: 1.2em;
  margin: 0 0.5em;
`

// Content Section Styling
const Content = styled.div`
  background: white;
  padding: 0.2em 0 1em 3em;
`

const Club = styled.div`
  display: flex;
  margin: 0 0 0.5em;
  font-size: 1.5rem;
`

const ClubLogo = styled.img`
  width: 10em;
  margin: 0.5em 0.5em 0.5em 0;
`
const Text = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 0.1em 4em 0.1em 0;
  color: #202124;
  font-family: Roboto Mono;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
`

const SeeMore = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  background: #2275da;
  color: white;
  border-radius: 1px;
  margin: 0.5em 1.3em;
  padding: 0.25em 3em;

  font-family: Roboto Mono;
  font-size: 1rem;
  font-weight: 400;
`

export default function ClubInfo(props) {
  var Logo = require(`../../images/${props.logo}.svg`)

  return (
    <SectionG>
      <Header>
        <Title>{props.title} SECTION</Title>
        <Icons>
          <WinIcon src={minimizeIcon} alt="Minimize Icon" />
          <WinIcon src={maximizeIcon} alt="Maximize Icon" />
          <WinIcon src={closeIcon} alt="Close Icon" />
        </Icons>
      </Header>
      <Content>
        <Club>
          <ClubLogo src={Logo.default} alt="LOGO" />
        </Club>
        <Text>
          <p>{props.text}</p>
        </Text>
        <SeeMore>
          <Button onClick={() => window.open(props.website, "")}>
            SEE MORE
          </Button>
        </SeeMore>
      </Content>
    </SectionG>
  )
}

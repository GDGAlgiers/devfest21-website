import React from "react"
import styled, { css } from "styled-components"
import ClubInfo from "../components/gdgwtmsectionComponents/ClubInfo"
import ArrowIcon from "../images/ArrowTopLeft.svg"
import CodeImage from "../images/Code.svg"
import BinaryImage from "../images/BinaryTwo.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  position: relative;
  z-index: 1;
  background: transparent;
  padding: 1.2em 2em;
  height: 100%;
  overflow: auto;
`

const Blue = styled.div`
  background: #1c7ef0;
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  bottom: 0;
`

const White = styled.div`
  background: #fff;
  position: absolute;
  z-index: -1;
  width: 25%;
  top: 0;
  bottom: 0;
  right: 0;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
`

const GdgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`
const WtmContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const Arrow = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2em;
  width: 10em;
  z-index: 1;
`
const Code = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 28em;
  margin: 1em 0;
`

const Binary = styled.img`
  position: absolute;
  right: 0;
  z-index: 0;
  width: 100em;
  margin: 1em 0;
`

const textGDG =
  "GDG Algiers is a local group of developers and motivate young students who are interested in Google’s developer technology products and platforms. It is located at the national school of computer sciences and hosts a variety of technical activities for developers through different events that aim to help the developers community get the latest technology updates."

const textWTM =
  "WTM Algiers, also known as the 'Women Techmakers Algiers' program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at the National Higher School of Computer science and dedicated to anyone who is passionate and motivated about the tech field."

export default function GdgWtmSection() {
  return (
    <Blue>
      <Code src={CodeImage} alt="Code" />

      <White>
        <Arrow src={ArrowIcon} alt="Arrow Icon" />
        <Binary src={BinaryImage} alt="Binary" />
      </White>

      <Container>
        <GdgContainer>
          <ClubInfo
            title="GDG ALGIERS"
            style={{ alignSelf: "flex-start" }}
            text={textGDG}
            logo="GDG_Algiers_logo"
            website="https://www.gdgalgiers.com/"
          />
        </GdgContainer>

        <WtmContainer>
          <ClubInfo
            title="WTM ALGIERS"
            style={{ alignSelf: "flex-end" }}
            text={textWTM}
            logo="WTM_Algiers_logo"
            website="https://www.wtmalgiers.org/"
          />
        </WtmContainer>
      </Container>
    </Blue>
  )
}

import React from "react"
import styled, { css } from "styled-components"
import ClubInfo from "../../components/ClubInfo"
import ArrowIcon from "../../images/ArrowTopLeft.svg"
import BitsImage from '../../images/bits.png'
import BinaryImage from "../../images/bits.svg"

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
  position: relative;
  background: #1c7ef0;
  z-index: -2;
  overflow-y: hidden;
`

const White = styled.div`
  background: #fff;
  position: absolute;
  z-index: 1;
  width: 25%;
  top: 0;
  bottom: 0;
  right: 0;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
`

const Arrow = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2em;
  width: 10em;
  z-index: 1;
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
        <div className=" absolute -bottom-24 left-0 z-0 w-48 md:w-64">
            <img src={BitsImage} alt="Bits" />
        </div>

      <White className="invisible md:visible">
        <Arrow src={ArrowIcon} alt="Arrow Icon" />
        <Binary src={BinaryImage} alt="Binary" />
      </White>

      <Container>
        <div className="flex md:justify-start justify-center mb-3">
          <ClubInfo
            title="GDG ALGIERS"
            style={{ alignSelf: "flex-start" }}
            text={textGDG}
            logo="GDG_Algiers_logo"
            website="https://www.gdgalgiers.com/"
          />
        </div>

        <div className="flex md:justify-end justify-center mt-3">
          <ClubInfo
            title="WTM ALGIERS"
            style={{ alignSelf: "flex-end" }}
            text={textWTM}
            logo="WTM_Algiers_logo"
            website="https://www.wtmalgiers.org/"
          />
        </div>
      </Container>
    </Blue>
  )
}
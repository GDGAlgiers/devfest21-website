/* eslint-disable import/no-dynamic-require */
import React from 'react'

import styled from 'styled-components'
import closeIcon from '../../images/Close.svg'
import maximizeIcon from '../../images/Maximize.svg'
import minimizeIcon from '../../images/Minimize.svg'

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
    padding: 0 1em 0 1em;
`
const Title = styled.h6`
    color: #0053ba;
    font-family: Roboto Mono;
    font-weight: 500;
    text-align: left;
`

const Icons = styled.div`
    display: flex;
`

const WinIcon = styled.img`
    color: #2275da;
    margin: 0 0.5em;
`

// Content Section Styling
const Content = styled.div`
    background: white;
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

    color: #202124;
    font-family: Roboto Mono;
    font-weight: 500;
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

export default function ClubInfo({ logo, title, website, text }) {
    // eslint-disable-next-line global-require
    const Logo = require(`../../images/${logo}.svg`)

    return (
        <SectionG>
            <Header>
                <Title className="md:text-lg text-base">{title} SECTION</Title>
                <Icons>
                    <WinIcon
                        className="md:w-3 w-2"
                        src={minimizeIcon}
                        alt="Minimize Icon"
                    />
                    <WinIcon
                        className="md:w-3 w-2"
                        src={maximizeIcon}
                        alt="Maximize Icon"
                    />
                    <WinIcon
                        className="md:w-3 w-2"
                        src={closeIcon}
                        alt="Close Icon"
                        z-30
                    />
                </Icons>
            </Header>
            <Content className="px-4 md:px-6">
                <Club>
                    <ClubLogo src={Logo.default} alt="LOGO" />
                </Club>
                <Text className="text-center text-sm md:text-left md:text-base">
                    <p>{text}</p>
                </Text>
                <div className="flex mt-3 justify-center md:justify-end">
                    <Button onClick={() => window.open(website, '')}>
                        SEE MORE
                    </Button>
                </div>
            </Content>
        </SectionG>
    )
}

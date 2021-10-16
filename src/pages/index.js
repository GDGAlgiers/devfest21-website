import React from "react"
import styled, { css } from "styled-components"
import Footer from "../components/Footer";



export default function Home() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: palevioletred;
      color: white;
    `}
  `;

  const Container = styled.div`
    text-align: center;
  `

  return (
    <Container className="mt-10">

    
     
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <h3 className="mt-10">Let The Hunt Begin</h3>
      <Footer />
    
    </Container>
  )
}

import React from "react"
import styled, { css } from "styled-components"
import SpeakersSection from "../components/speakersSection/speakersSection";

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

  const speakers = [
    {
      name: 'someone famous1',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      jobs: ['CEO of google', 'web dev'],
    },
    {
      name: 'someone famous2',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      jobs: ['CEO of facebook'],
    },
    {
      name: 'someone famous3',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      jobs: ['CEO of microsoft', 'app developer'],
    },
    {
      name: 'someone famous4',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      jobs: ['AI developer'],
    },
  ];

  return (
    <>
      <Container className="mt-10">
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <h3 className="mt-10">Let The Hunt Begin</h3>
      </Container>
      <SpeakersSection speakers={speakers} />
    </>
  )
}

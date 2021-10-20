import React from 'react'
import styled from 'styled-components'

const ImgDiv = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
    position: relative;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
`

const Speaker = ({ name, image }) => {
    return (
        <div className="p-4 flex gap-8 justify-center items-center">
            <ImgDiv>
                <img src={image} alt={name} className="w-full h-full" />
            </ImgDiv>
        </div>
    )
}

export default Speaker

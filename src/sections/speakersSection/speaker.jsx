import React from 'react'
import styled from 'styled-components'

const ImgDiv = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
`

const ContentDiv = styled.div`
    width: 250px;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
    background-color: white;

`

const Speaker = ({ name, image, jobs }) => {
    return (
        <div className="p-4 flex flex-col md:flex-row gap-8 justify-center items-center">
            <ImgDiv>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </ImgDiv>
            <ContentDiv>
                <h3 className="text-xl md:text-4xl font-black capitalize font-mono text-black">
                    {name}
                </h3>
                {jobs.map((job, index) => (
                    <p
                        key={`sp-${index.toString()}`}
                        className="text-sm md:text-lg text-gray-500 font-mono"
                    >
                        {job}
                    </p>
                ))}
            </ContentDiv>
        </div>
    )
}

export default Speaker

import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
    position: relative;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
`;

const Picture = ({ image, name }) => {
    return (
        <ImgDiv>
            <img src={image} alt={name} className="w-full h-full top-0 left-0" />
        </ImgDiv>
    );
}

const ContentDiv = styled.div`
    width: 400px;
    height: 200px;
    border: 2px solid #000;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 40px 20px;
    background-color: white;
`;

const Speaker = ({ name, jobs, image }) => {
    return (
        <div className="p-4 flex gap-8 justify-center items-center">
            <Picture name={name} image={image} />
            <ContentDiv>
                <h3 className="text-4xl font-bold capitalize font-mono text-black">{name}</h3>
                {
                    jobs.map(job => (
                        <p className="text-lg text-gray-500 font-mono">{job}</p>
                    ))
                }
            </ContentDiv>
        </div>
    );
}

export default Speaker;
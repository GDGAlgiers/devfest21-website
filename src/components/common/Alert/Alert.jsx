import React from 'react';
import styled from 'styled-components' 
import closeIcon from '../../../images/Close.svg'
import minimizeIcon from '../../../images/Minimize.svg'
const Alert = (props) => {
    const AlertSection = styled.div`
     position : absolute ;
     left: 50%;
     transform: translate(-50%, -50%); 
     bottom : 10px ;
     z-index : 99 ; 
     border-radius : 2px  ; 
     border-bottom : solid 4px;
    ` ; 
    const WinIcon = styled.img`
    color: #2275da;
    margin: 0 0.3em;
`
    return (
        <AlertSection className={`${props.alertActive ?'block' : 'hidden' }  border-darkBlue bg-white-lighter text-darkBlue p-3 pr-5 pt-5 w-11/12 lg:w-3/12 md:w-4/12`}>
            {props.Message}
            <div className="absolute top-2 right-2 flex content-left cursor-pointer" onClick={props.closeAlert}>
            <WinIcon
                        className="md:w-3 w-2"
                        src={minimizeIcon}
                        alt="Close Icon"
                        z-30
                    />
                    <WinIcon
                        className="md:w-3 w-2"
                        src={closeIcon}
                        alt="Close Icon"
                        z-30
                    />
            </div>
            

        </AlertSection>
    );
};

export default Alert;
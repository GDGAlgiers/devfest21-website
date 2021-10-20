import React from 'react'

const SponsorsCard = (props) => {
    const cardClass = `lg:ml-36 md:ml-36 ${props.margin}`;

    return (
        <div className={cardClass}>
            <div className="w-48 lg:w-72 md:w-72 divide-black divide-y-8 border-black border-8 bg-white" style={{boxShadow: "8px 8px #1C7EF0"}}>
                <div className="h-8 lg:h-12 md:h-12"></div>
                <div className="h-40 lg:h-60 md:h-60 flex items-center justify-center">
                    <img className="p-4 lg:p-8"src={props.imageSrc} alt={props.imageAlt}/>
                </div>
            </div>
        </div>
    )
}

export default SponsorsCard;
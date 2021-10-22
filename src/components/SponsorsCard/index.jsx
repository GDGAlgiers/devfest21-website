import React from 'react'

const SponsorsCard = (props) => {
    const cardClass = `lg:mx-14 md:mx-14 ${props.margin} lg:w-9/12 md:w-9/12 w-full`;

    return (
        <div className={cardClass}>
            <div className="w-full divide-black divide-y-8 border-black border-8 bg-white-default" style={{boxShadow: "8px 8px #1C7EF0"}}>
                <div className="h-12 lg:h-12 md:h-12"></div>
                <div className="h-60 lg:h-60 md:h-60 flex items-center justify-center">
                    <img className="p-4 lg:p-8"src={props.imageSrc} alt={props.imageAlt}/>
                </div>
            </div>
        </div>
    )
}

export default SponsorsCard;
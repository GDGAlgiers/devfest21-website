import React from 'react'

const SponsorsCard = (props) => {
    const cardClass = `lg:mx-16 md:mx-14 ${props.margin} lg:w-7/12 md:w-7/12 w-7/12 ml-14 mb-4`;

    return (
        <div className={cardClass}>
            <div className="w-full divide-black divide-y-8 border-black border-8 bg-white-default" style={{boxShadow: "8px 8px #1C7EF0"}}>
                <div className="h-8 sm:h-12 lg:h-14 md:h-12"></div>
                <div className="h-40 sm:h-60 lg:h-80 md:h-60 flex items-center justify-center">
                    <img className={props.imagePadding} src={props.imageSrc} alt={props.imageAlt}/>
                </div>
            </div>
        </div>
    )
}

export default SponsorsCard;
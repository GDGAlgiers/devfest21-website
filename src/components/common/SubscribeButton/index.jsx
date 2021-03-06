import React from 'react'
import { navigate } from 'gatsby'

const SubscribeButton = ({ classes }) => (
    <button
        type="button"
        className={`relative border-2 border-white-lighter bg-darkBlue text-white-lighter ${classes}`}
        onClick={() =>
            navigate(
                'https://gdg.community.dev/events/details/google-gdg-algiers-presents-devfest-algiers-21/'
            )
        }
    >
        SUBSCRIBE
        <svg
            width="6"
            className="absolute bottom-1 right-2"
            height="7"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2.95837" cy="3.12793" r="2.94006" fill="#202124" />
        </svg>
        <svg
            width="6"
            height="7"
            className="absolute bottom-1 right-4"
            viewBox="0 0 6 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2.95837" cy="3.12793" r="2.94006" fill="#202124" />
        </svg>
    </button>
)
export default SubscribeButton

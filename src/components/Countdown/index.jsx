import React, { useEffect, useState } from 'react'

import CountdownElement from '../common/CountdownElement'

const Countdown = ({ className }) => {
    const [dateTime, setDateTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const setDiffFromSeconds = () => {
        const DevfestTimer = Date.parse('18 Nov 2021 18:00:00 GMT+1')
        const nowTime = Date.now()
        const diff = DevfestTimer - nowTime
        if (diff > 0) {
            let seconds = Math.floor(diff / 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            const days = Math.floor(hours / 24)

            hours -= days * 24
            minutes = minutes - days * 24 * 60 - hours * 60
            seconds =
                seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
            setDateTime({
                days,
                hours,
                minutes,
                seconds,
            })
            setInterval(setDiffFromSeconds, 1000)
        }
    }
    useEffect(() => {
        // start timer
        setDiffFromSeconds()
    }, [])
    return (
        <div
            className={`flex ml-2 justify-between sm:justify-center md:ml-16  flex-row ${className} `}
        >
            <CountdownElement title="Days" number={dateTime.days} />
            <CountdownElement title="Hours" number={dateTime.hours} />
            <CountdownElement title="Minutes" number={dateTime.minutes} />
            <CountdownElement title="Seconds" number={dateTime.seconds} />
        </div>
    )
}
export default Countdown

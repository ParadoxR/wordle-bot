import React, { useState, useEffect } from "react";

function Clock({ setHour }) {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
          setHour(date.getHours());
        }, 1000)
    
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
          <span id="clock">{date.toLocaleTimeString()}</span>
        </>
    )
}

export default Clock;
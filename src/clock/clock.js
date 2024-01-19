import React, { useState, useEffect } from "react";

function Clock() {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
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
import React, { useRef, useState } from "react";

function Stopwatch(){

    const [ start, setStart ] = useState(null);
    const [ now, setNow ] = useState(null);
    const IDForInterval = useRef(null);

    const startHandler = () => {
        setStart(Date.now());
        setNow(Date.now());

        IDForInterval.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const stopHandler = () => {
        clearInterval(IDForInterval.current);
    }

    let secondsPassed = 0;
    if( start != null && now != null ){
        secondsPassed = (now-start) / 1000;
    }

    return(
        <div>
            Time: {secondsPassed.toFixed(3)} <hr /> 
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
        </div>
    );
}

export default Stopwatch;
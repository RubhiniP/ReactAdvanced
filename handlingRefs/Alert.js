import React, { useEffect, useRef } from "react";
import moment from 'moment';

function Alert(){

    const time = useRef(Date.now());

    useEffect(() => {
        setInterval(() => {
            if(moment().diff(time.current, 'minutes') > 1){
                alert("You have been here for more than a minute");
            }
        }, 1000*60);
    }, []);

    return(
        <div>
            <input type="text"/>
        </div>
    );
}

export default Alert;
import React, { useState } from "react";

function EventHandlers(){

    const [ error, setError ] = useState(null);

    const clickHandler = () =>{
        try{
            throw new Error("This is an error button");
        }
        catch(error){
            setError(error);
            console.log(error);
            alert(error);
        }
    }

    if(error){
        return(
            <div>
                <p>Oops! Something went wrong.</p>
            </div>
        )
    }
    return(
        <div>
            <button onClick={clickHandler}>Click me to throw an Error!</button>
        </div>
    )
}

export default EventHandlers;
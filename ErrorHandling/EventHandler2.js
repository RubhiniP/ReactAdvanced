import React, { useState } from "react";

function ReactErrorBoundary(){

    const [ count, setCount ] = useState(0);
    const [ error, setError ] = useState(null);

    const clickHandler = () => {
        try{
            if(count > 5){
                throw new Error("Limit Exceeded");
            }
            setCount(count + 1);
        }
        catch(error){
            setError(error);
            console.log(error);
        }  
    }

    if(error){
        return(
            <div>
                Count limit is exceeded
            </div>
        );
    }
    return(
        <div>
            Count: {count}<hr />
            <button onClick={clickHandler}>Click Me</button>
        </div>
    );
}

export default ReactErrorBoundary;
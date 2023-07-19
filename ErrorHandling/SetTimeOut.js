import React, { useState } from "react";

function SetTimeOut(){

    const [ error, setError ] = useState(null);

    const clickHandler = () => {
        setTimeout(() => {
            try{
                throw Error("Delayed Error");
            }
            catch(error){
                setError(error);
            }
        }, 3000);
    }

    if(error){
        return(
            <div>
                There was an error in setTimeout method which is displayed after 3 seconds.
            </div>
        );
    }
    return(
        <div>
            <button onClick={clickHandler}>SetTimeOut Button</button>
        </div>
    );
}

export default SetTimeOut;
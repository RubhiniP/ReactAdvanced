import React from "react";

function Framework({name}){
    if(name === 'React'){
        throw new Error('Not a framework');
    }
    return(
        <div>
            {name}
        </div>
    );
}

export default Framework;
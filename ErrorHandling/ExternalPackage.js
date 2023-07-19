import React from "react";

function ExternalPackage({name}){
    if(name === 'React'){
        throw new Error("Error is thrown");
    }
    return(
        <div>
            {name}
        </div>
    );
}

export default ExternalPackage;
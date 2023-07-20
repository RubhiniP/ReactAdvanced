import React, { useContext } from "react";
import UserContext from "./UserContext";

function FunctionB(){

    const username = useContext(UserContext);

    return(
        <div>
            FunctionB - UserContext value provided by UserContext Provider is {username}
        </div>
    );
}

export default FunctionB;
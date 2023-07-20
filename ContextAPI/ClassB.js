import React, { Component } from "react";
import UserContext from "./UserContext";

class ClassB extends Component{
    
    static contextType = UserContext;

    render(){
        return(
            <div>
                Class B
                <p>Value accessed using contextType is {this.context}</p>
            </div>
        );
    }
}

// ClassB.contextType = UserContext;

export default ClassB;
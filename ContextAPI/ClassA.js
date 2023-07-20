import React, { Component } from "react";
import ClassB from "./ClassB";

class ClassA extends Component{
    render(){
        return(
            <div>
                <ClassB />
            </div>
        );
    }
}

export default ClassA;
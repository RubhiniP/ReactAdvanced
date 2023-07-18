import React, { Component } from "react";
import Input from "./Input";

class Button extends Component{

    constructor(props){
        super(props);
        this.parentRef = React.createRef();
    }
    
    componentDidMount(){
        console.log(this.parentRef);
    }

    clickHandler = () => {
        this.parentRef.current.focusInput();
    }

    render(){
    return(
        <div>
            <Input ref={this.parentRef} />
            <button onClick={this.clickHandler}>Focus child component input</button>
        </div>
        );        
    }
}

export default Button;
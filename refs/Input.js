import React, { Component } from "react";

class Input extends Component{

constructor(props){
    super(props);
    this.childRef = React.createRef();
}

focusInput = () => {
    this.childRef.current.focus();
}

render(){
    return(
        <div>
        <input type="text" ref={this.childRef}></input>
    </div>
    );
}
}

export default Input;
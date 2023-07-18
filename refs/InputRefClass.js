import React, { Component } from 'react';

class InputRefClass extends Component{

    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        // this.CBRef = null;
        // this.setCBRef = (element) => {
        //     this.CBRef = element;
        // }
    }

    componentDidMount(){
        // if(this.CBRef){
        //     this.CBRef.focus();
        // }
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
     
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}></input>
                {/* <input type="text" ref={this.setCBRef}></input> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }

}

export default InputRefClass;
import React, { Component } from "react";

class ErrorBoundary extends Component{

    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true,
            error
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>Something went wrong</h1>
                    {this.state.error.message && <p>This is the Error: {this.state.error.message}</p>}
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
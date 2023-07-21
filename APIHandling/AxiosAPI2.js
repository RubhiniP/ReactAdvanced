import axios from "axios";
import React, { Component } from "react";

class AxiosAPI2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            errorMessage: ''
        };
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => this.setState({
            items: result.data
        }))
        .catch(error => this.setState({
            errorMessage: 'Sorry there was an error retrieving the data'
        }))
    }

    render(){
        const { items, errorMessage } = this.state;

        return(
            <div>
                <h2>List of items</h2>
                {
                    items.length ? 
                    items.map(item => <p key={item.id}>{item.name}</p>) : null
                }
                {
                    errorMessage ? <p>{errorMessage}</p> : null
                }
            </div>
        );
    }
}

export default AxiosAPI2;
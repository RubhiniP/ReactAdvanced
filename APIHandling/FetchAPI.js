import React, { Component } from "react";

class FetchAPI extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true
            });
        })
    }

    render(){

        const { isLoaded, items } = this.state;
        if(!isLoaded)
            return <h2>Loading please wait...</h2>;
        return(
            <div>
                <h2>Here is the data fetched using fetch API</h2>
                {items.map((item) => (
                     <li key={item.id}>{item.name}</li>
                ))}
            </div>
        );
    }
}

export default FetchAPI;
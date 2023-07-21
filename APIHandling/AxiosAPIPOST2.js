import React, { Component } from "react";
import axios from "axios";

class AxiosAPIPOST2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(result => console.log(result.data))
        .catch(error => console.log)
    }


    render(){
        const { userId, title, body } = this.state;

        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input><br />
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input><br />
                <input type="text" name="body" value={body} onChange={this.changeHandler}></input><br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AxiosAPIPOST2;
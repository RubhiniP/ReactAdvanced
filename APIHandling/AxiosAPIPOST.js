import React, { useState } from "react";
import axios from "axios";

function AxiosAPIPOST(){

    const [ posts, setPosts ] = useState({
        userId: '',
        title: '',
        body: ''
    }); 

    const changeHandler = (e) => {
        setPosts({
            ...posts,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(posts);
        axios.post("https://jsonplaceholder.typicode.com/posts", posts)
        .then(result => {
            console.log(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" name="userId" value={posts.userId} onChange={changeHandler}></input>
            <input type="text" name="title" value={posts.title} onChange={changeHandler}></input>
            <input type="text" name="body" value={posts.body} onChange={changeHandler}></input>
            <button type="submit">Post data</button>
        </form>
    );
}

export default AxiosAPIPOST;
import axios from "axios";
import React, { useEffect, useState } from "react";

function GetById(){

    const [ post, setPost ] = useState({});
    const [ id, setId ] = useState(1);
    const [ buttonID, setButtonID ] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonID}`)
        .then(result => {
            console.log(result);
            setPost(result.data);
        })
        .catch(error => console.log(error))
    }, [buttonID]);

    const submitHandler = (e) => {
        setButtonID(id);
    }

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button type="submit" onClick={submitHandler}>GET</button><br />
            {post.title}
        </div>
    );
}

export default GetById;
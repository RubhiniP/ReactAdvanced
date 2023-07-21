import React, { useEffect, useState } from "react";
import axios from 'axios';

function AxiosAPI(){

    const [ items, setItems ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(result => {
            setItems(result.data);
            setIsLoaded(true);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    if(!isLoaded)
    return <h2>Please wait. Loading...</h2>;
    return(
        <div>
            <h2>Usernames fetched using Axios API</h2>
            <ul>
            {items.map(item => (
                <li key={item.id}>{item.username}</li>
            ))}
            </ul>
        </div>
    );
}

export default AxiosAPI;
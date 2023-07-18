import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(){

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/",{ state: "Error Not Found"}), 3000)
    });

    return(
    <div>
        <h2>NotFound PAGE</h2>
        <p>Redirecting to Home Page</p>
    </div>
    )
}

export default NotFound;
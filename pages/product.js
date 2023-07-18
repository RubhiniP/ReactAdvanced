import React from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function Product(){
    const { id } = useParams();
    const obj = useOutletContext();
    return(
        <div>
            <h2>Product {id}, {obj.react}</h2>
        </div>
    );
}

export default Product; 
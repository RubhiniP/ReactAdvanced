import { Link, Outlet, useSearchParams } from "react-router-dom";
// import { useState } from 'react';

function ProductLayout(){

    const [ searchParams, setSearchParams ] = useSearchParams({ n: 7 });
    const number = searchParams.get("n");
    // const [ number, setNumber ] = useState(7);
    return(
        <div>
            <Link to='/products/1'>Product 1</Link>{' '}
            <Link to='/products/2'>Product 2</Link>{' '}
            <Link to={`/products/${number}`}>Product {number}</Link><br />
            <Link to='/products/new'>New Product</Link>
            <Outlet context={{react: "advanced"}}/>
            <input type="number"
            value={number}
            onChange={e => setSearchParams({ n: e.target.value })}/>
        </div>
    );
}

export default ProductLayout;
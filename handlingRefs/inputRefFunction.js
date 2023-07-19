import React, { useEffect, useRef } from "react";

function InputRefFunction(){

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus(null);
    }, []);

    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    );

}

export default InputRefFunction;
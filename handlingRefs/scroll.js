import { useRef } from "react";

function Scroll(){

    const firstcatRef = useRef(null);
    const secondcatRef = useRef(null);    
    const thirdcatRef = useRef(null);
    
    const firstHandler = () => {
        firstcatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    const secondHandler = () => {
        secondcatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    const thirdHandler = () => {
        thirdcatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return(
        <>
        <nav>
            <button onClick={firstHandler}>FIRST</button>
            <button onClick={secondHandler}>SECOND</button>
            <button onClick={thirdHandler}>THIRD</button>
        </nav>
        <div>
            <ul>
                <li>
                    <img src="https://placekitten.com/g/200/200"
                    alt="first cat"
                    ref={firstcatRef}></img>

                    <img src="https://placekitten.com/g/300/200"
                    alt="second cat"
                    ref={secondcatRef}></img>

                    <img src="https://placekitten.com/g/250/200"
                    alt="third cat"
                    ref={thirdcatRef}></img>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Scroll;
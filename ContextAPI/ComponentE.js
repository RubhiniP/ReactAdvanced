import { UserConsumer, DefaultConsumer } from "./UserContext";

function ComponentE(){
    return(
        <>
        <UserConsumer>
            {(name) => {
                return <h3>The value accessed using UserContext API is {name}</h3>
            }}
        </UserConsumer>
        <DefaultConsumer>
            {(value) => {
                return <h3>The default value passed to DefaultConsumer is {value}</h3>
            }}
        </DefaultConsumer>
        </>
    );
}

export default ComponentE;